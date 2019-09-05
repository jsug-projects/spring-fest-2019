import React from 'react'
import styled from 'styled-components'
import { groupBy, path } from 'ramda'

import { Session } from '../'

const Container = styled.div`
  background-color: ${props => props.theme.colors.neutral[25]};
`

const TimeLegend = styled.small`
  display: block;
  padding: ${props => props.theme.spacing(1, 2, 0, 2)};
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${props => props.theme.spacing(0, 1, 1, 1)};
`

const Col = styled.div`
  flex: 1;
`

const groupByTime = groupBy(path(['timetable', 'time']))

const Timetable = ({ sessions }) => {
  const sessionsByTime = groupByTime(sessions)
  const rows = Object.keys(sessionsByTime)
  return (
    <Container>
      {rows.map(time => (
        <>
          <TimeLegend>{time}</TimeLegend>
          <Row>
            {sessionsByTime[time].map(session => (
              <Col key={session.id}>
                <Session session={session} />
              </Col>
            ))}
          </Row>
        </>
      ))}
    </Container>
  )
}

export default Timetable
