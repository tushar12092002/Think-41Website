import React from "react";
import CareerHero from "../components/CareerPage/CareerHero";
import OurStory from "../components/CareerPage/OurStory";
import Boot41 from "../components/CareerPage/Boot41";
import Boot41FlowFrame from "../components/CareerPage/Boot41FlowFrame";

// Import the ellipse SVG
import ellipse from "../assets/Career/Ellipse.svg";

const CareerPage = () => {
  return (
    <div>
      <CareerHero />
      {/* Removed Ellipse Blur Between CTA and Our Story */}
      <OurStory />
      {/* Ellipse Blur Divider - now before Boot41 */}
      <div style={{
        width: "1609px",
        height: "185.84px",
        margin: "60px auto 0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        pointerEvents: "none"
      }}>
        <img
          src={ellipse}
          alt="Blur Ellipse"
          style={{
            width: "1609px",
            height: "185.84px",
            borderRadius: "1609px",
            background: "#FFF",
            filter: "blur(20.3px)",
            WebkitBackdropFilter: "blur(40.6px)",
            backdropFilter: "blur(40.6px)",
            flexShrink: 0,
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
      </div>
      <Boot41 />
      <Boot41FlowFrame />
    </div>
  );
};

export default CareerPage;