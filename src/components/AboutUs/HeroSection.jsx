// import React from "react";
// import bgHero from "../../assets/About/About_us_hero_section_updated.svg";

// export default function HeroSection() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0 h-[500px] w-full">
//           <img
//             src={bgHero}
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//           {/* Bottom Blur Overlay */}
//           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white backdrop-blur-sm" />
//         </div>

//         {/* Content */}
//         <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center justify-center h-[450px]">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-[50px] md:text-6xl font-extrabold mb-6 leading-tight font-montserrat">
//               <span className="text-black">Fullstack </span>
//               <span className="text-[#2A4B8D]">GenAI </span>
//               <span className="text-[#3A6BC5]">Company</span>
//             </h1>
//             <p className="text-[#000] text-[16px] font-montserrat font-[500] md:text-2xl mb-2">
//               At Think41, we use Generative AI to hire, operate, build,
//               innovate, and scale.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React from "react";
import bgHero from "../../assets/About/About_us_hero_section_updated.svg";

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-[500px] w-full">
          <img
            src={bgHero}
            alt="Background"
            className="w-full h-full object-cover"
          />

          {/* Elliptical Bottom Blur Overlay */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[130%] h-40 rounded-full bg-white/60 blur-3xl pointer-events-none" />

          {/* Gradient Fade Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center justify-center h-[450px]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[50px] md:text-6xl font-extrabold mb-6 leading-tight font-montserrat">
              <span className="text-black">Fullstack </span>
              <span className="text-[#2A4B8D]">GenAI </span>
              <span className="text-[#3A6BC5]">Company</span>
            </h1>
            <p className="text-[#000] text-[16px] font-montserrat font-[500] md:text-2xl mb-2">
              At Think41, we use Generative AI to hire, operate, build,
              innovate, and scale.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

