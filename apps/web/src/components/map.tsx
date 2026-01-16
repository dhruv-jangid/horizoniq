import { useEffect } from "react";
import { useMap, useMapEvent } from "react-leaflet";
import {
  GlobalMap,
  MapCircle,
  MapLocateControl,
  MapMarker,
  MapTileLayer,
  MapTooltip,
} from "./ui/map";

const ClickHandler = ({ setLocation }: { setLocation: ([lat, lng]: [number, number]) => void }) => {
  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    setLocation([lat, lng]);
  });

  return null;
};

const LocationUpdater = ({ location }: { location: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo(location, map.getZoom(), { animate: true, duration: 3 });
    }
  }, [location, map]);

  return null;
};

export const MapComponent = ({
  location,
  setLocation,
}: {
  location: [number, number];
  setLocation: ([lat, lng]: [number, number]) => void;
}) => {
  return (
    <GlobalMap
      center={location}
      boxZoom
      minZoom={3}
      maxZoom={18}
      worldCopyJump={true}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
    >
      <MapTileLayer />
      <ClickHandler setLocation={setLocation} />
      <LocationUpdater location={location} />
      <MapMarker position={location}>
        <MapTooltip>
          Latitude: {location[0]} <br />
          Longitude: {location[1]}
        </MapTooltip>
      </MapMarker>
      <MapCircle center={location} radius={200} />
      <MapLocateControl
        onLocationFound={({ latlng }) => setLocation([latlng.lat, latlng.lng])}
        onLocationError={(error) => console.error(error.message)}
      />
    </GlobalMap>
  );
};
