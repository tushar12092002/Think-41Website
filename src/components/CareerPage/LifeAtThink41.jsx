import React, { useState, useRef, useEffect } from "react";
import teamPhoto from "../../assets/Career/team-photo.png";
import Image1 from "../../assets/Career/Image1.png";
import Image2 from "../../assets/Career/Image2.png";
import Image3 from "../../assets/Career/Image3.png";
import Image4 from "../../assets/Career/Image4.png";
import Image5 from "../../assets/Career/Image5.png";
import Image6 from "../../assets/Career/Image6.png";
import Image7 from "../../assets/Career/Image7.png";
import Image8 from "../../assets/Career/Image8.png";
import Image9 from "../../assets/Career/IMage9.png";
import Image10 from "../../assets/Career/Image10.png";
import Image11 from "../../assets/Career/IMage11.png";
import Image12 from "../../assets/Career/IMage12.png";
import Image13 from "../../assets/Career/IMage13.png";
import Image14 from "../../assets/Career/IMage14.png";
import Image15 from "../../assets/Career/IMage15.png";
import Image16 from "../../assets/Career/IMage16.png";
import Image17 from "../../assets/Career/IMage17.png";
import Image18 from "../../assets/Career/IMage18.png";
import Image19 from "../../assets/Career/IMage19.png";
import Image20 from "../../assets/Career/IMage20.png";
import Image21 from "../../assets/Career/IMage21.png";
import Image22 from "../../assets/Career/IMage22.png";
import Image23 from "../../assets/Career/IMage23.png";
import Image24 from "../../assets/Career/IMage24.png";

const LifeAtThink41 = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  // Handle mouse enter event
  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setIsActive(true);
      setHasAnimated(true);
    }
  };

  // Reset animation
  const handleReset = () => {
    setIsActive(false);
    setHasAnimated(false);
  };

  // Grid images - replaced with actual images
  const gridImages = [
    { id: 1, delay: 100, src: Image1, alt: "Team Event 1" },
    { id: 2, delay: 150, src: Image2, alt: "Team Event 2" },
    { id: 3, delay: 200, src: Image3, alt: "Team Event 3" },
    { id: 4, delay: 250, src: Image4, alt: "Team Event 4" },
    { id: 5, delay: 300, src: Image5, alt: "Team Event 5" },
    { id: 6, delay: 350, src: Image6, alt: "Sports Field" },
    { id: 7, delay: 400, src: Image7, alt: "Office 1" },
    { id: 8, delay: 450, src: teamPhoto, alt: "Main Team Photo", isMain: true },
    { id: 9, delay: 500, src: Image8, alt: "Sports" },
    { id: 10, delay: 550, src: Image9, alt: "Person 1" },
    { id: 11, delay: 600, src: Image10, alt: "Women Group" },
    { id: 12, delay: 650, src: Image11, alt: "Dinner" },
    { id: 13, delay: 700, src: Image12, alt: "Person 2" },
    { id: 14, delay: 750, src: Image13, alt: "Meeting" },
    { id: 15, delay: 800, src: Image14, alt: "Presentation" },
    { id: 16, delay: 850, src: Image15, alt: "Large Group 1" },
    { id: 17, delay: 900, src: Image16, alt: "Team Dinner" },
    { id: 18, delay: 950, src: Image17, alt: "Sunset Group" },
    { id: 19, delay: 1000, src: Image18, alt: "Office Team" },
    { id: 20, delay: 1050, src: Image19, alt: "Restaurant" },
    { id: 21, delay: 1100, src: Image20, alt: "Work Group" },
    { id: 22, delay: 1150, src: Image21, alt: "Event" },
    { id: 23, delay: 1200, src: Image22, alt: "Three People" },
    { id: 24, delay: 1250, src: Image23, alt: "Workshop" },
    { id: 25, delay: 1300, src: Image24, alt: "Workshop 2" },
  ];

  return (
    <section
      className="flex flex-col justify-center w-full bg-white relative overflow-hidden"
      style={{
        width: "1440px",
        height: "1024px",
        flexShrink: 0,
        margin: "0 auto",
      }}
    >
      {/* Red grid background - 10px lines, 20px gutter, 10% opacity */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='10' height='30' fill='none'/%3E%3Crect x='0' y='0' width='30' height='10' fill='none'/%3E%3Cline x1='10' y1='0' x2='10' y2='30' stroke='%23e5e5e5' stroke-width='1' stroke-opacity='0.5' stroke-dasharray='4,4'/%3E%3Cline x1='0' y1='10' x2='30' y2='10' stroke='%23e5e5e5' stroke-width='1' stroke-opacity='0.5' stroke-dasharray='4,4'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
          opacity: 1,
          width: "100%",
          height: "100%",
        }}
      />
      
      {/* Heading aligned with other sections */}
      <div className="w-[1200px] flex flex-col items-start mx-auto z-10">
        <h2
          className="font-montserrat font-semibold text-[40px] leading-[53px] mb-8"
          style={{
            background: "linear-gradient(90deg, #000 0%, #0060C7 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Life @ Think41
        </h2>
      </div>
      
      {/* Image Grid Animation Component */}
      <div 
        ref={containerRef}
        className="relative z-10 mx-auto"
        style={{
          width: "1202.564px",
          height: "700px",
          flexShrink: 0,
          borderRadius: "8px",
        }}
        onMouseEnter={handleMouseEnter}
      >
        {/* Main image that shows initially */}
        <div
          className={`
            absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
            transition-all duration-1000 ease-out
            ${isActive ? "opacity-0 scale-50 z-0" : "opacity-100 scale-100 z-50"}
          `}
        >
          <img
            src={teamPhoto || "/placeholder.svg"}
            alt="Team at Think41"
            style={{
              width: "100%",
              height: "100%",
              flexShrink: 0,
              borderRadius: "8px",
              background: `url(${teamPhoto}) lightgray -72.797px -198.072px / 112.264% 128.304% no-repeat`,
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Grid container that appears when hovered */}
        <div
          className={`
            w-full h-full p-4 md:p-6
            transition-all duration-1000 ease-out
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            {gridImages.map((image) => (
              <div
                key={image.id}
                className={`
                  rounded-lg overflow-hidden
                  transition-all duration-700 ease-out
                  ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                `}
                style={{ transitionDelay: `${image.delay}ms` }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={250}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reset button */}
        {/*
        <button
          onClick={handleReset}
          className={`
            absolute bottom-4 right-4 px-4 py-2 bg-black text-white rounded-md
            transition-opacity duration-500
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        >
          Reset Animation
        </button>
        */}
      </div>
    </section>
  );
};

export default LifeAtThink41;