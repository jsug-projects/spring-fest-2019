import React from 'react'
import { element } from 'prop-types'
import styled from 'styled-components'

const Container = styled.section`
  margin: ${props => props.theme.spacing(4)} auto;
  padding: 0 ${props => props.theme.spacing(2)};
`

const Section = ({ children }) => <Container>{children}</Container>

Section.propTypes = {
  children: element.isRequired,
}

export default Section
