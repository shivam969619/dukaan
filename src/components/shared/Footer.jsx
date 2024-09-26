import React from "react";
import footer from "../../assets/footerlogo.png";
import bharat from "../../assets/bharat.png";

const Footer = () => {
  return (
    <footer className="bg-customBlack text-white font-semibold py-10 md:py-12">
      {/* Footer Grid Container */}
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 px-8 md:px-16 lg:px-24">
        {/* Logo Container */}
        <div className="hidden md:flex items-center justify-center">
          <img src={footer} alt="Footer Logo" className="w-28 h-auto" />
        </div>

        {/* Footer Links */}
        <div className="space-y-2 ">
          <h3 className="font-bold mb-3 text-lg hover:underline">
            Business tools
          </h3>
          <p className="hover:text-customYellow2 cursor-pointer hover:underline">
            Dukaan for PC
          </p>
          <p className="hover:text-customYellow2 cursor-pointer">
            Dukaan delivery
          </p>
          <p className="hover:text-customYellow2 cursor-pointer">
            Dukaan plugins
          </p>
          <p className="hover:text-customYellow2 cursor-pointer">
            Dukaan themes
          </p>
          <p className="hover:text-customYellow2 cursor-pointer">
            Dukaan enterprise
          </p>
        </div>

        <div className="space-y-2">
          <p className="hover:text-customYellow2 cursor-pointer">Awards '22</p>
          <p className="hover:text-customYellow2 cursor-pointer">Help center</p>
          <p className="hover:text-customYellow2 cursor-pointer">Blog</p>
          <p className="hover:text-customYellow2 cursor-pointer">
            Banned items
          </p>
        </div>

        <div className="space-y-2">
          <p className="hover:text-customYellow2 cursor-pointer">About</p>
          <p className="hover:text-customYellow2 cursor-pointer">Privacy</p>
          <p className="hover:text-customYellow2 cursor-pointer">Terms</p>
          <p className="hover:text-customYellow2 cursor-pointer">Contact</p>
          <p className="hover:text-customYellow2 cursor-pointer">FAQ's</p>
        </div>

        <div className="space-y-2">
          <p className="hover:text-customYellow2 cursor-pointer">Jobs</p>
          <p className="hover:text-customYellow2 cursor-pointer">Branding</p>
          <p className="hover:text-customYellow2 cursor-pointer">
            Press inquiry
          </p>
          <p className="hover:text-customYellow2 cursor-pointer">Bug bounty</p>
        </div>

        <div className="space-y-2">
          <p className="hover:text-customYellow2 cursor-pointer">Facebook</p>
          <p className="hover:text-customYellow2 cursor-pointer">Twitter</p>
          <p className="hover:text-customYellow2 cursor-pointer">LinkedIn</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mx-8 md:mx-16 lg:mx-24 my-6"></div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 space-y-4 md:space-y-0">
        <p className="text-sm">
          © Growthpond Technology Pvt Ltd. All rights reserved, 2024.
        </p>

        {/* Made in India Section */}
        <div className="flex items-center space-x-3">
          <img
            src={footer}
            alt="Footer Logo"
            className="md:hidden block w-[100px] h-[40px]"
          />
          <span className="text-sm">Made in</span>
          <img src={bharat} alt="Made in India" className="w-8 h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
