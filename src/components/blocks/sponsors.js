import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Item = styled.a`
  display: block;
  margin: ${props => props.theme.spacing(4, 4)};
  border-radius: ${props => props.theme.shape.radius}px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Img = styled.img`
  margin-bottom: 0;
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
            fixed(base64Width: 240, height: 120) {
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
      {allSponsorsJson.nodes.map(sponsor => (
        <Item key={sponsor.slug} href={sponsor.url} target="_blank">
          <Img {...findLogo(sponsor.slug)} alt={sponsor.name} />
        </Item>
      ))}
    </Container>
  )
}

export default Sponsors
