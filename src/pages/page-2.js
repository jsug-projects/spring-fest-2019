import React from 'react'
import { Link } from 'gatsby'

import { BaseLayout } from '../components/layouts'
import { SEO } from '../components/blocks'

const SecondPage = () => (
  <BaseLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </BaseLayout>
)

export default SecondPage
