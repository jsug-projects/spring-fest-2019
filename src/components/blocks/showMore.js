import React, { useEffect, useRef, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import parse from 'html-react-parser'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const TextHolder = styled.div`
  max-height: ${props => props.boxHeight}px;
  overflow: hidden;
`
const Text = styled.p`
  line-height: ${props => props.lineHeight}rem;
  word-wrap: break-word;
  line-height: 1.7rem;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    font-size: ${props => props.theme.typography.size.xs};
    line-height: 1.4rem;
  }
`

const ShowButton = styled.div`
  margin-top: ${props => props.theme.spacing(1)};
  cursor: pointer;
  display: inline-flex;
  align-self: flex-end;
`

const ShowMore = ({ children }) => {
  const texts = useRef(null)
  const [collapsed, setCollapsed] = useState(true)
  const [showButton, setShowButton] = useState(false)
  const [boxHeight, setBoxHeight] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)
  const lineHeight = 1.5

  useEffect(() => {
    let textBox = texts.current
    let line = 4
    let lineHeight = parseFloat(getComputedStyle(textBox).lineHeight)
    let initialHeight = parseFloat(window.getComputedStyle(textBox).height)

    setMaxHeight(lineHeight * line)
    setBoxHeight(maxHeight)
    initialHeight <= maxHeight ? setShowButton(false) : setShowButton(true)
  }, [showButton])

  return (
    <Container>
      <TextHolder boxHeight={boxHeight}>
        <Text ref={texts} lineHeight={lineHeight}>
          {parse(children)}
        </Text>
      </TextHolder>
      {showButton && (
        <ShowButton
          onClick={() => {
            collapsed ? setBoxHeight() : setBoxHeight(maxHeight)
            setCollapsed(!collapsed)
          }}
        >
          {collapsed ? (
            <Icon name="chevron circle down" />
          ) : (
            <Icon name="chevron circle up" />
          )}
        </ShowButton>
      )}
    </Container>
  )
}

export default ShowMore
