import React from "react";
import Navbar from "./shared/Navbar";
import Hero1 from "./Hero1";
import TopCarousel from "./TopCarousel";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
// import Hero5 from "./Hero5";
import Card3 from "./Card3";
import Hero6 from "./Hero6";
import Footer from "./shared/Footer";
import Card5 from "./Card5";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero1 />
      <TopCarousel />
      <Hero2 />
      {/* <Hero3 />we will do this later */}
      <Hero4 />
      {/* <Hero5 /> */}
      <Card3 />
      <Hero6 />
      {/* <Card5 /> */}
      <Footer />
    </div>
  );
};

export default Home;
