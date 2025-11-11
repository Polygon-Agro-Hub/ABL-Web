"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "@/assets/home/banners/banner-1.png";
import banner2 from "@/assets/home/banners/banner-2.png";
import banner3 from "@/assets/home/banners/banner-1.png";
import banner4 from "@/assets/home/banners/banner-2.png";

const banners = [banner1, banner2, banner3, banner4];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full overflow-hidden mt-16">
      {/* Banner Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <div key={i} className="min-w-full relative h-[60vh] sm:h-[80vh]">
            <Image
              src={banner}
              alt={`Banner ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 border bg-[#BCBCBC]/30 border-[#BCBCBC]/90 hover:bg-[#BCBCBC]/80 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110 animate-[swing_3s_infinite]"
        aria-label="Previous"
      >
        <FaChevronLeft size={20} className="text-[#2F2F2F]" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 border bg-[#BCBCBC]/30 border-[#BCBCBC]/90 hover:bg-[#BCBCBC]/80 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110 animate-[swing_3s_infinite]"
        aria-label="Next"
      >
        <FaChevronRight size={20} className="text-[#2F2F2F]" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#BCC2D1]" : "bg-[#E8EAF1]"
            }`}
          />
        ))}
      </div>

      {/* Swing animation keyframes */}
      <style jsx>{`
        @keyframes swing {
          0% {
            transform: translateY(-50%) rotate(0deg);
          }
          25% {
            transform: translateY(-50%) rotate(3deg);
          }
          50% {
            transform: translateY(-50%) rotate(0deg);
          }
          75% {
            transform: translateY(-50%) rotate(-3deg);
          }
          100% {
            transform: translateY(-50%) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};

export default BannerSlider;
