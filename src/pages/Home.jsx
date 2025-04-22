import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import OurExpertise from "../components/Homepage/OurExpertise";
import OurOfferings from "../components/Homepage/OurOfferings";
import BuisnessUseCase from "../components/Homepage/BuisnessUseCase";
import WhatWeBuilt from "../components/Homepage/WhatWeBuilt";

const Home = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="flex flex-col items-center justify-start gap-[36px] max-w-[1440px] mx-auto">
        <HeroSection />
        <OurExpertise />
        <OurOfferings />
        <BuisnessUseCase />
        <WhatWeBuilt />
        <div className="h-[200px]"></div>
      </div>
    </div>
  );
};

export default Home;
