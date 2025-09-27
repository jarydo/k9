"use client";
import Image from "next/image";

interface CompanyProps {
  image: string;
  name: string;
  link: string;
  description: string;
  category: string;
  subcategory: string;
  location: string;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#E6E6DD] rounded-[4px] px-2 py-1 capitalize font-light tracking-[0.1em] text-[10px]">
      {children}
    </div>
  );
}

export default function Company({
  image,
  name,
  link,
  description,
  category,
  subcategory,
  location,
}: CompanyProps) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="flex gap-4 p-4 bg-[#FDFDF8] hover:bg-[#FFF] hover:cursor-pointer items-center border-l border-r border-b border-[#BFBFBF] first:border-t"
      onClick={handleClick}
    >
      <Image src={image} alt={name} width={100} height={100} />
      <div className="flex flex-col gap-[1px]">
        <div className="flex gap-2 items-baseline">
          <p className="font-bold text-[18px]">{name}</p>
          <p className="text-[12px]">{location}</p>
        </div>
        <p className="text-[14px] mb-2">{description}</p>
        <div className="flex gap-2">
          <Pill>
            <span className="capitalize flex gap-2 items-center">
              <Image src="/logo.svg" alt="logo" width={16} height={16} /> FALL
              2025
            </span>
          </Pill>
          <Pill>{category}</Pill>
          <Pill>{subcategory}</Pill>
        </div>
      </div>
    </div>
  );
}
