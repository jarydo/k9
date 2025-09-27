"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center pb-6 border-b border-[#DEDEDE]">
      <div className="flex items-center gap-6 text-[16px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer"
        />
        <a href="/">About</a>
        <a href="/companies">Companies</a>
        <a href="https://careers.petsmart.com/" target="_blank">
          Startup Jobs
        </a>
        <a href="https://www.petfinder.com/" target="_blank">
          Find a Co-Furnder
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          Resources
        </a>
      </div>
      <button
        className="bg-[#F26522] text-[#FFF] px-4 py-2 rounded-md cursor-pointer"
        onClick={() =>
          (window.location.href = "https://forms.gle/rzpnFDEZKDuMHwEY7")
        }
      >
        Apply
      </button>
    </div>
  );
}
