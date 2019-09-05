import React from 'react'
import { useStaticQuery } from 'gatsby'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => {
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
