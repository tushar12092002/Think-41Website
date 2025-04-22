import React from 'react'
import team from "../assets/team.png"

export default function TeamSection() {
  return (
    <div>
      {/* Team Section */}
      <section className="py-24 bg-white mt-[-40px] relative z-20">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Text block with updated styling */}
          <div className="px-2 md:px-8">
            <p className="text-gray-800 text-xl md:text-2xl mb-8">
              We are a young, well-funded, full-stack GenAI organization building systems and software that enable better collaboration between humans and AI, with the goal of enhancing human experience and creating a more fulfilling work environment. Our tools, systems, and platforms support this goal, helping us operate as one team that delivers higher-quality results, faster.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#3A6BC5] text-white font-semibold rounded-md shadow-lg hover:bg-[#2A4B8D] transition-all text-lg"
            >
              Join Our Team
            </a>
          </div>

          {/* Image block with added padding */}
          <div className="px-2 md:px-8 flex justify-center">
            <img
              src={team}
              alt="Team Photo"
              className="rounded-xl h-[387px] w-[737px] max-w-xl object-cover border-4 border-[#e5e7eb] shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}