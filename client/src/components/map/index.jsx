import { APIProvider } from "@vis.gl/react-google-maps";
import { Map, Marker } from "@vis.gl/react-google-maps";

const API_KEY = "AIzaSyCWgWH3tv7asJro15RzgU5X29mUO22woRI";
const FMNMap = ({
  markers = [
    {
      lat: 51.509865,
      lng: -0.118092,
    },
  ],
}) => {
  return (
    <APIProvider
      apiKey={API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        defaultZoom={13}
        defaultCenter={markers[0]}
        onCameraChanged={(ev) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </Map>
    </APIProvider>
  );
};

export default FMNMap;
