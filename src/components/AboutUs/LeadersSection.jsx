import React, { useState } from 'react';
import pic1 from "../../assets/About/1.svg";
import pic2 from "../../assets/About/2.svg";
import pic3 from "../../assets/About/3.svg";
import pic4 from "../../assets/About/4.svg";



"use client"

// Team member data
const teamMembers = [
  {
    id: 1,
    image: pic1
  },
  {
    id: 2,
    image: pic2
  },
  {
    id: 3,
    image: pic3
  },
  {
    id: 4,
    image: pic4,
  },
]

export default function TeamLeaders() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463]">Meet Our Leaders</h2>
          <p className="text-xl text-gray-800 mt-2">Experience in innovation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-[#E9EEFC] rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
              {/* Image */}
              <div className="w-[260px] h-[260px] relative mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt="Team member"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Name and LinkedIn placeholder */}
              <div className="mt-4">
                <p className="font-medium text-gray-900">[Name Here]</p>
                <div className="mt-2 flex justify-center">
                  <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}