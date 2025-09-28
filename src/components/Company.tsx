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
  isFirst?: boolean;
  isLast?: boolean;
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
  isFirst = false,
  isLast = false,
}: CompanyProps) {
  const handleClick = () => {
    window.location.href = link;
  };

  const getRoundedCorners = () => {
    if (isFirst && isLast) {
      return "rounded-[12px]"; // Only one item, round all corners
    } else if (isFirst) {
      return "rounded-t-[12px]"; // First item, round top corners
    } else if (isLast) {
      return "rounded-b-[12px]"; // Last item, round bottom corners
    }
    return ""; // Middle items, no rounding
  };

  return (
    <div
      className={`flex gap-4 p-4 bg-[#FDFDF8] hover:bg-[#FFF] hover:cursor-pointer items-center border-l border-r border-b border-[#BFBFBF] first:border-t ${getRoundedCorners()}`}
      onClick={handleClick}
    >
      <Image src={image} alt={name} width={100} height={100} />
      <div className="flex flex-col gap-[1px]">
        <div className="flex gap-2 items-baseline">
          <p className="font-bold text-[18px]">{name}</p>
          <p className="text-[12px]">{location}</p>
        </div>
        <p className="text-[14px] mb-2">{description}</p>
        <div className="flex gap-2 flex-wrap">
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
