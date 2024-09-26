import React from "react";
import Card4 from "./Card4";
import mainimage2 from "../assets/antique.png";
import mainimage3 from "../assets/cookies.png";
const mainimageee =
  "https://mydukaan.io/blog/wp-content/uploads/dukaan-dimensions-featured-image-1200x385.jpg";

const Hero6 = () => {
  return (
    <>
      <div className="bg-white px-4 lg:px-16">
        <div className="pt-[40px] flex justify-center items-center font-bold text-2xl">
          <span>
            <hr />
            <hr />{" "}
          </span>{" "}
          Grow your online store. <br /> Learn the tips and tricks from experts.
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 md:gap-4 sm:gap-2 gap-y-4 justify-center items-center">
          <Card4
            mainimage={mainimageee}
            maintext1="PRESS"
            maintext2="Dukaan Dimensions 2022-A Retrospective on the growth Enabled by dukaan"
          />
          <Card4
            mainimage={mainimage2}
            maintext1="Sell Online"
            maintext2="How to Sell Antiques Online the Right Way – Detailed 8 Step Guide"
          />
          <Card4
            mainimage={mainimage3}
            maintext1="SELL ONLINE"
            maintext2="How to Sell Cookies Online Successfully – 7 Step Guide for Beginners"
          />
        </div>
        <div className="flex justify-center items-center mt-[40px] pb-[8px]">
          <div className="flex justify-center items-center border border-t-1 border-black h-[50px] w-[130px] rounded-md">
            View All
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero6;
