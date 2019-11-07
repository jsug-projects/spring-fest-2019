import styled from 'styled-components'
import React from 'react'
import { Modal } from 'semantic-ui-react'
import parse from 'html-react-parser'

const Card = styled.div`
  padding: ${props => props.theme.spacing(2)};
  display: flex;
`

const Photo = styled.img`
  border-radius: 50%;
  margin-bottom: 0;
  max-width: 8.5rem;
  max-height: 8.5rem;
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    margin-right: ${props => props.theme.spacing(1)};
    max-width: 5rem;
    max-height: 5rem;
  }
`
const PhotoHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.spacing(3)};

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    margin-bottom: ${props => props.theme.spacing(1.5)};
  }
`

const MobileSpeakerHolder = styled.div`
  display: none;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    display: inline-block;
    margin-top: ${props => props.theme.spacing(1)};
  }
`

const MobileHolder = styled.div`
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    width: 100%;
  }
`

const NormalHolder = styled.div`
  display: inline-block;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    display: none;
  }
`

const Name = styled.h3`
  margin: 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.rg};
  }
`

const Company = styled.p`
  margin: 0;
  font-size: ${props => props.theme.typography.size.rg};

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.sm};
  }
`

const BioHolder = styled.div`
  margin: ${props => props.theme.spacing(1, 0)};
  background: ${props => props.theme.colors.primaryGradient};
  padding: ${props => props.theme.spacing(1, 2)};
  border-radius: ${props => props.theme.shape.radius}px;
  display: flex;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    margin: 0;
    display: none;
  }
`

const MobileBioHolder = styled.div`
  margin: ${props => props.theme.spacing(1, 0)};
  background: ${props => props.theme.colors.primaryGradient};
  padding: ${props => props.theme.spacing(1, 2)};
  border-radius: ${props => props.theme.shape.radius}px;
  display: none;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    margin: 0;
    display: flex;
  }
`

const HolderHelper = styled.div`
  flex: 1;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    display: none;
  }
`

const Bio = styled.p`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  white-space: pre-line;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.md};
  }
`

const Profile = ({ speaker, isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Card key={speaker.id}>
        <MobileHolder>
          <PhotoHolder>
            <Photo src={speaker.image.childImageSharp.resize.src} />
            <MobileSpeakerHolder>
              <Name>{speaker.name}</Name>
              <Company>{speaker.affiliation}</Company>
            </MobileSpeakerHolder>
          </PhotoHolder>
          <MobileBioHolder>
            <Bio>{parse(String(speaker.profile))}</Bio>
          </MobileBioHolder>
        </MobileHolder>
        <HolderHelper>
          <NormalHolder>
            <Name>{speaker.name}</Name>
            <Company>{speaker.affiliation}</Company>
          </NormalHolder>
          <BioHolder>
            <Bio>{parse(String(speaker.profile))}</Bio>
          </BioHolder>
        </HolderHelper>
      </Card>
    </Modal>
  )
}

export default Profile
