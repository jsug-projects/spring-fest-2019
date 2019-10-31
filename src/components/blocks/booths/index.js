import React from 'react'
import styled from 'styled-components'

import Booth from './item'

const Wrapper = styled.div`
  padding-bottom: ${props => props.theme.spacing(5)};
`

export default ({ items }) => {
  return items.map(booth => {
    return (
      <Wrapper key={booth.id}>
        <Booth booth={booth} />
      </Wrapper>
    )
  })
}
