import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Map, Section } from './'

const Container = styled.div``

const Panel = styled.div`
  display: flex;
  align-items: flex-start;
`

const PanelInner = styled.div`
  padding: ${props => props.theme.spacing(0, 4)};
`

const Access = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            event {
              place
              address
              traffic {
                description
                name
              }
            }
          }
        }
      }
    `
  )

  const { place, address, traffic } = site.siteMetadata.event

  return (
    <Container>
      <Section>
        <>
          <h2>Access</h2>
          <Panel>
            <PanelInner>
              <h3>{place}</h3>
              <small>{address}</small>
            </PanelInner>
            <PanelInner>
              <dl>
                {traffic.map(t => (
                  <>
                    <dt>{t.name}</dt>
                    <dd>{t.description}</dd>
                  </>
                ))}
              </dl>
            </PanelInner>
          </Panel>
        </>
      </Section>
      <Map />
    </Container>
  )
}

export default Access
