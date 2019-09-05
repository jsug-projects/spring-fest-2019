import React, { useRef } from 'react'
import styled from 'styled-components'
import { oneOf } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Container = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  margin: ${props => props.theme.spacing(0, 2)};
  cursor: pointer;
  border-radius: 1rem;
  padding: ${props => props.theme.spacing(1)};
  transition: all 0.2s ease-in;

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.neutral[50]};
  }
`

const HiddenButton = styled.div`
  display: none;
`

const ShareIcon = ({ name }) => {
  const shareTwitterRef = useRef(null)
  const shareFBRef = useRef(null)

  const shareInfo = {
    url: 'https://springfest2019.springframework.jp/',
    text: 'Spring Fest 2019',
    hashtag: 'spring-fest-2019',
  }

  const share = name => () => {
    const WIN_WIDTH = 550
    const WIN_HEIGHT = 400
    const center = {
      left: window.screen.width / 2 - WIN_WIDTH / 2,
      top: window.screen.height / 2 - WIN_HEIGHT / 2,
    }
    const windowParams = `scrollbars=yes,width=${WIN_WIDTH},height=${WIN_HEIGHT},top=${center.top},left=${center.left}`
    if (name === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?url=${shareInfo.url}&text=${shareInfo.text}&hashtags=${shareInfo.hashtag}`,
        'share',
        windowParams
      )
    }

    if (name === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${shareInfo.url}`,
        'share',
        windowParams
      )
    }
  }

  const renderIcon = name => {
    switch (name) {
      case 'twitter':
        return <FontAwesomeIcon size="1x" icon={faTwitter} />
      case 'facebook':
        return <FontAwesomeIcon size="1x" icon={faFacebookSquare} />
      default:
        return null
    }
  }

  return <Container onClick={share(name)}>{renderIcon(name)}</Container>
}

ShareIcon.propTypes = {
  name: oneOf(['twitter', 'facebook']).isRequired,
}

export default ShareIcon
