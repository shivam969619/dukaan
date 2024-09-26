import React from "react";
import tick from "../assets/tick.png";

const Card3 = () => {
  return (
    <div className="bg-customBlack text-white p-8 flex flex-col items-center text-center w-full md:h-[350px]">
      <div className="text-3xl font-bold mt-6">
        Scale your business with Dukaan Enterprise
      </div>
      <div className="text-lg font-semibold mb-8 text-customYellow1 mt-2">
        Unlock your brand’s online potential on Dukaan’s lightning-fast
        infrastructure
        <br /> with custom-built features.
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 text-customYellow1 font-semibold mt-2">
        <div className="flex gap-4 items-center">
          <img src={tick} alt="Tick" className="w-6 h-6" />
          <div>Controlled Shipping</div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={tick} alt="Tick" className="w-6 h-6" />
          <div>Custom Plugins & Integrations</div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={tick} alt="Tick" className="w-6 h-6" />
          <div>Personalised Storefront Design</div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={tick} alt="Tick" className="w-6 h-6" />
          <div>99.5% Uptime</div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={tick} alt="Tick" className="w-6 h-6" />
          <div>Under 1ms Latency</div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={tick} alt="Tick" className="w-6 h-6" />
          <div>Returns & Exchange</div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
