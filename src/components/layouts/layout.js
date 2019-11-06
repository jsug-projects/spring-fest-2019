import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { Header, Footer, Banner } from '../blocks'
import { theme, GlobalStyles } from '../foundations'

const Layout = ({
  children,
  siteTitle,
  headerColor,
  dynamic,
  headerRef,
  sectionRef,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v4.0"
          />
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </Helmet>
        <GlobalStyles />
        <Header
          headerRef={headerRef}
          sectionRef={sectionRef}
          siteTitle={siteTitle}
          headerColor={headerColor}
          dynamic={dynamic}
        />
        <div id="fb-root" />
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
