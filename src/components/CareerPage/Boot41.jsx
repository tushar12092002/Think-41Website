import React from "react";
import FoundationIcon from "../../assets/Career/foundation.svg";
import boot41Img from "../../assets/Career/Boot41-Image.png";
import videoBoot41 from "../../assets/Career/videoBoot41.png";
import TagButton from "../../components/common/TagButton";
import PolygonWebVector from "../../assets/Career/polygonWebVector.svg";

const Boot41 = () => {
  return (
    <section
      className="w-[1200px] mx-auto flex flex-col gap-[36px] relative"
      id="boot41"
      style={{ minHeight: '520px' }}
    >
      {/* Background Polygon Web Vector */}
      <img
        src={PolygonWebVector}
        alt="Polygon Web Vector Background"
        className="absolute w-screen left-1/2 -translate-x-1/2 h-full object-cover z-[0] pointer-events-none select-none"
        style={{ top: 0, left: '50%', transform: 'translateX(-50%)', right: 0, bottom: 0, position: 'absolute', zIndex: 0, width: '100vw', height: '100%', opacity: 0.60 }}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-[36px] relative z-[1]">
        <TagButton text="Graduate Program">
        </TagButton>
        <h2 className="text-[40px] font-bold font-montserrat mb-2 relative z-[2]">
          <span className="bg-gradient-to-r from-[#000] to-[#0060C7] bg-clip-text text-transparent">
            Boot41: Launch Your Career into the Future of AI
          </span>
        </h2>
        <div
          className="font-montserrat"
          style={{
            color: '#444',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '28px',
            width: '684px',
          }}
        >
          Boot41 is our exclusive bootcamp designed to equip engineers and developers with hands-on experience, mentorship, and AI-driven workflows to fast-track their careers
        </div>
      </div>

      <div className="flex items-end gap-[26px] w-[1200px] h-[400px] mt-[36px] relative z-[1]">
        <div className="relative w-[750px] h-[400px] rounded-[18px] overflow-hidden flex items-end justify-end bg-white">
          <img src={boot41Img} alt="Bootcamp" className="w-full h-full object-cover rounded-[18px]" />
        </div>
        <div className="relative w-[750px] h-[400px] rounded-[18px] overflow-hidden flex items-end justify-end bg-white">
          <img src={videoBoot41} alt="Boot41 Video" className="w-full h-full object-cover rounded-[18px]" />
          <div className="absolute inset-0 flex flex-col justify-end items-start p-8 bg-black/10 pointer-events-none">
            <div className="w-[56px] h-[56px] rounded-full bg-white/80 flex items-center justify-center mb-4">
              {/* You can add a play icon here if you want */}
            </div>
            <div>
              {/* If you want to add video title/subtitle, add here */}
            </div>
          </div>
        </div>
      </div>

      {/* Updated stats row */}
      <div className="flex w-[1200px] h-[66px] justify-between items-center mt-[36px] relative z-[1]">
        <div className="flex flex-col items-center flex-1">
          <span
            style={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '31.471px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '37.551px',
              letterSpacing: '-1.067px',
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          >
            75%
          </span>
          <span
            style={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Montserrat',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '13.868px',
              letterSpacing: '-0.107px',
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          >
            conversion rate to full-time offers
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span
            style={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '31.471px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '37.551px',
              letterSpacing: '-1.067px',
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          >
            50+
          </span>
          <span
            style={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Montserrat',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '13.868px',
              letterSpacing: '-0.107px',
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          >
            engineers trained across two cohorts
          </span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span
            style={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '31.471px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '37.551px',
              letterSpacing: '-1.067px',
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          >
            30+
          </span>
          <span
            style={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Montserrat',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '13.868px',
              letterSpacing: '-0.107px',
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          >
            GenAI mini apps built — 1 already in production
          </span>
        </div>
      </div>
    </section>
  );
};

export default Boot41;