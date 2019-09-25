import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { BaseLayout } from '../components/layouts'
import {
  Access,
  Banner,
  Header,
  SEO,
  Section,
  Sponsors,
} from '../components/blocks'

const SectionWrap = styled.div`
  padding-top: ${props => props.headerHeight}px;
`

const IndexPage = () => {
  const [isFixedHeader, setIsFixedHeader] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allSessionsJson {
        nodes {
          id
          title
          abstract
          hashtag
          enquete
          meta
          slides
          speakers {
            affiliation
            id
            name
            profile
          }
          timetable {
            place
            time
          }
        }
      }
      allFile(filter: { relativeDirectory: { eq: "images/speakers" } }) {
        nodes {
          name
          childImageSharp {
            resize(width: 144, height: 144) {
              src
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <BaseLayout>
      <SEO title="Home" />
      <Banner />
      <Header
        siteTitle={data.site.siteMetadata.title}
        handleOnFixed={headerHeight => {
          setHeaderHeight(headerHeight)
        }}
        handleOnUnFixed={() => {
          setHeaderHeight(0)
        }}
      />
      <SectionWrap headerHeight={headerHeight}>
        <Section title="sessions">
          <div />
        </Section>
        <Section title="booth">
          <div />
        </Section>
        <Section title="sponsors">
          <Sponsors />
        </Section>
      </SectionWrap>
    </BaseLayout>
  )
}

export default IndexPage
