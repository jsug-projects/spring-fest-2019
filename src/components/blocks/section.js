import React from 'react'
import { element } from 'prop-types'
import styled from 'styled-components'

import { SectionTitle } from '../elements'

const Container = styled.section`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(8, 0, 4)};
  width: 78%;
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: ${props => props.theme.spacing(4, 0)};
    width: 90%;
  }
`
const Block = styled.section`
  background: ${props => props.backgroundColor};
`

const Section = ({ children, title, fontColor, backgroundColor }) => {
  return (
    <Block backgroundColor={backgroundColor}>
      <Container>
        <SectionTitle fontColor={fontColor}>{title.toUpperCase()}</SectionTitle>
        {children}
      </Container>
    </Block>
  )
}

Section.propTypes = {
  children: element.isRequired,
}

export default Section
