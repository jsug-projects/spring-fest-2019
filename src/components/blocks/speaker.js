import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Name = styled.p`
  margin-bottom: 0;
`

const Affiliation = styled.small`
  margin-bottom: 0;
`

const Profile = styled.p`
  margin-bottom: 0;
`

const Speaker = ({ id, name, affiliation, profile }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Affiliation>{affiliation}</Affiliation>
      <Profile>{profile}</Profile>
    </Container>
  )
}

export default Speaker
