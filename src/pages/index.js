import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

import { BaseLayout } from '../components/layouts'
import {
  Banner,
  Booths,
  SEO,
  Section,
  Sessions,
  Sponsors,
} from '../components/blocks'

const SectionWrap = styled.div`
  padding-top: ${props => props.pseudoMargin}px;
  margin: 0 auto;
`

export default ({ data }) => {
  const { site, allBoothJson, allSessionsJson, allCompaniesJson } = data
  const [pseudoMargin, setPseudoMargin] = useState(0)
  const time = ['timetable', 'time']
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    })
  }

  useEffect(() => {
    updateMargin()
    window.addEventListener('resize', updateMargin, true)
    return () => {
      window.removeEventListener('resize', updateMargin, true)
    }
  }, [])

  const updateMargin = () => {
    setPseudoMargin(headerRef.current.getBoundingClientRect().height)
  }

  const scrolled = () => {
    const scrollTop = sectionRef.current.getBoundingClientRect().top
    return scrollTop <= 0
  }

  const sponsor = []
  allCompaniesJson.nodes.map(s => {
    if (s.sponsoring) sponsor.push(s)
  })

  return (
    <BaseLayout
      headerColor={props => props.theme.colors.neutral['500']}
      siteTitle={site.siteMetadata.title}
      dynamic
      headerRef={headerRef}
      scrolled={scrolled}
    >
      <SEO title="Home" />
      <Banner
        scrollToSection={() => scrollToSection()}
        pseudoMargin={pseudoMargin}
      />
      <SectionWrap ref={sectionRef} pseudoMargin={pseudoMargin}>
        <Section
          title="sessions"
          backgroundColor={props => props.theme.colors.white}
          fontColor={props => props.theme.colors.primary['300']}
        >
          <Sessions items={allSessionsJson.nodes} time={time} />
        </Section>
        <Section
          title="booth"
          backgroundColor={props => props.theme.colors.primaryGradient}
          fontColor={props => props.theme.colors.white}
        >
          <Booths items={allBoothJson.nodes} />
        </Section>
        <Section
          title="sponsors"
          backgroundColor={props => props.theme.colors.white}
          fontColor={props => props.theme.colors.primary['300']}
        >
          <Sponsors items={sponsor} />
        </Section>
      </SectionWrap>
    </BaseLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allSessionsJson {
      nodes {
        id
        slides
        title
        abstract
        meta
        enquete
        lunch
        hashtag
        timetable {
          id
          place
          time
        }
        speakers {
          affiliation
          id
          name
          profile
          image {
            childImageSharp {
              resize(width: 144) {
                src
              }
            }
          }
        }
      }
    }
    allBoothJson {
      nodes {
        id
        description
        title
        sponsor {
          name
          slug
          profile
          url
          image {
            childImageSharp {
              resize(width: 120) {
                src
              }
            }
          }
        }
      }
    }
    allCompaniesJson {
      nodes {
        id
        name
        slug
        url
        profile
        sponsoring
        image {
          childImageSharp {
            resize(width: 240, height: 150) {
              src
            }
          }
        }
      }
    }
  }
`
