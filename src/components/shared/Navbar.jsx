import React from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[80px]  w-full md:pl-[110px] flex items-center gap-4 overflow-hidden ">
      {/* Logo Section */}
      <div className="pl-4 md:pl-0 flex-shrink-0 mt-[10px]">
        <img
          src={logo}
          alt="Logo"
          className="h-[50px] w-[180px] min-w-[180px]"
        />
      </div>

      {/* Navigation Links Section (hidden on smaller screens) */}
      <div className="hidden lg:flex justify-between mt-[10px]">
        <ul className="flex space-x-8 md:pl-16 md:text-lg">
          <li className="flex items-center space-x-1">
            <span>Products</span>
            <ChevronDown size={27} />
          </li>
          <li className="flex items-center space-x-1">
            <span>Company</span>
            <ChevronDown size={27} />
          </li>
          <li className="flex items-center space-x-1">
            <span className="hover:underline">Resources</span>
            <ChevronDown size={27} />
          </li>
          <li className="flex items-center space-x-1">
            <span className="hover:underline">Pricing</span>
            <ChevronDown size={27} />
          </li>
        </ul>
      </div>

      {/* Button and Sign-In Section (hidden on smaller screens) */}
      <div className="hidden lg:flex items-center space-x-4 ml-auto md:pr-[40px] mt-[10px]">
        <ul className="flex items-center space-x-6">
          <li
            className="cursor-pointer text-xl hover:underline"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </li>
          <li>
            <Button className="bg-customBlue ">Start free</Button>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="flex lg:hidden ml-auto pr-4">
        <Popover>
          <PopoverTrigger asChild>
            <button aria-label="Toggle Menu">
              <Menu className="w-6 h-6" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="end"
            className="p-4 bg-white rounded shadow-md"
          >
            <ul className="space-y-4 text-xl">
              <li className="flex items-center space-x-1">
                <span className="hover:underline">Products</span>
                <ChevronDown size={27} />
              </li>
              <li className="flex items-center space-x-1">
                <span className="hover:underline">Company</span>
                <ChevronDown size={27} />
              </li>
              <li className="flex items-center space-x-1">
                <span className="hover:underline">Resources</span>
                <ChevronDown size={27} />
              </li>
              <li className="flex items-center space-x-1">
                <span>Pricing</span>
                <ChevronDown size={27} />
              </li>
              <li>
                <Button className="w-full bg-customBlue">Start free</Button>
              </li>
              <li
                className="text-center "
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign in
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
