"use client";

import { careerData } from "@/data/career-data";
import { GoDotFill } from "react-icons/go";

export default function CareerData() {
  return (
    <section className="w-full flex flex-col items-center px-4 space-y-10 mt-10 lg:mt-0">
      {careerData.map((career) => (
        <div
          key={career.id}
          className="w-full max-w-7xl bg-white rounded-2xl border border-[#A0BBE2] p-8 space-y-6 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Header */}
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              {career.title}
            </h2>
            <p className="flex items-center gap-1 text-sm bg-[#F3F5F6] py-1 px-4 rounded-xl">
              <GoDotFill />
              {career.category}
            </p>
          </div>

          <p className="text-[#515556] mt-2">{career.description}</p>

          {/* Body */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            {/* Divider line (only show on md and up) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#A0BBE2] transform -translate-x-1/2"></div>

            {/* Left: Responsibilities */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Key Responsibilities:
              </h3>
              <ul className="list-disc text-black space-y-2 pl-4">
                {career.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Right: Requirements */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Requirements:
              </h3>
              <ul className="list-disc text-black space-y-2 pl-4 md:pl-8">
                {career.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
