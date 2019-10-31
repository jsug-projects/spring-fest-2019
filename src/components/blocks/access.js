import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Map } from './'
import { Grid } from 'semantic-ui-react'

const Panel = styled.div`
  padding-left: ${props => props.theme.spacing(2)};
    white-space: nowrap;

 @media only screen and (max-width : ${props => props.theme.media.tablet}) {
    text-align: center;
      white-space: normal;
  }
}
`

const DirectionHeader = styled.div`
  padding-bottom: ${props => props.theme.spacing(2)};
`

const Venue = styled.h3`
  margin-bottom: 0;
  color: ${props => props.theme.colors.primary['300']};
  font-size: ${props => props.theme.typography.size.xxl};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 1.8rem;
  }
`

const Address = styled.small`
  color: ${props => props.theme.colors.neutral['300']};
  font-size: ${props => props.theme.typography.size.rg};

  @media only screen and (max-width: ${props => props.theme.media.tablet}) {
    font-size: 0.85rem;
  }
`

const VenueHolder = styled.div`
  padding-bottom: ${props => props.theme.spacing(2)};
`

const StationName = styled.p`
  color: ${props => props.theme.colors.primary['300']};
  margin-bottom: 0;
  display: inline-block;
`

const StationLine = styled.p`
  padding-left: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.neutral['400']};
  display: inline-block;
`

const StationDescription = styled.dd`
  color: ${props => props.theme.colors.neutral['400']};
`

const Access = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            event {
              venue
              address
              traffic {
                station
                line
                description
              }
            }
          }
        }
      }
    `
  )

  const { venue, address, traffic } = site.siteMetadata.event

  return (
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={10}>
        <Map />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={16} computer={5}>
        <Panel>
          <VenueHolder>
            <Venue>{venue}</Venue>
            <Address>{address}</Address>
          </VenueHolder>
          {traffic.map((t, idx) => (
            <DirectionHeader key={idx}>
              <dt>
                <StationName>{t.station}</StationName>
                <StationLine>{t.line}</StationLine>
              </dt>
              <StationDescription>{t.description}</StationDescription>
            </DirectionHeader>
          ))}
        </Panel>
      </Grid.Column>
    </Grid>
  )
}

export default Access
