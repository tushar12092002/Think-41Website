import React from 'react'
import AnimatedTimeline from './AnimatedTimeline'

export default function TimeLine() {
  return (
    <div>
      {/* Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Where It All Began... and <span className="text-[#3A6BC5]">Where We're Going</span>
          </h2>
          {/* This section appears to be empty in the image, but has a heading */}

          <div className="min-h-screen flex items-center justify-center p-4 bg-white font-sans">
            <div className="max-w-4xl w-full">
              <AnimatedTimeline />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
