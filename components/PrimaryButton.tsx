import Image from "next/image";
import type { PrimaryButtonProps } from "@/ts/types";
import arrowIconWhite from "../public/assets/icons/arrow-white.svg";
import PrimaryButtonArrow from "./svgComponents/PrimaryButtonArrow";

const PrimaryButton = ({ link, text }: PrimaryButtonProps) => {
	return (
		<a
			href={link}
			className="relative flex items-center justify-center w-full gap-2.5 sm:gap-4 p-2 rounded-lg primary-button-gradient overflow-hidden border border-accent-dark hover:border-white transition-colors duration-300 ease-in-out group"
		>
			<span className="relative text-white text-lg font-semibold pl-3 z-10 group-hover:text-accent-light transition-colors duration-300 ease-in-out">
				{text}
			</span>
			<div className="relative flex items-center justify-center size-8 bg-white rounded-md overflow-hidden z-10 max-sm:hidden">
				<div className="absolute bottom-0 left-0 bg-accent-light w-full h-0 group-hover:h-full transition-all duration-300 ease-in-out"></div>
				<PrimaryButtonArrow color="relative z-10 fill-accent-light group-hover:fill-white group-hover:rotate-45 transition-all duration-300 ease-in-out" />
			</div>
			<Image src={arrowIconWhite} alt="arrow icon" className="sm:hidden" />
			<div className="absolute bg-white bottom-0 left-0 w-full h-0 group-hover:h-full transition-all duration-300 ease-in-out"></div>
		</a>
	);
};

export default PrimaryButton;
