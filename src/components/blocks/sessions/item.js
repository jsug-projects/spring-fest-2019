import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import { Icon } from 'semantic-ui-react'

import { Meta } from '../../elements'
import { Profile, ShowMore } from '../index'

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
`

const Hall = styled.h3`
  font-size: ${props => props.theme.typography.size.lg};
  font-family: ${props => props.theme.typography.types.display};
  font-weight: 800;
  display: inline;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(0, 1)};

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
    max-height: 5rem;
    max-width: 5rem;
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
  display: inline-block;
`

const LunchHolder = styled.div`
  background: ${props => props.theme.colors.neutral['400']};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(0.5, 1)};
  border-radius: 3px;
  align-items: baseline;
  margin-right: ${props => props.theme.spacing(1)};
`

const Lunch = styled.span`
  font-family: ${props => props.theme.typography.types.display};
  font-size: ${props => props.theme.typography.size.md};
  font-weight: 800;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.sm};
    font-weight: 700;
  }
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
    font-weight: 700;
  }
`

const MetaHolder = styled.div`
  display: none;
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
  }
`

const ContentsHeader = styled.div`
  margin-bottom: 4px;
  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    flex-direction: column;
    width: 100%;
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
  display: flex;
  padding-left: ${props => props.theme.spacing(2)};

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

const noStyle = {
  textDecoration: 'none',
  boxShadow: 'none',
}

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
            {/*<Hall>{session.timetable.place}</Hall>*/}
            <Hall>Hall TBD</Hall>
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
                  <Photo src={speaker.image.childImageSharp.resize.src} />
                  <SpeakerName>{speaker.name}</SpeakerName>
                </SpeakerHolder>
              ))}
            </Speaker>
            <ContentsHolder>
              <ContentsHeader>
                {session.meta.length > 0 && (
                  <MetaHolder>
                    {session.meta.map(m => (
                      <Meta key={m} meta={m} />
                    ))}
                  </MetaHolder>
                )}
                <TitleHolder>
                  {session.lunch && (
                    <LunchHolder>
                      <Icon name={'utensils'} inverted />
                      <Lunch>ランチセッション</Lunch>
                    </LunchHolder>
                  )}
                  <Title>{session.title}</Title>
                </TitleHolder>
              </ContentsHeader>
              <ContentsBody>
                <ShowMore children={session.abstract || '未定'} />
              </ContentsBody>
            </ContentsHolder>
          </Body>
          {(session.hashtag || session.enquete) && (
            <Footer>
              {session.hashtag && (
                <Hashtag>
                  <FontAwesomeIcon size="1x" icon={faTwitter} />
                </Hashtag>
              )}
              {session.enquete && (
                <Enquete>
                  <Link to={`#${session.enquete}`} style={noStyle}>
                    <LinkText>アンケート</LinkText>
                  </Link>
                </Enquete>
              )}
            </Footer>
          )}
        </Card>
      </Container>
    )
  )
}

export default SessionItem
