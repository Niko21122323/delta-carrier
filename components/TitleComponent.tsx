import type { TitleProps } from "@/ts/types";

const TitleComponent = ({ title, subtitle, variant, position }: TitleProps) => {
	return (
		<div
			className={`flex flex-col gap-5 ${position === "center" && "items-center justify-center"}`}
		>
			<div
				className={`w-fit px-3 py-2 border rounded-md text-base lg:text-lg font-md ${variant === "dark" ? "text-white/80 border-white/60" : "text-[#949494] border-[#949494]"} ${position === "center" && "text-center"}`}
			>
				{subtitle}
			</div>

			<h2
				className={`text-[32px] sm:text-4xl md:text-5xl xl:text-[56px] font-semibold ${variant === "dark" ? "text-white" : "text-dark"} ${position === "center" && "text-center"}`}
			>
				{title}
			</h2>
		</div>
	);
};

export default TitleComponent;
