import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IBox {
  children: ReactNode;
  className?: string;
}
function Box({ children, className }: IBox) {
  return (
    <div
      className={twMerge(`w-full h-fit rounded-lg bg-neutral-800 `, className)}
    >
      {children}
    </div>
  );
}

export default Box;
