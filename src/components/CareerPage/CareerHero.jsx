import React from "react";
import GraduateIcon from "../../assets/Career/graduateIcon.svg";
import ExperiencedIcon from "../../assets/Career/experiencedIcon.svg";
import Background from "../../assets/Career/career-background.svg";

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

const subTextStyle = {
  color: "#444444",
  textAlign: "center",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "32px",
  letterSpacing: "0",
  width: "790px",
  height: "64px",
  alignSelf: "center",
  marginTop: "24px",
  marginBottom: "0",
};

const CareerHero = () => {
  return (
    <div
      className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Heading */}
      <h1
        className="text-[50px] font-semibold text-center leading-[66.55px] font-[Montserrat]"
        style={{
          background: "linear-gradient(90deg, #000000 0%, #0060C7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Lead . Grow . Have Serious Fun
      </h1>

      {/* Subtext */}
      <p style={subTextStyle}>
        We solve real problems with AI, move fast as a team, and take joy seriously. At Think41, growth isn’t just professional—it’s personal, playful, and built on ownership.
      </p>

      {/* Ellipse Blur Behind CTAs */}
      <div
        className="w-[1577px] h-[110px] mt-14 mb-4 left-1/2 -translate-x-1/2 absolute"
        style={{
          borderRadius: "1577px",
          background: "#FFF",
          filter: "blur(35.2px)",
          zIndex: 0,
        }}
      ></div>

      {/* CTA Buttons */}
      <div className="relative z-10 mt-6 flex items-center gap-4">
        {/* Graduate Button */}
        <button
          className="flex items-center gap-[16px] w-[317px] h-[45.86px] rounded-[4.88px] bg-[#0060C7] justify-center"
          style={{ border: "none" }}
        >
          <img src={GraduateIcon} alt="Graduate" className="w-10 h-10" />
          <span
            style={{
              ...ctaTextStyle,
              color: "#FFF",
            }}
          >
            Graduate
          </span>
        </button>

        {/* Experienced Button */}
        <button
          className="flex items-center gap-[16px] w-[317px] h-[45.86px] rounded-[4.88px] bg-[#E9EEFC] justify-center"
          style={{ border: "none" }}
        >
          <img src={ExperiencedIcon} alt="Experienced" className="w-10 h-10" />
          <span
            style={{
              ...ctaTextStyle,
              color: "#000",
            }}
          >
            Experienced
          </span>
        </button>
      </div>
    </div>
  );
};

export default CareerHero;