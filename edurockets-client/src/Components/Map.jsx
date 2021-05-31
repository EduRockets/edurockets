import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  const { latLng } = props;

  return (
    <Map
      google={this.props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker position={{ lat: latLng.lat, lng: latLng.lng }} />
    </Map>
  );
};

export default MapContainer;
