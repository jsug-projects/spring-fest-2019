import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

import { BaseLayout } from '../components/layouts'
import { Access, SEO, Section, Floor } from '../components/blocks'

const SectionWrap = styled.div`
  padding: ${props => props.theme.spacing(5, 0, 0)};
  margin: 0 auto;
`

export default ({ data }) => {
  const { site } = data
  const headerRef = useRef(null)

  return (
    <BaseLayout
      siteTitle={site.siteMetadata.title}
      headerColor={props => props.theme.colors.primaryGradient}
      headerRef={headerRef}
    >
      <SEO title="Access" />
      <SectionWrap>
        <Section
          title="Access"
          fontColor={props => props.theme.colors.primary['300']}
          backgroundColor={props => props.theme.colors.white}
        >
          <Access />
        </Section>
        <Section
          title="Hall Map"
          fontColor={props => props.theme.colors.white}
          backgroundColor={props => props.theme.colors.primaryGradient}
        >
          <Floor />
        </Section>
      </SectionWrap>
    </BaseLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
