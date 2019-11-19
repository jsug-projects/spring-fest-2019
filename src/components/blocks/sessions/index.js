import React from 'react'

import Session from './item'
import { Time } from './../../elements/index'

import { groupBy, path, sort } from 'ramda'
import styled from 'styled-components'

const Container = styled.div`
  padding: ${props => props.theme.spacing(3, 0)};
`

export default ({ items, time }) => {
  const byTime = path(time)
  const grouped = groupBy(byTime, items)
  const sortedTime = sort((a, b) => a - b, Object.keys(grouped))
  const show = []

  sortedTime.map(t => {
    let i = 0
    grouped[t].map(s => {
      if (s.title !== null) i++
    })
    i > 0 ? show.push(true) : show.push(false)
  })

  return sortedTime.map(
    (t, idx) =>
      show[idx] && (
        <Container key={t}>
          <Time time={t} />
          {grouped[t].map(s => (
            <Session session={s} key={s.id} />
          ))}
        </Container>
      )
  )
}
