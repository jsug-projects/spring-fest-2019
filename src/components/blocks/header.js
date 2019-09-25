import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

import { Share } from '../elements'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing(1, 5)};
  background-color: ${props =>
    props.transparent ? 'transparent' : props.theme.colors.primary[300]};
  width: 100%;
  color: ${props => props.theme.colors.white};
  position: ${props => {
    if (props.fixed) {
      return 'fixed'
    } else if (props.transparent) {
      return 'absolute'
    }
    return 'relative'
  }};
  top: 0;
`

const Title = styled.h1`
  font-size: ${props => props.theme.typography.size.lg};
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 900;
  margin: 0;
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${props => props.theme.spacing(4)};
`

const NavItem = styled.div`
  margin: ${props => props.theme.spacing(1, 2)};
`

const Shares = styled.div`
  display: flex;
`

const Link = styled(GatsbyLink)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-family: ${props => props.theme.typography.types.display};
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`

const Header = ({ siteTitle, transparent, handleOnFixed, handleOnUnFixed }) => {
  const [isFixedHeader, setFixedHeader] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!transparent) {
      window.addEventListener('scroll', handleOnScroll)
      return () => {
        window.removeEventListener('scroll', handleOnScroll)
      }
    }
  }, [])

  const handleOnScroll = () => {
    const { scrollY, innerHeight } = window
    const containerHeight = containerRef.current.getBoundingClientRect().height
    if (scrollY >= innerHeight) {
      setFixedHeader(true)
      handleOnFixed(containerHeight)
    } else {
      setFixedHeader(false)
      handleOnUnFixed()
    }
  }
  return (
    <Container
      ref={containerRef}
      transparent={transparent}
      fixed={isFixedHeader}
    >
      {siteTitle && <Title>{siteTitle.toUpperCase()}</Title>}
      <Nav>
        <NavItem>
          <Link to="/#timetable">TIMETABLE</Link>
        </NavItem>
        <NavItem>
          <Link to="/#access">ACCESS</Link>
        </NavItem>
      </Nav>
      <Shares>
        <Share name="facebook" colored={!transparent} />
        <Share name="twitter" colored={!transparent} />
      </Shares>
    </Container>
  )
}

export default Header
