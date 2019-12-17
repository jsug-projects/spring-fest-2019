import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Meta } from '../../elements'
import { Profile, ShowMore } from '../index'
import { Icon } from 'semantic-ui-react'

const Container = styled.div`
  padding: ${props => props.theme.spacing(1.5, 0)};
`
const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.shape.radius}px;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.25);
`

const Header = styled.div`
  padding: ${props => props.theme.spacing(1)};
  background: ${props => props.theme.colors.primaryGradient};
  border-radius: ${props =>
    `${props.theme.shape.radius}px ${props.theme.shape.radius}px 0 0`};
  display: flex;
`

const Hall = styled.h3`
  font-size: ${props => props.theme.typography.size.lg};
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 800;
  display: inline;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(0, 1)};
  margin-bottom: 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: 1.1rem;
  }
`

const Body = styled.div`
  padding: ${props => props.theme.spacing(1)};
  display: flex;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: ${props => props.theme.spacing(1)};
    flex-direction: column;
  }
`
const Speaker = styled.div`
  display: flex;
  flex: 0;
  align-items: flex-start;
`

const SpeakerHolder = styled.div`
  padding: ${props => props.theme.spacing(1, 1)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Photo = styled.img`
  border-radius: 50%;
  margin-bottom: ${props => props.theme.spacing(1)};
  max-height: 7rem;
  max-width: 7rem;
  object-fit: contain;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    max-height: ${props => (props.speakerNumber < 3 ? '5rem' : '4.5rem')};
    max-width: ${props => (props.speakerNumber < 3 ? '5rem' : '4.5rem')};
  }
`

const SpeakerName = styled.h5`
  text-align: center;
  white-space: pre-line;
  margin-bottom: 0;
  margin-top: 0;
  font-family: ${props => props.theme.typography.types.display};
  font-size: ${props => props.theme.typography.size.md};
`

const ContentsHolder = styled.div`
  padding: ${props => props.theme.spacing(1, 2)};
  flex: 1;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: ${props => props.theme.spacing(1)};
    width: 100%;
  }
`

const TitleHolder = styled.div`
  display: flex;
`

const Title = styled.h3`
  font-size: ${props => props.theme.typography.size.rg};
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 800;
  white-space: pre-line;
  padding: ${props => props.theme.spacing(0.5, 0)};
  margin-bottom: 0;
  margin-top: 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.md};
    line-height: 1.1rem;
    font-weight: 700;
  }
`

const MetaHolder = styled.div`
  display: inline-block;
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    display: block;
    margin-bottom: ${props => props.theme.spacing(0.5)};
  }
`

const ContentsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(1)};

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    display: block;
    margin-bottom: ${props => props.theme.spacing(0)};
  }
`

const ContentsBody = styled.div`
  padding: ${props => props.theme.spacing(2, 4)};
  background-color: ${props => props.theme.colors.neutral['25']};
  font-family: ${props => props.theme.typography.types.display};
  border-radius: 0.5rem;
  white-space: pre-line;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.size.rg};
  margin-bottom: 0;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding: ${props => props.theme.spacing(1, 2)};
  }
`

const Footer = styled.div`
  padding-right: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(1)};
  margin-top: ${props => props.theme.spacing(-1)};
  // display: flex;
  display: none;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    padding-right: ${props => props.theme.spacing(2)};
  }
`

const Enquete = styled.div`
  padding-left: ${props => props.theme.spacing(2)};
  padding-top: 4px;
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.xs};
    padding-left: ${props => props.theme.spacing(1)};
  }
`

const Hashtag = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`

const LinkText = styled.div`
  color: ${props => props.theme.colors.neutral['400']};
  margin: 0;
`

const EnqueteLink = styled.a`
  textdecoration: 'none';
  boxshadow: 'none';
  white-space: nowrap;
  &:hover {
    opacity: 0.5;
  }
`

const SessionItem = ({ session }) => {
  const [speakerModal, setSpeakerModal] = useState(null)
  const toggleOpen = id => () => {
    setSpeakerModal(id)
  }

  const closeModal = () => {
    setSpeakerModal(null)
  }

  return (
    session.title && (
      <Container>
        <Card>
          <Header>
            <Hall>{session.timetable.place}</Hall>
          </Header>
          <Body>
            <Speaker>
              {session.speakers.map(speaker => (
                <SpeakerHolder
                  key={speaker.id}
                  onClick={toggleOpen(speaker.id)}
                  speaker={speaker}
                >
                  <Profile
                    speaker={speaker}
                    isOpen={speakerModal === speaker.id}
                    onClose={closeModal}
                  />
                  <Photo
                    src={speaker.image.childImageSharp.resize.src}
                    speakerNumber={session.speakers.length}
                  />
                  <SpeakerName>{speaker.name}</SpeakerName>
                </SpeakerHolder>
              ))}
            </Speaker>
            <ContentsHolder>
              <ContentsHeader>
                {session.meta.length > 0 && (
                  <MetaHolder>
                    {session.meta.map(m => (
                      <Meta key={m} meta={m} lunch={session.lunch} />
                    ))}
                  </MetaHolder>
                )}
                <TitleHolder>
                  <Title>{session.title}</Title>
                  {session.enquete && (
                    <Enquete>
                      <EnqueteLink href={session.enquete} target="_blank">
                        <Icon name={'commenting'} /> アンケート
                      </EnqueteLink>
                    </Enquete>
                  )}
                </TitleHolder>
              </ContentsHeader>
              {session.abstract && (
                <ContentsBody>
                  <ShowMore children={session.abstract} />
                </ContentsBody>
              )}
            </ContentsHolder>
          </Body>
          {session.hashtag && (
            <Footer>
              {session.hashtag && (
                <Hashtag>
                  <FontAwesomeIcon size="1x" icon={faTwitter} />
                </Hashtag>
              )}
            </Footer>
          )}
        </Card>
      </Container>
    )
  )
}

export default SessionItem
