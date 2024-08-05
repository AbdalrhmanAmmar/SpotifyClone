"use client";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface IHeader {
  children: ReactNode;
  className?: string;
}
function Header({ children, className }: IHeader) {
  //   const router = useRouter();

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6 `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button>
            <RxCaretLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
