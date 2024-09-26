import React from "react";

const Card4 = ({ mainimage, maintext1, maintext2 }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:h-[320px] md:w-[400px] sm:h-[320px] sm:w-[500px]">
      <div className="mb-4 ">
        <div className="h-[200px] md:w-[350px] sm:w-full">
          <img src={mainimage} alt="" className="object-cover w-full h-full" />
        </div>
        <div className=" flex flex-col sm:justify-center sm:items-center md:justify-start md:items-start">
          <div className="font-medium text-xl text-customYellow1 mb-2">
            {maintext1}
          </div>
          <div className="text-customBlack font-medium">{maintext2}</div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
