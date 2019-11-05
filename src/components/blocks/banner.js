import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Icon, Transition } from 'semantic-ui-react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  padding-top: 64px;
  min-height: 100vh;
  color: #fff;
  background-size: cover;
  text-align: center;
  margin-bottom: -${props => props.pseudoMargin}px;
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

  width: 11rem;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    width: 8rem;
    margin-top: ${props => props.theme.spacing(5)};
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    width: 5rem;
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`

const Title = styled.h1`
  font-family: ${props => props.theme.typography.types.display};
  margin: 0;
  font-size: 6.5rem;
  line-height: 5.5rem;
  font-weight: 900;
  margin-bottom: ${props => props.theme.spacing(2)};

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
  font-size: 2.3rem;
  margin-bottom: 0;
  letter-spacing: -0.1rem;
  font-weight: 900;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 1.7rem;
    margin-bottom: ${props => props.theme.spacing(0.3)};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 1.2rem;
    margin-bottom: ${props => props.theme.spacing(-0.5)};
  }
`

const DateText = styled.p`
  font-family: ${props => props.theme.typography.types.display};
  margin-top: ${props => props.theme.spacing(-1)};
  font-size: 1.8rem;
  font-weight: 700;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 0.9rem;
    margin-top: 0;
  }
`

const DescriptionText = styled.p`
  width: 60%;
  margin: 2rem auto;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(2)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    width: 70%;
    font-size: ${props => props.theme.typography.size.rg};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    width: 85%;
    margin: 1rem auto;
    font-size: ${props => props.theme.typography.size.sm};
  }
`

const ActionButton = styled.div`
  cursor: pointer;
  font-size: ${props => props.theme.typography.size.lg};
  opacity: 1;
  position: absolute;
  bottom: 2.5vh;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    display: none;
  }
`

const ButtonText = styled.p`
  margin-bottom: ${props => props.theme.spacing(-1)};
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 700;
`

const Banner = ({ scrollToSection, pseudoMargin }) => {
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
  const [visible, setVisible] = useState(false)
  const [viewHeight, setViewHeight] = useState(0)

  useEffect(() => {
    setTimeout(() => setVisible(true), 300)
    updateViewHeight()
  }, [])

  const updateViewHeight = () => {
    setViewHeight(parseInt(window.innerHeight))
  }

  return (
    <Container
      pseudoMargin={pseudoMargin}
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
      <DescriptionText>{description} </DescriptionText>
      <ActionButton onClick={scrollToSection}>
        <Transition visible={visible} animation={'fade up'} duration={500}>
          <>
            <ButtonText>SESSION</ButtonText>
            <Icon name="caret down" />
          </>
        </Transition>
      </ActionButton>
    </Container>
  )
}

export default Banner
