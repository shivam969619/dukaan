import React from "react";
import { Button } from "./ui/button";
import apple from "../assets/apple.png";
import play from "../assets/play.png";
import hero1 from "../assets/heroimage1.png";

const Hero1 = () => {
  return (
    <div className="md:flex justify-between items-center w-full mt-[40px]">
      {/* Left Content Section */}
      <div className="flex-1 pl-8 pr-8 md:pl-[110px] ">
        <div className="text-4xl font-bold mb-4">
          Your Global Commerce Partner, Engineered for Peak Performance
        </div>
        <div className="text-2xl mb-6 font-semibold text-customBlack1">
          Launch your eye-catching online store with ease, attract and convert
          more customers than ever before.
        </div>
        <div className="mb-6">
          <Button className="bg-customBlue">Get Started</Button>
        </div>
        <div className="flex items-center space-x-3 ">
          <span>Also available on </span>
          <span>
            <img src={apple} alt="Apple Store" className="h-8" />
          </span>
          <span>
            <img src={play} alt="Google Play Store" className="h-8" />
          </span>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-shrink-0">
        <img
          src={hero1}
          alt="Hero"
          className="sm:h-[155px] md:h-[500px] w-auto"
        />
      </div>
    </div>
  );
};

export default Hero1;
