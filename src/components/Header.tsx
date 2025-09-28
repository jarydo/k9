"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pb-6 border-b border-[#DEDEDE]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6 text-[16px]">
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            onClick={() => (window.location.href = "/")}
            className="cursor-pointer"
          />
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/">About</a>
            <a href="/companies">Companies</a>
            <a href="https://careers.petsmart.com/" target="_blank">
              Startup Jobs
            </a>
            <a href="https://www.petfinder.com/" target="_blank">
              Find a Co-Furnder
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Desktop Apply Button */}
        <button
          className="hidden md:block bg-[#F26522] text-[#FFF] px-4 py-2 rounded-md cursor-pointer"
          onClick={() =>
            (window.location.href = "https://forms.gle/rzpnFDEZKDuMHwEY7")
          }
        >
          Apply
        </button>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-[16px] hover:text-[#F26522]">
              About
            </a>
            <a href="/companies" className="text-[16px] hover:text-[#F26522]">
              Companies
            </a>
            <a
              href="https://careers.petsmart.com/"
              target="_blank"
              className="text-[16px] hover:text-[#F26522]"
            >
              Startup Jobs
            </a>
            <a
              href="https://www.petfinder.com/"
              target="_blank"
              className="text-[16px] hover:text-[#F26522]"
            >
              Find a Co-Furnder
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="text-[16px] hover:text-[#F26522]"
            >
              Resources
            </a>
            <button
              className="bg-[#F26522] text-[#FFF] px-4 py-2 rounded-md cursor-pointer w-fit mt-2"
              onClick={() =>
                (window.location.href = "https://forms.gle/rzpnFDEZKDuMHwEY7")
              }
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
