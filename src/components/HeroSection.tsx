"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full">
      {/* Full-width white background section */}
      <div className="w-full bg-white relative">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Left side - Text content */}
            <div className="flex-1 flex flex-col justify-center py-12 md:pr-8 items-center md:items-start">
              <h1 className="text-3xl md:text-4xl font-bold text-[#F26522] mb-4">
                K9 Combinator
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Make something dogs want.
              </p>
              <button
                className="bg-[#F26522] text-white px-6 py-3 rounded-lg text-lg font-semibold w-fit hover:bg-[#e55a1a] transition-colors cursor-pointer"
                onClick={() =>
                  (window.location.href = "https://forms.gle/rzpnFDEZKDuMHwEY7")
                }
              >
                Apply to K9
              </button>
            </div>

            {/* Right side - Image (hidden on mobile) */}
            <div className="hidden md:block flex-1 relative">
              <Image
                src="/garry_and_sam.webp"
                alt="K9 Combinator event"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-width image extension */}
        <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/garry_and_sam.webp"
            alt="K9 Combinator event"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats overlays - centered across entire component */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="space-y-4">
            <div className="bg-[#f5f5ee] backdrop-blur-sm rounded-lg p-4 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#F26522]">11</div>
              <div className="text-sm text-gray-600">funded startups</div>
            </div>

            <div className="bg-[#f5f5ee] backdrop-blur-sm rounded-lg p-4 shadow-lg text-center">
              <div className="text-3xl font-bold text-[#F26522]">800B</div>
              <div className="text-sm text-gray-600">good boys</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
