import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
  const defaultProps = {
    center: {
      lat: center.lat,
      lng: center.lng,
    },
    zoom: zoom,
  };

  const cities = [
    { id: 1, name: 'Johannesburg', lat: -26.2041, lng: 28.0473 },
    { id: 2, name: 'Cape Town', lat: -33.9249, lng: 18.4241 },
    { id: 3, name: 'Pretoria', lat: -25.7479, lng: 28.2293 },
    { id: 4, name: 'Durban', lat: -29.8587, lng: 31.0218 },
  ];

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'APIAIzaSyDFmaOiu9tvsrI2juyCyvbWwx4FYzuEwyw' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {cities.map((city) => (
          <div
            key={city.id}
            lat={city.lat}
            lng={city.lng}
            text={city.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;