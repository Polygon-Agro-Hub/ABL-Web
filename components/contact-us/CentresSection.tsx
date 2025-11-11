"use client";

import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const centres = [
  {
    type: "Collection Centres",
    locations: [
      {
        town: "Mention Town",
        address:
          "No. 14, Sir Baron Jayathilake Mawatha,<br/>Colombo 01, Western 00100, LK",
        position: [6.9372, 79.85],
      },
      {
        town: "Mention Town",
        address:
          "No. 14, Sir Baron Jayathilake Mawatha,<br/>Colombo 01, Western 00100, LK",
        position: [6.9373, 79.86],
      },
    ],
  },
  {
    type: "Distribution Centres",
    locations: [
      {
        town: "Mention Town",
        address:
          "No. 14, Sir Baron Jayathilake Mawatha,<br/>Colombo 01, Western 00100, LK",
        position: [6.9372, 79.85],
      },
      {
        town: "Mention Town",
        address:
          "No. 14, Sir Baron Jayathilake Mawatha,<br/>Colombo 01, Western 00100, LK",
        position: [6.9373, 79.86],
      },
    ],
  },
];

const CentresSection = () => {
  useEffect(() => {
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {centres.map((centre, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start`}
          >
            {/* Map (alternate side per section) */}
            <div
              className={`rounded-2xl overflow-hidden shadow-md h-[350px] ${
                idx % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <MapContainer
                center={[6.9372, 79.85]}
                zoom={15}
                scrollWheelZoom={false}
                className="w-full h-full z-0"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {centre.locations.map((loc, i) => (
                  <Marker key={i} position={loc.position}>
                    <Popup>
                      <b>{loc.town}</b>
                      <br />
                      {loc.address}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Address List */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-semibold text-black mb-2">
                {centre.type}
              </h2>

              {centre.locations.map((loc, i) => (
                <div
                  key={i}
                  className="border border-[#8BA5C1] rounded-xl px-5 py-4 bg-white hover:shadow-md transition"
                >
                  <p className="text-lg font-medium text-black">{loc.town}</p>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: loc.address }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(CentresSection), { ssr: false });
