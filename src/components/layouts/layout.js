/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { Header, Footer } from '../blocks'
import { theme, GlobalStyles } from '../foundations'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v4.0"
          ></script>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </Helmet>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="fb-root"></div>
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
