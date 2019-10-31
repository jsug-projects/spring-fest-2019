import styled from 'styled-components'
import React from 'react'

const Time = styled.h3`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.typography.types.display};
  font-size: ${props => props.theme.typography.size.xl};
  margin: ${props => props.theme.spacing(-1, 2)};
  font-weight: 800;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 1.1rem;
  }
`

export default ({ time }) => {
  return <Time>{time}</Time>
}
