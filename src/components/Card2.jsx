import React from "react";

const Card2 = ({
  complogo,
  text1,
  text2,
  personphoto,
  personname,
  persondesignation,
}) => {
  return (
    <div className="md:w-[500px] md:h-[500px] w-[450px] h-[]450px border border-t-1 bg-white mt-[20px]">
      <div className=" pt-[40px] pl-[30px]">
        <img src={complogo} alt="" />
      </div>
      <div className="pt-[30px] pl-[30px] mr-[20px]">
        <div className="font-bold text-2xl">{text1}</div>
        <div className="font-semibold text-xl text-customYellow1 pt-[6px]">
          {text2}
        </div>
      </div>
      <div className="md:pt-[30px] pl-[30px] pt-[20px] flex">
        <div className="h-[60px] w-[60px] ">
          <img src={personphoto} alt="" className="rounded-full" />
        </div>
        <div className="pl-[6px] ">
          <div className="font-semibold text-xl ">{personname}</div>
          <div className="text-customYellow1">{persondesignation}</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
