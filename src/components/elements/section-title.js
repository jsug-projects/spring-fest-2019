import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-family: ${props => props.theme.typography.types.display};
  color: ${props => props.fontColor};
  font-size: ${props => props.theme.typography.size.display};
  text-align: center;
  margin: ${props => props.theme.spacing(6, 0)};
  font-weight: 900;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 2rem;
    margin: ${props => props.theme.spacing(3, 0)};
  }
`

export default ({ children, fontColor }) => {
  return <Title fontColor={fontColor}>{children}</Title>
}
