import React from 'react'
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
)(props => (
  <>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 35.698672, lng: 139.766433 }}
    >
      <Marker position={{ lat: 35.698672, lng: 139.766433 }} />
    </GoogleMap>
  </>
))

export default Map
