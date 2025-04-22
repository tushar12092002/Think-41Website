import React from 'react'
import bgHero from "../assets/Frame.svg"

export default function HeroSection() {
  return (
    <div>
         {/* Hero Section */}
      <section className="relative w-full min-h-[480px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={bgHero} alt="Background" className="object-cover w-full h-[480px]" />
        </div>
        <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-black">Fullstack </span>
              <span className="text-[#2A4B8D]">GenAI </span>
              <span className="text-[#3A6BC5]">Company</span>
            </h1>
            <p className="text-gray-800 text-xl md:text-2xl mb-2">
              At Think41, we use Generative AI to hire, operate, build, innovate, and scale.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
