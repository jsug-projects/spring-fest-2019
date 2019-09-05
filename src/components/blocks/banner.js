import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  min-height: 100vh;
  color: #fff;
  background-attachment: fixed;
  background-size: cover;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Col = styled.div`
  margin: 0 1rem;
`

const Banner = () => {
  const { site, bannerImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            event {
              place
              date
            }
          }
        }
        bannerImage: file(relativePath: { eq: "images/banner.jpg" }) {
          id
          childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
      }
    `
  )

  const { title, description, author, event } = site.siteMetadata
  const d = new Date(event.date)
  const day = idx => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][idx]

  return (
    <Container
      style={{
        backgroundImage: `url(${bannerImage.childImageSharp.original.src})`,
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <Row>
        <Col>{author}</Col>
        <Col>{event.place}</Col>
        <Col>{`${d.getFullYear()}.${d.getMonth()}.${d.getDate()} (${day(
          d.getDay()
        )})`}</Col>
      </Row>
    </Container>
  )
}

export default Banner
