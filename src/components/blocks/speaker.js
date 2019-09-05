import React from 'react'
import styled from 'styled-components'
import Linkify from 'linkifyjs/react'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.p`
  margin-bottom: 0;
  font-weight: bold;
`

const Affiliation = styled.small`
  margin-bottom: 0;
  opacity: 0.8;
`

const Profile = styled.p`
  margin-bottom: 0;
`

const ProfilePicture = styled.div`
  background-image: url(${props => props.src});
  background-size: 44px 44px;
  background-position: center center;
  border-radius: 44px;
  width: 44px;
  height: 44px;
  padding: ${props => props.theme.spacing(1)};
`

const Speaker = ({ id, name, affiliation, profile, src }) => {
  return (
    <Container>
      <ProfilePicture src={src} />
      <div>
        <Affiliation>{affiliation}</Affiliation>
        <Name>{name}</Name>
        <Linkify tagname="p">{profile}</Linkify>
      </div>
    </Container>
  )
}

export default Speaker
