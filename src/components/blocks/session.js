import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Speaker } from '../blocks'

const Container = styled.div`
  padding: ${props => props.theme.spacing(1)};
`

const Speakers = styled.div`
  display: flex;
  margin: ${props => props.theme.spacing(1, 0)};
`

const Metas = styled.div`
  padding: ${props => props.theme.spacing(1, 0)};
`

const Meta = styled.small`
  display: inline-block;
`

const Session = ({
  id,
  abstract,
  meta,
  place,
  speakers,
  timetable,
  title,
  slides,
}) => {
  return (
    <Container>
      <small>
        {timetable} @ {place}
      </small>
      <Metas>
        {meta.map(m => (
          <Meta key={m}>{m}</Meta>
        ))}
      </Metas>
      <Speakers>
        {speakers.map(s => (
          <Speaker key={s.id} {...s} />
        ))}
      </Speakers>
      <h3>{title}</h3>
      <p>{abstract}</p>
      {slides.map(s => (
        <a key={s} href={s} target="_blank">
          {s}
        </a>
      ))}
    </Container>
  )
}

export default Session
