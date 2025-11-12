"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png") as string,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png") as string,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapClientProps {
  locations: { town: string; address: string; position: [number,  number] }[];
}

export default function MapClient({ locations }: MapClientProps) {
  return (
    <MapContainer
      center={[6.9372, 79.85]}
      zoom={15}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, i) => (
        <Marker key={i} position={loc.position}>
          <Popup>
            <b>{loc.town}</b>
            <br />
            <span dangerouslySetInnerHTML={{ __html: loc.address }} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}