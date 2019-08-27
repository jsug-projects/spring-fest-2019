import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { ShareIcon } from '../elements'

const Container = styled.header`
  display: flex;
  align-items: center;
  justfy-content: space-between;
  padding: ${props => props.theme.spacing(3, 5)};
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

const Header = () => (
  <Container>
    <Nav>
      <NavItem>
        <Link to="/">/</Link>
      </NavItem>
      <NavItem>
        <Link to="/#access">Access</Link>
      </NavItem>
      <NavItem>
        <Link to="/sessions/">Sessions</Link>
      </NavItem>
    </Nav>
    <Shares>
      <ShareIcon name="twitter" />
      <ShareIcon name="facebook" />
    </Shares>
  </Container>
)

export default Header
