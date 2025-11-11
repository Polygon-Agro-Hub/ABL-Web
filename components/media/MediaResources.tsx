"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "@/assets/media/image-1.png";
import image2 from "@/assets/media/image-2.png";
import image3 from "@/assets/media/image-3.png";
import image4 from "@/assets/media/image-4.png";
import image5 from "@/assets/media/image-5.png";
import image6 from "@/assets/media/image-6.png";
import image7 from "@/assets/media/image-7.png";
import image8 from "@/assets/media/image-8.png";
import image9 from "@/assets/media/image-9.png";
import image10 from "@/assets/media/image-10.png";
import image11 from "@/assets/media/image-11.png";
import image12 from "@/assets/media/image-12.png";
import image13 from "@/assets/media/image-13.png";
import image14 from "@/assets/media/image-14.png";
import image15 from "@/assets/media/image-15.png";
import image16 from "@/assets/media/image-16.png";
import image17 from "@/assets/media/image-17.png";
import image18 from "@/assets/media/image-18.png";
import image19 from "@/assets/media/image-19.png";
import image20 from "@/assets/media/image-20.png";
import image21 from "@/assets/media/image-21.png";
import image22 from "@/assets/media/image-22.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
];

const MediaResources = () => {
  const [index, setIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width >= 768 && width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = screenSize === "mobile" ? 3 : 7;

  // Separate base spacing for different screen sizes
  const getBaseSpacing = () => {
    switch (screenSize) {
      case "mobile":
        return 100;
      case "tablet":
        return 130;
      case "desktop":
        return 170;
      default:
        return 140;
    }
  };

  // Separate image dimensions for different screen sizes
  const getImageDimensions = () => {
    switch (screenSize) {
      case "mobile":
        return { width: 160, height: 180 };
      case "tablet":
        return { width: 140, height: 200 };
      case "desktop":
        return { width: 220, height: 300 };
      default:
        return { width: 220, height: 300 };
    }
  };

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const { width: imageWidth, height: imageHeight } = getImageDimensions();
  const baseSpacing = getBaseSpacing();

  return (
    <section className="min-h-screen">
      <div className="mx-auto text-center">
        <div className="bg-[#F6F8FD] py-16 px-6">
          {/* Title */}
          <h1 className="text-4xl text-black font-medium">Media & Resources</h1>
        </div>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center px-4 pt-12">
          <div className="relative w-full flex items-center justify-center h-60 md:h-[400px]">
            {images.map((img, i) => {
              const offset = (i - index + images.length) % images.length;
              const half = Math.floor(visibleCount / 2);
              const isVisible =
                offset <= half || offset >= images.length - half;

              if (!isVisible) return null;

              const position = offset <= half ? offset : offset - images.length;

              // Responsive spacing with separate values for each screen size
              const translateX =
                position * (baseSpacing - Math.abs(position) * 12);

              // Scale logic
              let scale = 1 - Math.abs(position) * 0.2;
              if (position === 0) scale = 1.3; // Center image
              else if (Math.abs(position) === 1) scale = 1.1;
              else if (Math.abs(position) === 2) scale = 1.0;
              else if (Math.abs(position) >= 3) scale = 0.9;

              const zIndex = 10 - Math.abs(position);

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-2xl shadow-md"
                  style={{
                    width: imageWidth,
                    height: imageHeight,
                    zIndex,
                  }}
                  animate={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={img}
                    alt={`Media ${i + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 flex gap-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-black text-black hover:bg-gray-200 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-black text-black hover:bg-gray-200 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaResources;
