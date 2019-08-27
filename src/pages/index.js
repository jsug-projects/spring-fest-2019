import React from 'react'
import { Link } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { SEO, Section } from '../components/blocks'
import { Image } from '../components/elements'

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <Section>
      <>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </>
    </Section>
    <Section>
      <Link to="/page-2/">Go to page 2</Link>
    </Section>
  </BaseLayout>
)

export default IndexPage
