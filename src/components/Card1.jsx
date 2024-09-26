import React from "react";

const Card1 = ({ text, image }) => {
  return (
    <>
      <div className="rounded-2xl">
        <div>
          <img
            src={image}
            alt=""
            className="md:h-[406px] md:w-[286px] w-full rounded-xl"
          />
        </div>
        <div className="text-2xl font-semibold mt-[5px]">{text}</div>
      </div>
    </>
  );
};

export default Card1;
