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
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  margin-bottom: -${props => props.pseudoMargin}px;
  position: relative;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    min-height: calc(var(--vh, 1vh) * 100);
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: 0 2rem;
  }
`

const Logo = styled.img`
  margin-top: ${props => props.theme.spacing(7)};
  margin-bottom: ${props => props.theme.spacing(5)};
  margin-bottom: ${props => props.theme.spacing(2)};

  width: 18vh;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    width: 13vh;
  }
`

const Title = styled.h1`
  font-family: ${props => props.theme.typography.types.display};
  margin: 0;
  font-size: 6.5rem;
  line-height: 5.5rem;
  font-weight: 900;
  margin-bottom: ${props => props.theme.spacing(2)};

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 3rem;
    line-height: 2.7rem;
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
    font-size: 2rem;
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 1.25rem;
    margin-bottom: ${props => props.theme.spacing(-0.5)};
  }
`

const DateText = styled.p`
  font-family: ${props => props.theme.typography.types.display};
  margin-top: ${props => props.theme.spacing(-1)};
  font-size: 1.8rem;
  font-weight: 700;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 0.95rem;
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
    font-size: ${props => props.theme.typography.size.lg};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    width: 80%;
    margin: 1rem auto;
    font-size: ${props => props.theme.typography.size.md};
  }
`

const ActionButton = styled.div`
  cursor: pointer;
  font-size: ${props => props.theme.typography.size.lg};
  opacity: 1;
  position: absolute;
  bottom: 2.5vh;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    margin-bottom: ${props => props.theme.spacing(2)};
    font-size: ${props => props.theme.typography.size.md};
    bottom: 0;
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
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  const { title, description, event } = site.siteMetadata
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 300)
  }, [])

  return (
    <Container
      pseudoMargin={pseudoMargin}
      style={{
        backgroundImage: `url(${bannerImage.childImageSharp.original.src})`,
      }}
      viewHeight={vh}
    >
      <Logo src={springLogoImage.publicURL} />
      <Title>{title.toUpperCase()}</Title>
      <Center>
        <PlaceText>{event.venue}</PlaceText>
        <DateText>{event.date}</DateText>
      </Center>
      <DescriptionText>{description}</DescriptionText>
      <Transition visible={visible} animation={'fade up'} duration={500}>
        <ActionButton onClick={scrollToSection}>
          <ButtonText>SESSION</ButtonText>
          <Icon name="caret down" />
        </ActionButton>
      </Transition>
    </Container>
  )
}

export default Banner
