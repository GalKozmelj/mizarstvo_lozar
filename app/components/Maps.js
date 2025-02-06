"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icon
const customIcon = new L.Icon({
  iconUrl: "/marker.png", // Use your own marker or a CDN link
  iconSize: [41, 41], // Default size
  iconAnchor: [12, 41], // Anchor point
  popupAnchor: [1, -34],
});

const position = [45.541, 15.266]; // Griblje 64, Gradac coordinates

export default function Map() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Griblje 64, 8332 Gradac</Popup>
      </Marker>
    </MapContainer>
  );
}
