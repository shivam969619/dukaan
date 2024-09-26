import React, { useState } from "react";
import { motion } from "framer-motion";

// Importing all images
import lemonde from "../assets/lemonde.png";
import govo from "../assets/govo.png";
import health from "../assets/health.png";
import truke from "../assets/truke.png";
import styleup from "../assets/styleup.png";
import uppercase from "../assets/uppercase.png";
import vector from "../assets/vector.png";
import vu from "../assets/vu.png";
import whole from "../assets/whole.png";
import wow from "../assets/wow.png";

// Array of images
const images = [
  lemonde,
  govo,
  health,
  truke,
  styleup,
  uppercase,
  vector,
  vu,
  whole,
  wow,
];

const TopCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full md:h-[130px] sm:h-[100px] bg-customBlack flex overflow-hidden justify-center items-center relative "
      onMouseEnter={() => setIsHovered(true)} // Pause animation on hover
      onMouseLeave={() => setIsHovered(false)} // Resume animation on hover leave
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{
          duration: 10, // Adjust the duration for speed
          ease: "easeInOut",
          repeat: Infinity, // Continuous scrolling
        }}
        style={{
          // Make sure each image width (including margins) matches the container width
          display: "flex",
          flexDirection: "row",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            className="w-[175px] md:h-[80px] sm:[65px] object-contain mx-4"
            src={src}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TopCarousel;
