import React from "react";
import TagButton from "../common/TagButton";
import video from "../../assets/Home/video.mp4";

const WhatWeBuilt = () => {
  return (
    <div className="flex w-[1440px] h-[675px] pl-[120px] pr-[48px] py-[100px] items-start flex-shrink-0">
      {/* Left */}
      <div className="flex flex-col gap-[36px] w-[536px]">
        <TagButton text="What We've Built" />
        <div>
          <p className="font-montserrat text-[40px] font-semibold leading-[53.24px] bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent">
            Our Solutions In Action
          </p>
          <p className="text-[#444] font-montserrat text-[16px] font-normal leading-[28px] self-stretch">
            AI workflows and agentic systems have been built to solve real-world
            enterprise problems—tested on live data, integrated into existing
            stacks, and delivered with performance in mind.
          </p>
        </div>
        <button>Demo Hub</button>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-[36px] w-[736px] pl-[68px] pr-[55px] pt-[68px] overflow-y-scroll overflow-x-hidden h-[475px] scroll-hidden">
        <div className="flex justify-between">
          <div className="flex w-[291px] h-[193px] px-[16px] flex-col justify-center gap-[20px] flex-shrink-0 rounded-[8px] bg-[#D8DDF2] items-start">
            <p className="text-[#000] font-montserrat text-[25px] font-medium leading-[33.275px]">
              Pitch Perfect
            </p>
            <p className="text-[#444] font-roboto text-[16px] font-normal leading-[28px]">
              Simulated practice before pitch
            </p>
          </div>
          <ul className="flex w-[300px] h-[193px] px-[8px] flex-col justify-center items-start gap-[4px] flex-shrink-0 rounded-[8px] border-2 border-[#D8DDF2] list-disc pl-[20px] text-[#000] font-roboto text-[16px] font-light leading-[24px]">
            <li>For a wealth manager</li>
            <li>Persona based on real user profile and portfolio</li>
            <li>Natural voice conversation</li>
            <li>Evaluation summary emailed after the discussion</li>
          </ul>
        </div>

        <div className="rounded-[8px] border-[4px] border-[#D8DDF2] w-[613.069px] h-[346px] flex-shrink-0 aspect-[613.07/346] overflow-hidden">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          nostrum non quia, atque molestiae provident ut, id illo nobis nisi
          laborum consequatur cumque minus? Quis tenetur magnam cupiditate
          reiciendis explicabo.
        </p>
        <div className="rounded-[8px] border-[4px] border-[#D8DDF2] w-[613.069px] h-[346px] flex-shrink-0 aspect-[613.07/346]">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuilt;
