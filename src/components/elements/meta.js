import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  display: inline-block;
  border-radius: 1rem;
  font-size: ${props => props.theme.typography.size.sm};
  background-color: #abeeee;
  padding: ${props => props.theme.spacing(0.5, 1)};
  margin: ${props => props.theme.spacing(0.5, 1, 0.5, 0)};
`

const Meta = ({ meta }) => {
  return <Container>{meta}</Container>
}

export default Meta
