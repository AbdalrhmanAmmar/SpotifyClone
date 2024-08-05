"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Box from "./ui/Box";
import { FaHome, FaSearch } from "react-icons/fa";
import SidebarItem from "./ui/SidebarItem";
import Library from "./ui/Library";

interface ISidebar {
  children: ReactNode;
}

function Sidebar({ children }: ISidebar) {
  const pathname = usePathname();
  const routes = [
    {
      icon: FaHome,
      name: "home",
      href: "/",
      active: pathname !== "search",
    },
    {
      icon: FaSearch,
      name: "Search",
      href: "/search",
      active: pathname === "search",
    },
  ];
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col space-y-2 bg-black h-full w-[300px] p-2  ">
        <Box>
          <div className="flex flex-col py-4 px-4 gap-y-4">
            {routes.map((item) => (
              <SidebarItem key={item.name} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto ">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
}

export default Sidebar;
