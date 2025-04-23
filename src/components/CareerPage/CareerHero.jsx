import React, { useState } from "react";
import graduateIcon from "../../assets/Career/graduateIcon.svg";
import experiencedIcon from "../../assets/Career/experiencedIcon.svg";
import Background from "../../assets/Career/career page hero section updated.svg";

const ctaTextStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "100%",
  letterSpacing: "0",
  fontStyle: "normal",
  fontFeatureSettings: "'liga' off, 'clig' off",
  width: "76px",
  height: "20px",
  display: "inline-block",
};

const CareerHero = () => {
  const [selected, setSelected] = useState("graduate");

  return (
    <div
      className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Heading & Subtext Group */}
      <div
        style={{
          display: "flex",
          width: "790px",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "66.55px",
            background: "linear-gradient(90deg, #000 0%, #0060C7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
          }}
        >
          Lead . Grow . Have Serious Fun
        </h1>
        {/* Subtext */}
        <p
          style={{
            alignSelf: "stretch",
            color: "#444",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "32px",
            margin: 0,
          }}
        >
          We solve real problems with AI, move fast as a team, and take joy seriously. At Think41, growth isn’t just professional—it’s personal, playful, and built on ownership.
        </p>
      </div>

      {/* CTA Button Frame */}
      <div className="relative z-10 mt-6 flex rounded-[4.8px] bg-[#E9EEFC] items-center justify-between min-w-[443px] w-[443px] h-[59px] overflow-hidden shadow-sm">
        {/* Graduate Button */}
        <button
          onClick={() => setSelected("graduate")}
          className={`transition-all duration-300 flex items-center justify-center gap-2 h-full w-1/2 rounded-[4.8px] font-montserrat text-base font-medium px-6
            ${
              selected === "graduate"
                ? "bg-[#0060C7] text-white shadow-md"
                : "bg-transparent hover:bg-[#F5F9FF]"
            }`}
          style={{ border: "none", outline: "none", cursor: "pointer" }}
        >
          <img
            src={graduateIcon}
            alt="Graduate Icon"
            className="w-9 h-9"
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              filter: selected === "graduate" ? "brightness(0) invert(1)" : "none",
            }}
          />
          <span
            className="inline-block min-w-[102px] text-center"
            style={{
              ...ctaTextStyle,
              color: selected === "graduate" ? "#FFFFFF" : "#000000",
            }}
          >
            Graduate
          </span>
        </button>

        {/* Experienced Button */}
        <button
          onClick={() => setSelected("experienced")}
          className={`transition-all duration-300 flex items-center justify-center gap-2 h-full w-1/2 rounded-[4.8px] font-montserrat text-base font-medium px-6
            ${
              selected === "experienced"
                ? "bg-[#0060C7] text-white shadow-md"
                : "bg-transparent hover:bg-[#F5F9FF]"
            }`}
          style={{ border: "none", outline: "none", cursor: "pointer" }}
        >
          <img
            src={experiencedIcon}
            alt="Experienced Icon"
            className="w-9 h-9"
            style={{
              marginBottom: "10px",
              marginTop: "5px",
              filter: selected === "experienced" ? "brightness(0) invert(1)" : "none",
            }}
          />
          <span
            className="inline-block min-w-[102px] text-center"
            style={{
              ...ctaTextStyle,
              color: selected === "experienced" ? "#FFFFFF" : "#000000",
            }}
          >
            Experienced
          </span>
        </button>
      </div>

      {/* Blur Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "120px",
          pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 60%, #fff 100%)",
          filter: "blur(12px)",
          zIndex: 5,
        }}
      />
    </div>
  );
};

export default CareerHero;
