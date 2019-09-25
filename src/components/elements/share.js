import React, { useRef } from 'react'
import styled from 'styled-components'
import { oneOf } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Container = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  margin: ${props => props.theme.spacing(0, 2)};
  cursor: pointer;
  padding: ${props => props.theme.spacing(1)};
  transition: all 0.2s ease-in;
  background-color: transparent;
  color: ${props => props.theme.colors.white};

  &:hover {
    .circle {
      transform: scale(1.2);
    }
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background-color: ${props => props.theme.colors.white};
  padding: 0.5rem;
  margin-right: ${props => props.theme.spacing(2)};
  color: ${props =>
    props.colored ? props.theme.colors.primary[300] : props.theme.colors.black};
  transition: all 0.1s ease-in-out;
`

const Share = ({ name, colored }) => {
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

  return (
    <Container onClick={share(name)}>
      <IconWrapper className="circle" colored={colored}>
        {renderIcon(name)}
      </IconWrapper>{' '}
      <strong>{name === 'twitter' ? 'TWEET' : 'SHARE'}</strong>
    </Container>
  )
}

Share.propTypes = {
  name: oneOf(['twitter', 'facebook']).isRequired,
}

export default Share
