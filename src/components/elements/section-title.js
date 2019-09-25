import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-family: ${props => props.theme.typography.types.display};
  color: ${props => props.theme.colors.primary[300]};
  font-size: ${props => props.theme.typography.size.display};
  text-align: center;
  margin: ${props => props.theme.spacing(10, 0)};
  font-weight: 900;
`

export default ({ children }) => <Title>{children}</Title>
