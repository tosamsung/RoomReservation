import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  FeatureGroup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define the custom icon
const redIcon = L.icon({
  iconUrl: "/images/marker-icon-red.png",
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
});

function ResultMap({ response, setValue, position }) {
  const [markers, setMarkers] = useState([]);

  const [initialLoad, setInitialLoad] = useState(true); // Flag for initial load
  const markersRef = useRef(markers); // Use ref to avoid unnecessary re-renders

  // Update markers when response changes or position prop changes
  useEffect(() => {
    if (position && position[0] && position[1]) {
      const initialMarkers = [
        {
          draggable: true,
          position: position,
        },
      ];
      setMarkers(initialMarkers);
      markersRef.current = initialMarkers; // Update ref
      setInitialLoad(true); // Allow zoom adjustment on initial load
    } else if (response.results) {
      const initialMarkers = response.results.slice(0, 1).map((e) => ({
        draggable: true,
        position: [e.geometry.lat, e.geometry.lng],
      }));
      setMarkers(initialMarkers);
      markersRef.current = initialMarkers; // Update ref
      setInitialLoad(true); // Allow zoom adjustment on initial load
    }
  }, [response, position]);

  function MapUpdater() {
    const map = useMap();

    useEffect(() => {
      if (markers.length > 0 && initialLoad) {
        const bounds = markers.map((marker) => [
          marker.position[0],
          marker.position[1],
        ]);
        map.fitBounds(bounds); // Fit bounds only on initial load
        setInitialLoad(false); // Prevent further zoom adjustments
      }
    }, []);

    return null;
  }

  const updateMarkerPosition = (index, newPosition) => {
    const updatedMarkers = [...markersRef.current];
    updatedMarkers[index].position = [newPosition.lat, newPosition.lng];
    setMarkers(updatedMarkers);
    markersRef.current = updatedMarkers; // Update ref
  };

  // Handle errors or invalid response
  if (!response || (!response.results && !position)) {
    return (
      <span className="uk-margin-small-right" uk-spinner="ratio: 3"></span>
    );
  }

  return (
    <MapContainer
      id="map"
      center={markers.length > 0 ? markers[0].position : [40, 0]} // Center based on marker position
      zoom={2} // Fixed zoom level on initial load
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>'
        url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=ebb8aa59a0b94ede8a2c769ba62e44f6"
      />

      <FeatureGroup>
        <MapUpdater />
        {markers.map((marker, i) => (
          <Marker
            key={i}
            position={marker.position}
            icon={redIcon}
            draggable={marker.draggable}
            eventHandlers={{
              dragend: (event) => {
                const marker = event.target;
                const newPosition = marker.getLatLng();
                setValue(newPosition);
                updateMarkerPosition(i, newPosition);
              },
            }}
          >
            <Popup>
              {i + 1} - {marker.formatted}
            </Popup>
          </Marker>
        ))}
      </FeatureGroup>
    </MapContainer>
  );
}

export default ResultMap;
