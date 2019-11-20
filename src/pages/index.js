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
  margin: 0 auto;
`

export default ({ data }) => {
  const {
    site,
    allBoothJson,
    allSessionsJson,
    allCompaniesJson,
    allTimeJson,
  } = data
  const time = [allTimeJson.nodes]
  const [headerHeight, setHeaderHeight] = useState(0)
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    setHeaderHeight(headerRef.current.getBoundingClientRect().height)
  })

  const anchor = {
    paddingTop: headerHeight,
  }

  const helper = {
    marginTop: -headerHeight,
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
      <Banner />
      <SectionWrap ref={sectionRef}>
        <div style={helper}>
          <div id="session" style={anchor}>
            <Section
              title="sessions"
              backgroundColor={props => props.theme.colors.white}
              fontColor={props => props.theme.colors.primary['300']}
            >
              <Sessions items={allSessionsJson.nodes} time={time} />
            </Section>
          </div>
        </div>
        <div style={helper}>
          <div id="booth" style={anchor}>
            <Section
              title="booths"
              backgroundColor={props => props.theme.colors.primaryGradient}
              fontColor={props => props.theme.colors.white}
            >
              <Booths items={allBoothJson.nodes} />
            </Section>
          </div>
        </div>
        <div style={helper}>
          <div id="sponsor" style={anchor}>
            <Section
              title="sponsors"
              backgroundColor={props => props.theme.colors.white}
              fontColor={props => props.theme.colors.primary['300']}
            >
              <Sponsors items={sponsor} />
            </Section>
          </div>
        </div>
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
    allTimeJson {
      nodes {
        id
        time
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
          timeId
        }
        speakers {
          affiliation
          id
          name
          profile
          image {
            childImageSharp {
              resize(width: 300) {
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
