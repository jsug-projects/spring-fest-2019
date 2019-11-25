import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  padding-top: 64px;
  min-height: 100vh;
  color: #fff;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  position: relative;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    min-height: ${props => props.viewHeight}px;
    background-attachment: scroll;
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: 0 2rem;
  }
`

const Logo = styled.img`
  margin-top: ${props => props.theme.spacing(7)};
  margin-bottom: ${props => props.theme.spacing(2)};

  width: 10rem;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    width: 8rem;
    margin-top: ${props => props.theme.spacing(5)};
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    width: 4rem;
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`

const Title = styled.h1`
  font-family: ${props => props.theme.typography.types.display};
  margin: 0;
  font-size: 5rem;
  line-height: 5.5rem;
  font-weight: 900;
  margin-bottom: ${props => props.theme.spacing(1)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 5rem;
    line-height: 2.7rem;
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 1.7rem;
    line-height: 2rem;
    margin-bottom: ${props => props.theme.spacing(-0.5)};
  }
`

const Center = styled.div`
  text-align: center;
`

const PlaceText = styled.p`
  font-family: ${props => props.theme.typography.types.display};
  font-size: 2rem;
  margin-bottom: 0;
  letter-spacing: -0.1rem;
  font-weight: 900;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 1.7rem;
    margin-bottom: ${props => props.theme.spacing(0.3)};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 1rem;
    margin-bottom: ${props => props.theme.spacing(-0.5)};
  }
`

const DateText = styled.p`
  font-family: ${props => props.theme.typography.types.display};
  margin-top: ${props => props.theme.spacing(-1)};
  font-size: 1.5rem;
  font-weight: 700;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 0.75rem;
    margin-top: 0;
  }
`

const DescriptionText = styled.p`
  width: 60%;
  font-size: ${props => props.theme.typography.size.rg};
  text-align: center;
  margin: ${props => props.theme.spacing(3, 0, 5)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    width: 70%;
    font-size: ${props => props.theme.typography.size.rg};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    width: 85%;
    margin: 1rem auto;
    font-size: ${props => props.theme.typography.size.xs};
  }
`

const ActionButton = styled.a`
  cursor: pointer;
  opacity: 1;
  padding: ${props => props.theme.spacing(2, 5)};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary['300']};
  transition: all 0.1s ease-in;
  border-radius: 50px;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: ${props => props.theme.spacing(2)};

  &:hover {
    transform: scale(1.05);
    color: ${props => props.theme.colors.primary['300']};
    box-shadow: 0px 5px 8px 1px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    padding: ${props => props.theme.spacing(1.5, 4)};
  }
`

const ButtonText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: ${props => props.theme.spacing(0.25)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: ${props => props.theme.typography.size.md};
  }
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
              venue
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
        springLogoImage: file(relativePath: { eq: "images/spring-logo.svg" }) {
          id
          publicURL
        }
      }
    `
  )

  const { title, description, event } = site.siteMetadata
  const [viewHeight, setViewHeight] = useState(0)

  useEffect(() => {
    updateViewHeight()
  }, [])

  const updateViewHeight = () => {
    setViewHeight(parseInt(window.innerHeight))
  }

  return (
    <Container
      style={{
        backgroundImage: `url(${bannerImage.childImageSharp.original.src})`,
      }}
      viewHeight={viewHeight}
    >
      <Logo src={springLogoImage.publicURL} />
      <Title>{title.toUpperCase()}</Title>
      <Center>
        <PlaceText>{event.venue}</PlaceText>
        <DateText>{event.date}</DateText>
      </Center>
      <DescriptionText>{description}</DescriptionText>
      <ActionButton
        href="https://jsug.doorkeeper.jp/events/99486"
        target="_blank"
      >
        <ButtonText>参加申込</ButtonText>
      </ActionButton>
    </Container>
  )
}

export default Banner
