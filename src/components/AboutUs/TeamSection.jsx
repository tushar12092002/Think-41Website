import React from 'react';
import team from "../../assets/About/teams.svg";

export default function TeamSection() {
  return (
    <div className="bg-white flex justify-center">
      <section className="w-[1440px] px-6 py-24 flex items-center justify-between">

        {/* Left: Text + Button */}
        <div className="flex flex-col justify-between max-w-[560px] h-[400px] pl-[40px] pr-[20px]">
          <p className="text-gray-800 text-[20px] leading-[1.6] font-roboto mt-10">
            We are a young, well-funded, full-stack GenAI organization building systems and software that enable better collaboration between humans and AI, with the goal of enhancing human experience and creating a more fulfilling work environment. Our tools, systems, and platforms support this goal, helping us operate as one team that delivers higher-quality results, faster.
          </p>

          <a
            href="/careers"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#3A6BC5] text-white font-semibold rounded-md shadow-md hover:bg-[#2A4B8D] transition-all text-sm w-fit font-roboto"
          >
            Join Our Team
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 pr-[60px]">
          <img
            src={team}
            alt="Team"
            className="rounded-xl w-[720px] h-[400px] object-cover shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}








