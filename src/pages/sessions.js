import React from 'react'
import { graphql } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { SEO, Section, Timetable } from '../components/blocks'

const SessionsPage = ({ data }) => {
  const { allSessionsJson, allFile } = data

  const findSrcById = id => {
    const s = allFile.nodes.find(f => f.name === id.toString())
    return s ? s.childImageSharp.resize.src : null
  }

  const sessions = allSessionsJson.nodes.map(session => {
    return {
      ...session,
      speakers: session.speakers.map(s => {
        return {
          ...s,
          src: findSrcById(s.id),
        }
      }),
    }
  })

  return (
    <BaseLayout>
      <SEO title="Sessions" />
      <Section>
        <h1>Sessions</h1>
      </Section>
      <Timetable sessions={sessions} />
    </BaseLayout>
  )
}

export const query = graphql`
  query {
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
`

export default SessionsPage
