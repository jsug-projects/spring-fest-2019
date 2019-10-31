import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  display: inline-block;
  border-radius: 0.5rem;
  font-size: ${props => props.theme.typography.size.sm};
  background-color: #abeeee;
  padding: ${props => props.theme.spacing(0.5, 1)};
  margin-right: ${props => props.theme.spacing(1)};
  margin-bottom: ${props => props.theme.spacing(0.5)};
  white-space: nowrap;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 0.6rem;
  }
`

const Meta = ({ meta }) => {
  return <Container>{meta}</Container>
}

export default Meta
