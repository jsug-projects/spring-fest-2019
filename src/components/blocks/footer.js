import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.footer`
  text-align: center;
  padding: ${props => props.theme.spacing(2)};
`

const Copyright = styled.span`
  font-size: ${props => props.theme.typography.size.sm};
  color: ${props => props.theme.colors.neutral[200]};
`

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  return (
    <Container>
      <Copyright>
        {site.siteMetadata.title}. Copyright &copy; {new Date().getFullYear()}{' '}
        {site.siteMetadata.author}. All rights reserved.
      </Copyright>
    </Container>
  )
}

export default Footer
