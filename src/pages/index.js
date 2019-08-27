import React from 'react'
import { Link } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { Access, SEO, Section, Sponsors } from '../components/blocks'

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <Section>
      <>
        <h1>Hi people</h1>
        <p>Now go build something great.</p>
      </>
    </Section>
    <Access />
    <Section>
      <Sponsors />
    </Section>
  </BaseLayout>
)

export default IndexPage
