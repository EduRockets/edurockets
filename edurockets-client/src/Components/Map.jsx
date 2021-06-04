import React, { useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const Map = ({
  nuevaDireccion,
  setNuevaDireccion,
  center = { lat: 14.10576, lng: -87.204201 },
  latLng,
  setLatLng,
  zoom = 13,
}) => {
  useEffect(() => {
    if (setNuevaDireccion) {
      setNuevaDireccion(nuevaDireccion);
    }
  }, [nuevaDireccion]);

  const drawMarker = () => {
    return nuevaDireccion ? (
      <Marker position={{ lat: nuevaDireccion.lat, lng: nuevaDireccion.lng }} />
    ) : null;
  };

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      options={{ disableDefaultUI: true }}
      onClick={(event) => {
        if (setNuevaDireccion) {
          setNuevaDireccion({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        }
      }}
    >
      {drawMarker()}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
