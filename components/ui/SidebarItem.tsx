import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface IpropsLibrary {
  icon: IconType;
  name: string;
  href: string;
  active: boolean;
}

function SidebarItem({ name, href, active, icon: Icon }: IpropsLibrary) {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26} />

      <p className="truncate w-full ">{name}</p>
    </Link>
  );
}

export default SidebarItem;
