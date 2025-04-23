import React from "react";
import FoundationIcon from "../../assets/Career/foundation.svg";
import TeamImage from "../../assets/Career/team-photo.png";
import TagButton from "../../components/common/TagButton";
import PolygonWebVector from "../../assets/Career/polygonWebVector.svg";

const OurStory = () => (
    <div
    style={{ backgroundImage: `url(${PolygonWebVector})` }}
    className="bg-repeat h-full w-full overflow-hidden">
  <section
    className={`w-[1200px] mx-auto flex flex-col gap-[36px] relative`}
    id="our-story"
    style={{ minHeight: '520px' }}
  >
    {/* Background Polygon Web Vector */}
    {/* <img
      src={PolygonWebVector}
      alt="Polygon Web Vector Background"
      className="bg-repeat absolute w-screen left-1/2 -translate-x-1/2 h-full object-cover z-[0] pointer-events-none select-none"
      style={{ top: 0, left: '50%', transform: 'translateX(-50%)', right: 0, bottom: 0, position: 'absolute', zIndex: 0, width: '100vw', height: '100%', opacity: 0.60 }}
      aria-hidden="true"
    /> */}
    <div className="flex flex-col gap-[36px] relative z-[1]">
      {/* Foundation label */}
      <TagButton text="Foundation">
      </TagButton>
      {/* Gradient Heading */}
      <h2 className="text-[40px] font-bold font-montserrat mb-2 relative z-[2]">
        <span className="bg-gradient-to-r from-[#000] to-[#0060C7] bg-clip-text text-transparent">
          Our story
        </span>
      </h2>
      {/* Two-column layout */}
      <div className="flex gap-[32px] w-full relative z-[2]">
        {/* Left: Text */}
        <div className="flex-1 text-[#444] font-montserrat text-[16px] leading-[28px]">
          <div className="mb-6">
            We’re not just building with AI. We’re building a company where AI and people grow together.
          </div>
          <div className="mb-6">
            At Think41, AI isn’t just what we do—it’s how we think. From day one, we’ve co-engineered real-world GenAI systems with enterprises and built an AI-native culture that moves fast, solves real problems, and puts people first.
          </div>
          <div className="mb-6">
            But this story isn’t just about technology. It’s about the people building it. From Boot41 grads to engineers from top institutes and founders who’ve scaled 600-member teams—we bring together talent, workflow, and innovation under one roof.
          </div>
          <div>
            Here, AI handles the repetitive so you can focus on what matters: solving problems, exploring new ideas, and shipping work you’re proud of. We take fun seriously, learning personally, and impact collectively. If you’re looking for a place where engineering excellence meets real ownership—this is it.
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={TeamImage}
            alt="Team"
            className="w-full max-w-[534px] h-auto rounded-[16px] object-cover shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
          />
        </div>
      </div>
    </div>
  </section>
  </div>
);

export default OurStory;