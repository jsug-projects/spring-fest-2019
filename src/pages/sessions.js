import React from 'react'
import { Link, graphql } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { SEO, Section } from '../components/blocks'

const SessionsPage = ({ data }) => {
  const { allSessionsJson } = data

  const renderHallName = value => <h2>{value}</h2>
  const renderSessions = sessions =>
    sessions.map(session => (
      <div key={session.id}>
        <h3>{session.title}</h3>
        <p>{session.abstract}</p>
      </div>
    ))

  return (
    <BaseLayout>
      <SEO title="Page two" />
      <Section>
        <>
          {allSessionsJson.group.map(group => {
            return (
              <div key={group.fieldValue}>
                {renderHallName(group.fieldValue)}
                {renderSessions(group.nodes)}
              </div>
            )
          })}
        </>
      </Section>
    </BaseLayout>
  )
}

export const query = graphql`
  query {
    allSessionsJson {
      group(field: place) {
        fieldValue
        nodes {
          id
          abstract
          meta
          place
          speakers {
            id
            name
            profile
            affiliation
          }
          timetable
          title
        }
      }
    }
  }
`

export default SessionsPage
