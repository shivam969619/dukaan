import React from "react";
import cardimage from "../assets/cardimg.png";
import dukaanlogo from "../assets/dukaanlogo2.png";
import { Button } from "./ui/button";

const Card5 = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg overflow-hidden h-[350px] md:h-[400px] lg:h-[350px] m-4"
      style={{ backgroundImage: `url(${cardimage})` }}
    >
      {/* Logo */}
      <div className="absolute top-1 left-1 md:top-1 md:left-6 lg:top-8 lg:left-8">
        <img
          src={dukaanlogo}
          alt="Dukaan Logo"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-2"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-6 lg:p-8 bg-black/50 space-y-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-black mt-[3px]">
          Start selling online.
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg mb-4 font-semibold max-w-[250px] md:max-w-[300px] lg:max-w-[350px] text-justify">
          Take your business online with Dukaan. Get your free online store in
          30 seconds.
        </p>

        {/* Button */}
        <Button className=" hover:bg-customYellow2 py-3 px-6 rounded-md text-black font-semibold text-lg md:text-xl lg:text-2xl">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Card5;
