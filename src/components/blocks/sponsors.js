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
  display: inline-block;
  margin: ${props => props.theme.spacing(1)};
  max-width: 25vw;
`

const Sponsors = () => {
  const { allSponsorsJson } = useStaticQuery(
    graphql`
      query {
        allSponsorsJson {
          nodes {
            name
            slug
            url
          }
        }
      }
    `
  )

  console.log(allSponsorsJson)

  return (
    <Container>
      {allSponsorsJson.nodes.map(sponsor => (
        <Item key={sponsor.slug} href={sponsor.url} target="_blank">
          <span>{sponsor.name}</span>
        </Item>
      ))}
    </Container>
  )
}

export default Sponsors
