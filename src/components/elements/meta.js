import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const Container = styled.span`
  background: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  padding: ${props => props.theme.spacing(0.5, 1)};
  border-radius: 3px;
  align-items: baseline;
  margin-right: ${props => props.theme.spacing(1)};
`

const Title = styled.span`
  font-family: ${props => props.theme.typography.types.display};
  font-size: ${props => props.theme.typography.size.md};
  font-weight: 800;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.sm};
    font-weight: 700;
  }
`

const Meta = ({ meta, lunch }) => {
  const yellowColor = () => props => props.theme.colors.yellow['300']
  const blueColor = () => props => props.theme.colors.blue['300']
  const neutralColor = () => props => props.theme.colors.neutral['400']
  const whiteColor = () => props => props.theme.colors.white

  return (
    <Container
      backgroundColor={lunch ? yellowColor : blueColor}
      fontColor={lunch ? neutralColor : whiteColor}
    >
      {lunch && <Icon name={'utensils'} />}
      <Title>{meta}</Title>
    </Container>
  )
}

export default Meta
