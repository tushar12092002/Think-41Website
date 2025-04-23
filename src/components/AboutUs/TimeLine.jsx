import React from 'react'
import AnimatedTimeline from './AnimatedTimeline'

export default function TimeLine() {
  return (
    <div>
      {/* Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-left">
          <h2 className="text-3xl text-center mb-4 font-montserrat text-[40px] font-[600]">
            Where It All Began... and <span className="text-[#3A6BC5]">Where We're Going</span>
          </h2>

          {/* Timeline */}
         <div className="min-h-screen flex items-center justify-center bg-white font-sans">
  <div className="w-full max-w-6xl p-4">
    <AnimatedTimeline />
  </div>
</div>
        </div>
      </section>
    </div>
  )
}

