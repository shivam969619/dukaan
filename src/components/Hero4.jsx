import React from "react";
import Card1 from "./Card1";
import tinker from "../assets/Tinker.png";
import ursa from "../assets/ursa.png";
import enigma from "../assets/enigma.png";
import mana from "../assets/mana.png";
import nirvana from "../assets/Nirvana.png";
import oxford from "../assets/oxford.png";
import { Button } from "./ui/button";

const Hero4 = () => {
  return (
    <>
      {/* Ensure this div covers the full screen width */}
      <div className="bg-white w-full min-h-screen overflow-hidden md:pl-[110px] ">
        {/* Remove margins that could cause the background to not be full width */}
        <div className="mt-16 px-6">
          <div className="text-2xl font-bold flex justify-center items-center mt-[5px]">
            Kickstart your online store with these themes
          </div>
          <div className="grid lg:grid-cols-3 lg:pl-6 lg:pt-[20px] md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="rounded-2xl">
              <Card1 text="Tinker" image={tinker} />
            </div>
            <div className="rounded-2xl">
              <Card1 text="ursa" image={ursa} />
            </div>
            <div className="rounded-2xl">
              <Card1 text="enigma" image={enigma} />
            </div>
            <div className="rounded-2xl">
              <Card1 text="Mana" image={mana} />
            </div>
            <div className="rounded-2xl">
              <Card1 text="nirvana" image={nirvana} />
            </div>
            <div className="rounded-2xl">
              <Card1 text="oxford" image={oxford} />
            </div>
          </div>
          <div className="flex justify-center items-center mt-[40px] ">
            <div className="flex justify-center items-center border border-t-1 border-black h-[60px] w-[130px] rounded-md">
              View All
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;
