import React from "react";
import { CTAButton } from "../common/CTA";

export default function HeroSection() {
  return (
    <div className="flex h-lvh w-full items-center justify-center">
      <div className="flex w-[762px] flex-col items-center gap-[36px]">
        <div className="flex flex-col items-center gap-[16px] self-stretch">
          <div className="font-montserrat bg-gradient-to-r from-black to-[#0060C7] bg-clip-text text-transparent text-center text-[50px] not-italic font-semibold leading-[66.55px]">
            The Future of Enterprise Runs on AI. We Engineer It.
          </div>
          <div className="flex w-[727px] p-[12px_27px_8px_28px] justify-center items-center">
            <p className="w-[672px] flex-shrink-0 text-[#686C75] text-center font-montserrat text-[16px] not-italic font-normal leading-[25.6px]">
              A decade of deep tech expertise applied to building
              enterprise-ready AI products and agentic systems that perform in
              the real world.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-[16px]">
          <CTAButton>Experience Center</CTAButton>
          <CTAButton variant="secondary">See it in action</CTAButton>
        </div>
      </div>
    </div>
  );
}
