import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`

const Item = styled.a`
  display: block;
  margin: ${props => props.theme.spacing(1)};
`

const Sponsors = () => {
  const { allSponsorsJson, allImageSharp } = useStaticQuery(
    graphql`
      query {
        allSponsorsJson {
          nodes {
            name
            slug
            url
          }
        }
        allImageSharp {
          nodes {
            id
            fixed(base64Width: 323, height: 200) {
              base64
              width
              height
            }
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    `
  )

  const findLogo = slug => {
    const logo = allImageSharp.nodes.find(img => img.parent.name === slug)
    if (!logo) {
      return null
    }

    const { base64, width, height } = logo.fixed
    return {
      src: base64,
      width,
      height,
    }
  }

  return (
    <Container>
      <h2>Sponsors</h2>
      {allSponsorsJson.nodes.map(sponsor => (
        <Item key={sponsor.slug} href={sponsor.url} target="_blank">
          <img {...findLogo(sponsor.slug)} alt={sponsor.name} />
        </Item>
      ))}
    </Container>
  )
}

export default Sponsors
