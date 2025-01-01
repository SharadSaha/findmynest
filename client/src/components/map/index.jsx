import { APIProvider } from "@vis.gl/react-google-maps";
import { Map, Marker } from "@vis.gl/react-google-maps";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log(GOOGLE_MAPS_API_KEY);

const FMNMap = ({
  markers = [
    {
      lat: 51.509865,
      lng: -0.118092,
    },
  ],
}) => {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map defaultZoom={13} defaultCenter={markers[0]}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </Map>
    </APIProvider>
  );
};

export default FMNMap;
