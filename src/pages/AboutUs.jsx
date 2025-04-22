import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import HeroSection from "../components/HeroSection"
import TeamSection from "../components/TeamSection"
import FeatureSection from "../components/FeatureSection"
import LeadersSection from "../components/LeadersSection"
import TimeLine from "../components/TimeLine"
import Boot41Flow from "../components/CareerPage/Boot41Flow"
import Boot41FlowFrame from "../components/CareerPage/Boot41FlowFrame"



export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar></Navbar>
     <HeroSection></HeroSection>
     <TeamSection></TeamSection>
     <FeatureSection></FeatureSection>
     <TimeLine></TimeLine>
     <LeadersSection></LeadersSection>
      <Boot41FlowFrame></Boot41FlowFrame>
      {/* Boot41 Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Boot41</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Boot41 is our exclusive bootcamp designed to equip engineers and developers with hands-on experience,
            mentorship, and AI-driven workflows to fast-track their careers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Track 1 */}
            {/* <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Foundation Track</h3>
              <p className="text-gray-600">
                Covers core technical skills in Java, Python, and React. Includes structured assignments and mentorship
                focused on coding standards, problem-solving, logic, and code quality.
              </p>
            </div> */}

            {/* Track 2 */}
            {/* <div className="text-center">
              <h3 className="text-xl font-bold mb-3">GenAI Mini-App Sprint</h3>
              <p className="text-gray-600">
                Participants build functional mini-applications using state-of-the-art GenAI models. Projects span one
                week—focused on solving specific real-world problems through individual projects.
              </p>
            </div> */}

            {/* Track 3 */}
            {/* <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Collaborative Project Phase</h3>
              <p className="text-gray-600">
                Final teams are formed to work on larger AI-driven solutions. This phase emphasizes collaboration,
                system design, end-to-end implementation, and improving real engineering team dynamics.
              </p>
            </div>
          </div> */}

        {/* //   <div className="flex justify-between items-center">
        //     <div className="flex items-center">
        //       <img src="/upward-bound-rocket.png" alt="Rocket Icon" className="mr-4 w-12 h-12" />
        //       <span className="font-medium">Kickstart Your AI Career</span>
        //     </div> */}
        {/* //     <a */}
        {/* //       href="/apply"
        //       className="inline-flex items-center justify-center px-6 py-3 bg-[#3A6BC5] text-white font-medium rounded-md"
        //     >
        //       Apply Today
        //     </a> */}
        {/* //   </div> */}
        {/* // </div> */}
      {/* </section> */} 

      <Footer></Footer>
    </div>
  )
}