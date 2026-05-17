import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { useSelector } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: 3.139,
  lng: 101.6869,
};

export default function MapView() {
  const selectedPlace = useSelector(
    (state) => state.places.selectedPlace
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedPlace?.location || defaultCenter}
        zoom={13}
      >
        {selectedPlace && (
          <Marker position={selectedPlace.location} />
        )}
      </GoogleMap>
    </div>

  );
}