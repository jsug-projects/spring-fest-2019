import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import FloorItem from './item'

export default () => {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            event {
              hall {
                floor
                room {
                  name
                }
              }
            }
          }
        }
        allFile(
          sort: { order: ASC, fields: name }
          filter: { relativeDirectory: { eq: "images/hall" } }
        ) {
          edges {
            node {
              childImageSharp {
                resize(width: 800) {
                  src
                }
              }
              name
            }
          }
        }
      }
    `
  )
  const { hall } = site.siteMetadata.event
  const hallMap = allFile.edges
  return hall.map((hallItem, idx) => (
    <div key={hallItem.floor}>
      <FloorItem item={hallItem} map={hallMap[idx]} />
    </div>
  ))
}
