import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby'

import { Share } from '../elements'
import { Icon } from 'semantic-ui-react'
import { Menu } from './index'

const Container = styled.header`
  display: block;
  background: ${props => props.headerColor};
  width: 100%;
  color: ${props => props.theme.colors.white};
  position: fixed;
  z-index: 1000;
  top: 0;

  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
`

const PseudoBackground = styled.header`
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  opacity: ${props => props.opacity};
  background: ${props => props.theme.colors.primaryGradient};
  transition: all 0.2s ease-in-out;
  position: absolute;
  z-index: -100;
`

const Logo = styled.img`
  max-height: 2rem;
  margin-bottom: 0;
  margin-right: ${props => props.theme.spacing(1.5)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    max-height: 1.3rem;
    margin-right: ${props => props.theme.spacing(1.5)};
  }
`

const Title = styled.h1`
  font-size: ${props => props.theme.typography.size.lg};
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 900;
  margin: 0;

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: ${props => props.theme.typography.size.lg};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 1.1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${props => props.theme.spacing(4)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    padding-right: ${props => props.theme.spacing(3)};
  }
`

const NavItem = styled.div`
  margin: ${props => props.theme.spacing(1, 2)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    margin: ${props => props.theme.spacing(1)};
  }
`

const Shares = styled.div`
  display: flex;
`

const Pdf = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 700;

  // &:hover {
  //   color: ${props => props.theme.colors.neutral['25']};
  // }
  
  opacity: 0.5;
  pointer-events: none;
`

const Link = styled(GatsbyLink)`
  display: flex;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 700;

  &:hover {
    color: ${props => props.theme.colors.neutral['25']};
  }
`

const TitleHolder = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;
`

const NormalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing(1, 5)};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    padding: ${props => props.theme.spacing(1, 3)};
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    display: none;
  }
`

const MobileHeader = styled.div`
  display: none;
  padding: ${props => props.theme.spacing(1.5, 3)};

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: ${props => props.theme.spacing(1, 3)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const IconHolder = styled.div`
  display: none;
  z-index: 100;
  cursor: pointer;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    display: block;
  }
`

const Header = ({ siteTitle, dynamic, headerColor, headerRef, scrolled }) => {
  const { pdf, springLogoImage } = useStaticQuery(
    graphql`
      query {
        pdf: file(
          relativePath: { eq: "timetable/spring-fest-2019-timetable.pdf" }
        ) {
          publicURL
        }
        springLogoImage: file(relativePath: { eq: "images/spring-logo.svg" }) {
          id
          publicURL
        }
      }
    `
  )

  const neutralColor = () => props => props.theme.colors.neutral['500']
  const primaryColor = () => props => props.theme.colors.primary['300']

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [iconColor, setIconColor] = useState(
    dynamic ? neutralColor : primaryColor
  )

  useEffect(() => {
    if (dynamic) {
      handleOnScroll()
      window.addEventListener('scroll', handleOnScroll, true)
      return () => {
        window.removeEventListener('scroll', handleOnScroll, true)
      }
    }
  }, [])

  const handleOnScroll = () => {
    if (scrolled()) {
      setIsScrolled(true)
      setIconColor(primaryColor)
      setOpacity(1)
    } else {
      setIsScrolled(false)
      setIconColor(neutralColor)
      setOpacity(0)
    }
  }

  return (
    <Container ref={headerRef} headerColor={headerColor} scrolled={isScrolled}>
      <PseudoBackground opacity={opacity} />
      <NormalHeader>
        {siteTitle && (
          <Link to="/#index">
            <TitleHolder>
              <Logo src={springLogoImage.publicURL} />
              <Title>{siteTitle.toUpperCase()}</Title>
            </TitleHolder>
          </Link>
        )}
        <Nav>
          <NavItem>
            <Link to="/#index">SESSIONS</Link>
          </NavItem>
          {/*<NavItem>*/}
          {/*  <Pdf href={pdf.publicURL} target="_blank">*/}
          {/*    TIMETABLE*/}
          {/*  </Pdf>*/}
          {/*</NavItem>*/}
          <NavItem>
            <Link to="/access">ACCESS</Link>
          </NavItem>
        </Nav>
        <Shares>
          <Share name="facebook" iconColor={iconColor} />
          <Share name="twitter" iconColor={iconColor} />
        </Shares>
      </NormalHeader>
      <MobileHeader>
        <Menu open={isOpen} pdf={pdf.publicURL} />
        {siteTitle && (
          <Link to="/#index">
            <TitleHolder>
              <Logo src={springLogoImage.publicURL} />
              <Title>{siteTitle.toUpperCase()}</Title>
            </TitleHolder>
          </Link>
        )}
        <IconHolder>
          {isOpen ? (
            <Icon
              name={'times'}
              fitted
              circular
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Icon
              name={'bars'}
              fitted
              circular
              onClick={() => setIsOpen(true)}
            />
          )}
        </IconHolder>
      </MobileHeader>
    </Container>
  )
}

export default Header
