import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

import { Speaker } from '../blocks'
import { Meta } from '../elements'

const Container = styled.div`
  padding: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.shape.radius}px;
  padding: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(1)};
`

const Title = styled.h3`
  font-size: ${props => props.theme.typography.size.rg};
  display: inline;
`

const Speakers = styled.div`
  margin: ${props => props.theme.spacing(1, 0)};
`

const Metas = styled.div`
  padding: ${props => props.theme.spacing(1, 0)};
`

const Session = ({ session }) => {
  return (
    <Container>
      {session.meta.length > 0 && (
        <Metas>
          {session.meta.map(m => (
            <Meta key={m} meta={m} />
          ))}
        </Metas>
      )}
      <Title>{session.title}</Title>
      {session.speakers.length > 0 && (
        <Speakers>
          {session.speakers.map(speaker => (
            <Speaker key={speaker.id} {...speaker} />
          ))}
        </Speakers>
      )}
      {session.abstract && <p>{session.abstract}</p>}
      <div>
        {session.hashtag && <FontAwesomeIcon size="1x" icon={faTwitter} />}
        {session.enquete && <Link to={`#${session.enquete}`}>アンケート</Link>}
      </div>
    </Container>
  )
}

export default Session
