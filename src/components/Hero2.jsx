import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const Hero2 = () => {
  // Array of texts for each star and description
  const texts = [
    "Fully responsive e-commerce website & mobile app.",
    "Loads 6X faster than existing solutions.",
    "Upload/import products and inventory in bulk.",
    "Integrate payment gateways.",
    "Easily customizable themes.",
  ];
  const texts1 = [
    "Guaranteed 99.5% uptime for your store - We keep you open for business.",
    "60+ third party plugins.",
    "Marketing tools and discounts to drive repeat orders.",
    "Add staff accounts, assign different roles.",
    "Unlimited transactions, minimal transaction fees.",
  ];
  const texts2 = [
    "Order tracking, invoicing and order reports.",
    "Bulk edit product prices, variants, inventory.",
    "Manage global deliveries.",
    "In-depth business analytics.",
    "Automate all tax calculations.",
  ];

  // Animation variant for bottom-to-top effect
  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white pt-2">
      {/* Header Section */}
      <div className="pt-[90px] text-3xl font-bold flex flex-col items-center text-center px-4">
        <h1>Whether you’re a startup or an established business,</h1>
        <h1>here’s why Dukaan is your best choice</h1>
      </div>

      {/* First Card Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 items-center justify-items-center"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={card1}
          alt="Card"
          className="w-full h-auto sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[600px] object-contain"
        />
        <div className="md:pl-[40px] px-4 md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl font-bold">Launch Fast</h1>
          {texts.map((text, index) => (
            <div className="pt-[20px] flex items-center" key={index}>
              <img
                className="mr-2"
                src="https://mydukaan.io/_next/static/media/star-purple.3a0f99650c0ab639cf633cf46e9a29ae.svg"
                alt="Star"
              />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Second Card Section - Text First, Image Second */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 items-center justify-items-center md:flex-row-reverse"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="md:pr-[40px] px-4 md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl font-bold">Scale Faster</h1>
          {texts1.map((text2, index) => (
            <div className="pt-[20px] flex items-center" key={index}>
              <img
                className="mr-2"
                src="https://mydukaan.io/_next/static/media/star-blue.f616f6970481413e436c6ec2ad621545.svg"
                alt="Star"
              />
              <span>{text2}</span>
            </div>
          ))}
        </div>
        <img
          src={card2}
          alt="Card"
          className="w-full h-auto sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[600px] object-contain"
        />
      </motion.div>

      {/* Third Card Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 items-center justify-items-center"
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={card3}
          alt="Card"
          className="w-full h-auto sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[600px] object-contain"
        />
        <div className="md:pl-[40px] px-4 md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl font-bold">Manage Better</h1>
          {texts2.map((text2, index) => (
            <div className="pt-[20px] flex items-center" key={index}>
              <img
                className="mr-2"
                src="https://mydukaan.io/_next/static/media/star-gray.1f0c906d374a9e78df3310d226fb00d9.svg"
                alt="Star"
              />
              <span>{text2}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero2;
