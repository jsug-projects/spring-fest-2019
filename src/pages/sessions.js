import React from 'react'
import { Link, graphql } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { SEO, Section, Session } from '../components/blocks'

const SessionsPage = ({ data }) => {
  const { allSessionsJson } = data

  const renderHallName = value => <h2>{value}</h2>
  const renderSessions = sessions =>
    sessions.map(session => <Session key={session.id} {...session} />)

  return (
    <BaseLayout>
      <SEO title="Page two" />
      <Section>
        <>
          {allSessionsJson.group.map(group => {
            return (
              <div key={group.fieldValue}>
                <h2>{group.fieldValue}</h2>
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
          slides
        }
      }
    }
  }
`

export default SessionsPage
