import React from 'react'
import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react"
import think41logo from "../../assets/Common/think41logo.png"

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#0A0F36] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">SITEMAP</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about-us" className="text-gray-300 hover:text-white text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="text-gray-300 hover:text-white text-sm">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="/work-with-us" className="text-gray-300 hover:text-white text-sm">
                    Work with Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="text-gray-300 hover:text-white text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-300 hover:text-white text-sm">
                    Terms of Use & Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">CONTACT</h3>
              <p className="text-gray-300 text-sm mb-2">Email: contact@think3ai.com</p>
              <p className="text-gray-300 text-sm mb-4">Location: New York, Bengaluru</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 Think41 - All rights reserved.</p>
            <img src={think41logo} alt="Think41 Logo" className="h-10 w-auto" />
          </div>
        </div>
      </footer>
    </div>
  )
}
