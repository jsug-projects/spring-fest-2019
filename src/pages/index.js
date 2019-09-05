import React from 'react'
import { Link } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { Access, Banner, SEO, Section, Sponsors } from '../components/blocks'

const IndexPage = () => (
  <BaseLayout>
    <SEO title="Home" />
    <Banner />
    <span id="access" />
    <Access />
    <Section>
      <Sponsors />
    </Section>
  </BaseLayout>
)

export default IndexPage
