import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'

const Texts = styled.div`
  align-items: center;
  margin: ${props => props.theme.spacing(2, 1, -2)};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.typography.types.display};
  text-align: right;
`

const Floor = styled.div`
  font-size: ${props => props.theme.typography.size.xxl};
  font-weight: 800;
  margin-bottom: ${props => props.theme.spacing(2)};

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.xl};
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`

const RoomHolder = styled.div``

const Room = styled.div`
  font-size: ${props => props.theme.typography.size.lg};
  margin-bottom: ${props => props.theme.spacing(0.3)};
  font-weight: 600;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.rg};
    margin-bottom: ${props => props.theme.spacing(0)};
  }
`

const Map = styled.img`
  object-fit: contain;
  display: inline-block;
  border-radius: ${props => props.theme.shape.radius}px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
`

const FloorItem = ({ item, map }) => {
  return (
    <Grid centered>
      <Grid.Column mobile={16} tablet={6} computer={5}>
        <Texts>
          <Floor>{item.floor}</Floor>
          {item.room.map(room => (
            <RoomHolder key={room.name}>
              <Room>{room.name}</Room>
            </RoomHolder>
          ))}
        </Texts>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        <Map src={map.node.childImageSharp.resize.src} />
      </Grid.Column>
    </Grid>
  )
}

export default FloorItem
