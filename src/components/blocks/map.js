import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import styled from 'styled-components'

const MapHolder = styled.div`
  height: 100%;
  border-radius: 6px;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);
  position: relative;
`

const LoadingElement = styled.div`
  height: 100%;
`

const ContainerElement = styled.div`
  height: 600px;

  @media only screen and (max-width: ${props => props.theme.media.mobile}) {
    height: 350px;
  }
`

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyD_U_hVqqPmvS9GSJeyp3-oL_UO8yfaNy4&libraries=geometry,drawing,places',
    loadingElement: <LoadingElement />,
    containerElement: <ContainerElement />,
    mapElement: <MapHolder />,
  }),
  withScriptjs,
  withGoogleMap
)(() => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            event {
              latlng {
                lat
                lng
              }
            }
          }
        }
      }
    `
  )

  const { lat, lng } = site.siteMetadata.event.latlng

  return (
    <>
      <GoogleMap defaultZoom={18} defaultCenter={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </>
  )
})

export default Map
