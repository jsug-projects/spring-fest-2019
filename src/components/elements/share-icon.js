import React from 'react'
import styled from 'styled-components'
import { oneOf } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Container = styled.span`
  display: inline-block;
  margin: ${props => props.theme.spacing(0, 2)};
  cursor: pointer;
`

const ShareIcon = ({ name }) => {
  const renderIcon = name => {
    switch (name) {
      case 'twitter':
        return <FontAwesomeIcon size="2x" icon={faTwitter} />
      case 'facebook':
        return <FontAwesomeIcon size="2x" icon={faFacebookSquare} />
      default:
        return null
    }
  }

  return <Container>{renderIcon(name)}</Container>
}

ShareIcon.propTypes = {
  name: oneOf(['twitter', 'facebook']).isRequired,
}

export default ShareIcon
