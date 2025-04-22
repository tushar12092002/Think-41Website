import React, { useState } from 'react';
import { Linkedin } from "lucide-react";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import pic4 from "../assets/4.png";
import pic11 from "../assets/11.png";
import pic12 from "../assets/12.png";
import pic13 from "../assets/13.png";
import pic14 from "../assets/14.png";

export default function LeadersSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {/* Leaders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Meet Our Leaders</h2>
          <p className="text-gray-600 mb-8">Experience in Innovation</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

           {/* Leader 1 */}
           <div className=''></div>
           <div className='w-[276px] h-[275px] relative  bg-[#E9EEFC] rounded-md'>
              
              <div></div>sName="w-full flex items h-full" <img
                  src={pic2}
                  alt="Anshuman Singh"
                  className="absolute  object-cover"
                />
           </div>
          <div className="text-center">
              <div
                className="mb-3 relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={hoveredIndex === 1 ? pic12 : pic2}
                  alt="Anshuman Singh"
                  className="rounded-lg mx-auto bg-[E9EEFC]"
                />
              </div>
              <h4 className="font-medium">Anshuman Singh</h4>
              <a href="#" className="inline-block mt-2">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
            </div>
            {/* Leader 2 */}

              <div className="text-center">
              <div
                className="mb-3 relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={hoveredIndex === 2 ? pic13 : pic3}
                  alt="Hardik Singhal"
                  className="rounded-lg mx-auto bg-[E9EEFC]"
                />
              </div>
              <h4 className="font-medium">Hardik Singhal</h4>
              <a href="#" className="inline-block mt-2">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
            </div>            

            {/* Leader 3 */}
            
            <div className="text-center">
              <div
                className="mb-3 relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={hoveredIndex === 0 ? pic11 : pic1}
                  alt="Himanshu"
                  className="rounded-lg mx-auto bg-[E9EEFC]"
                />
              </div>
              <h4 className="font-medium">Himanshu</h4>
              <a href="#" className="inline-block mt-2">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
            </div>

            {/* Leader 4 */}
            <div className="text-center">
              <div
                className="mb-3 relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={hoveredIndex === 3 ? pic14 : pic4}
                  alt="Shashti Krishnan"
                  className="rounded-lg mx-auto bg-[E9EEFC]"
                />
              </div>
              <h4 className="font-medium">Shashti Krishnan</h4>
              <a href="#" className="inline-block mt-2">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
