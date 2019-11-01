import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Share } from '../elements'
import { Transition } from 'semantic-ui-react'

const Block = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
`

const Container = styled.div`
  background: ${props => props.theme.colors.primaryGradient};
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: -1;
  align-items: center;
  justify-content: center;
  padding-bottom: ${props => props.theme.spacing(7)};
  display: ${props => (props.displayMenu ? 'flex' : 'flex')};
`

const Nav = styled.nav`
  text-align: center;
  padding-bottom: ${props => props.theme.spacing(8)};
`

const NavItem = styled.div`
  margin: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.typography.size.lg};
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 900;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`

const Pdf = styled.a`
  text-decoration: none;
  pointer-events: none;
`

const Shares = styled.div`
  display: flex;
`

const Menu = ({ open, pdf }) => {
  return (
    <Transition visible={open} animation="fade up" duration={300} directional>
      <Block>
        <Container displayMenu={open}>
          <div>
            <Nav>
              <NavItem>
                <Link to="/#index">
                  <NavItem>Session</NavItem>
                </Link>
              </NavItem>
              <Pdf href={pdf} target="_blank">
                <NavItem style={{ opacity: 0.5 }}>Timetable</NavItem>
              </Pdf>
              <Link to="/access">
                <NavItem>Access</NavItem>
              </Link>
            </Nav>
            <Shares>
              <Share
                name="facebook"
                iconColor={() => props => props.theme.colors.primary['300']}
              />
              <Share
                name="twitter"
                iconColor={() => props => props.theme.colors.primary['300']}
              />
            </Shares>
          </div>
        </Container>
      </Block>
    </Transition>
  )
}

export default Menu
