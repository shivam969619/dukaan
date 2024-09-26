import React from "react";
import AnimatedCard from "./AnimatedCard";

const Hero3 = () => {
  return (
    <>
      <div className="bg-customYellow pt-[100px] grid grid-rows-2 gap-y-3">
        <div className="flex justify-center items-center text-3xl font-bold">
          E-commerce Simplified, Success Amplified
        </div>
        <div className="flex justify-center items-center text-2xl">
          E-commerce Simplified, Success Amplified
        </div>
        <AnimatedCard />
      </div>
    </>
  );
};

export default Hero3;
