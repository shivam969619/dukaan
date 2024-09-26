import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Card2 from "./Card2";
import comp1logo from "../assets/comp1.png";
import comp2logo from "../assets/comp2.png";
import comp3logo from "../assets/comp3.png";
import comp4logo from "../assets/comp4.png";
import comp1photo from "../assets/comp1photo.png";
import comp2photo from "../assets/comp2photo.png";
import comp3photo from "../assets/comp3photo.png";
import comp4photo from "../assets/comp4photo.png";

const Hero5 = () => {
  const [currentSet, setCurrentSet] = useState(1); // State to manage which set of cards is visible

  // Animation variants for Framer Motion
  const slideAnimation = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
   
  );
};

export default Hero5;
