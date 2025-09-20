"use client";

import type { PrimaryButtonProps } from "@/ts/types";

const SecondaryButton = ({ link, text, color, target }: PrimaryButtonProps) => {
  return (
    <a
      target={target}
      href={link}
      className={`relative overflow-hidden px-5 py-2.5 flex items-center justify-center w-full rounded-lg border border-black/15 hover:border-accent-dark transition-colors duration-300 ease-in-out ${
        color === "light" ? "bg-white" : "bg-light"
      } group`}
    >
      <div
        className={`absolute bottom-0 left-0 w-full h-0 bg-accent-dark group-hover:h-full transition-all duration-300 ease-in-out`}
      ></div>
      <span className="relative z-10 text-dark text-lg font-medium group-hover:text-white transition-colors duration-300 ease-in-out">
        {text}
      </span>
    </a>
  );
};

export default SecondaryButton;
