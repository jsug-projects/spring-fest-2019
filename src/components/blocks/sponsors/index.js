import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Item = styled.a`
  display: block;
  margin: ${props => props.theme.spacing(3.7)};
  border-radius: ${props => props.theme.shape.radius}px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease-in;

  position: relative;
  top: ${props => (props.position === 'down' ? 20 : 0)}px;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    margin: ${props => props.theme.spacing(1, 1)};
    top: 0px;
    transform: scale(0.8);

    &:hover {
      transform: scale(0.9);
    }
  }
`

const Img = styled.img`
  margin-bottom: 0;
`

export default ({ items }) => (
  <Container>
    {items.map((sponsor, idx) => (
      <Item
        key={sponsor.id}
        href={sponsor.url}
        target="_blank"
        position={idx % 2 === 0 ? 'normal' : 'down'}
      >
        <Img
          src={sponsor.image.childImageSharp.resize.src}
          alt={sponsor.name}
        />
      </Item>
    ))}
  </Container>
)
