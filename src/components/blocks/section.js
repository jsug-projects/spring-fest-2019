import React from 'react'
import { element } from 'prop-types'
import styled from 'styled-components'

import { SectionTitle } from '../elements'

const Container = styled.section`
  margin: ${props => props.theme.spacing(4)} auto;
  padding: 0 ${props => props.theme.spacing(2)};
`

const Section = ({ children, title }) => (
  <Container>
    <SectionTitle>{title.toUpperCase()}</SectionTitle>
    {children}
  </Container>
)

Section.propTypes = {
  children: element.isRequired,
}

export default Section
