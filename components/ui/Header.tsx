"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { FaHome, FaSearch } from "react-icons/fa";

interface IHeader {
  children: ReactNode;
  className?: string;
}
function Header({ children, className }: IHeader) {
  const router = useRouter();

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6 `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black items-center justify-center cursor-pointer"
          >
            <RxCaretLeft size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black items-center justify-center cursor-pointer"
          >
            <RxCaretRight size={35} />
          </button>
        </div>
        <div className="flex md:hidden  justify-between items-center gap-x-4">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <FaHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <FaSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button className="bg-transparent text-neutral-300 font-medium">
                Sign Up
              </Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2">Log in</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
