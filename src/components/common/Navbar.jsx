"use client";
import { useState, useEffect } from "react";
import logo from "../../assets/About/logo.png";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full py-4 px-6 transition-all duration-300
        ${
          scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-[#ffffffc4]"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={logo || "/placeholder.svg"}
            alt="Think41 Logo"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden md:flex space-x-8">
          <a
            href="/about-us"
            className="text-[16px] font-medium text-black relative group"
          >
            About us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </a>

          <div
            className="relative"
            onMouseLeave={() => setIsOfferingsOpen(false)}
          >
            <button
              className="text-[16px] font-medium text-black flex items-center group"
              onClick={() => setIsOfferingsOpen(!isOfferingsOpen)}
              onMouseEnter={() => setIsOfferingsOpen(true)}
            >
              Offerings <ChevronDown className="ml-1 h-4 w-4" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>

            <div
              className={`absolute top-full left-0  bg-white rounded shadow-lg py-2 w-64 z-20 transition-opacity duration-200
                ${
                  isOfferingsOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
            >
              <a
                href="/ai-solutions"
                className="flex items-center justify-between px-4 py-3 text-[16px] text-gray-800 hover:bg-gray-100 group/item"
              >
                AI Solutions
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover/item:rotate-[-45deg]" />
              </a>
              <a
                href="/ai-platforms"
                className="flex items-center justify-between px-4 py-3 text-[16px] text-gray-800 hover:bg-gray-100 group/item"
              >
                AI Platforms
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform duration-300" />
              </a>
              <a
                href="/ai-engineering"
                className="flex items-center justify-between px-4 py-3 text-[16px] text-gray-800 hover:bg-gray-100 group/item"
              >
                AI Engineering
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform duration-300 group-hover/item:rotate-45" />
              </a>
            </div>
          </div>

          <a
            href="/careers"
            className="text-[16px] font-medium text-black relative group"
          >
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/blogs"
            className="text-[16px] font-medium text-black relative group"
          >
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/contact-us"
            className="text-[16px] font-medium text-black relative group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
      </div>
    </header>
  );
}
