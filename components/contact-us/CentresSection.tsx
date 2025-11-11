"use client";

import { useState, useEffect } from "react";

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

export default function CentresSection() {
  const [MapClient, setMapClient] = useState<any>(null);

  // Dynamically import the map **only on the client**
  useEffect(() => {
    import("./MapClient").then((mod) => setMapClient(() => mod.default));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {centres.map((centre, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            <div
              className={`rounded-2xl overflow-hidden shadow-md h-[350px] ${
                idx % 2 === 1 ? "lg:order-2" : ""
              } z-0`}
            >
              {MapClient ? <MapClient locations={centre.locations} /> : null}
            </div>

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
                    className="text-sm text-[#3F3F3F] leading-relaxed"
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
}
