import React from 'react'
import { Link } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { SEO } from '../components/blocks'
import { Image } from '../components/elements'

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </BaseLayout>
)

export default IndexPage
