import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  padding-top: 64px;
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

const Title = styled.h1`
  font-family: ${props => props.theme.typography.types.display};
  font-size: 7rem;
  font-weight: 900;
`

const Center = styled.div`
  text-align: center;
`

const PlaceText = styled.p`
  font-family: ${props => props.theme.typography.types.display};
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
  letter-spacing: 0.3rem;
`

const DateText = styled.p`
  font-family: ${props => props.theme.typography.types.display};
  font-size: 2rem;
`

const DescriptionText = styled.p`
  width: 60%;
  margin: 3rem auto;
`

const Banner = () => {
  const { site, bannerImage, springLogoImage } = useStaticQuery(
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
        bannerImage: file(relativePath: { eq: "images/banner.png" }) {
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

  return (
    <Container
      style={{
        backgroundImage: `url(${bannerImage.childImageSharp.original.src})`,
      }}
    >
      <Title>{title.toUpperCase()}</Title>
      <Center>
        <PlaceText>{event.place}</PlaceText>
        <DateText>{event.date}</DateText>
      </Center>
      <DescriptionText>{description}</DescriptionText>
    </Container>
  )
}

export default Banner
