import { differences } from "@/ts/data";
import type { DifferencesProps } from "@/ts/types";
import TitleComponent from "./TitleComponent";

const OurDriveSection = () => {
	return (
		<section className="bg-dark py-6 sm:py-10 lg:py-16 2xl:py-[72px]">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-10 pb-6 sm:pb-10 xl:pb-12">
					<div className="flex lg:flex-shrink-0">
						<TitleComponent
							title="What Drives Us"
							subtitle="The Delta Difference"
							variant="dark"
						/>
					</div>

					<p className="text-white/60 max-w-[777px]">
						At Delta Carrier Group, our values drive every decision we make—from
						how we treat our drivers to how we serve our customers. We're built
						on transparency, driven by experience, and committed to giving
						owner-operators the freedom and support they deserve.
					</p>
				</div>
				<div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none">
					<div className="grid grid-cols-12 grid-rows-2 min-w-[1280px]">
						{differences.map((difference: DifferencesProps) => (
							<div
								key={difference.id}
								className={`relative py-6 sm:py-8 lg:py-10 xl:py-12 pl-6 ${difference.id <= 4 && "border-b border-white/35"} ${difference.number ? "col-span-4 xl:col-span-3" : "col-span-2 xl:col-span-3"}`}
							>
								{difference.number && (
									<div className="absolute top-0 left-[3px] w-[1px] h-full">
										<div className="grid grid-rows-9 gap-2 w-full h-full">
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
											<div className="bg-light/50"></div>
										</div>
									</div>
								)}
								{difference.number && (
									<div
										className={`absolute size-2 rounded-full bg-light ${difference.id === 1 || difference.id === 3 ? "-bottom-1 left-0" : ""} ${difference.id === 6 || difference.id === 8 ? "-top-1 left-0" : ""}`}
									></div>
								)}
								<h4 className="text-xl xl:text-2xl font-semibold text-white pb-3 sm:pb-4">
									<span className="text-accent-light pr-2">
										{difference.number}
									</span>
									{difference.title}
								</h4>
								<p className="text-white/75">{difference.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurDriveSection;
