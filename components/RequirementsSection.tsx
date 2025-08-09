"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { jobRequirements } from "@/ts/data";
import type { JobRequirementsProps } from "@/ts/types";
import img3 from "../public/assets/pohots/home/07.jpg";
import img2 from "../public/assets/pohots/home/08.jpg";
import img1 from "../public/assets/pohots/home/09.jpg";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TitleComponent from "./TitleComponent";

gsap.registerPlugin(ScrollTrigger);

const RequirementsSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const requirementsRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const requirementItems =
			requirementsRef.current?.querySelectorAll(".requirement-item");

		if (!requirementItems) return;

		requirementItems.forEach((item) => {
			const titleElement = item.querySelector("h4");
			const textElement = item.querySelector("span");
			let hasBeenActivated = false;

			ScrollTrigger.create({
				trigger: item,
				start: "bottom 80%",
				end: "top -100%",
				onEnter: () => {
					if (!hasBeenActivated) {
						item.classList.remove("border-white/20");
						item.classList.add("border-accent-light");
						titleElement?.classList.remove("text-white/50");
						titleElement?.classList.add("text-white");
						textElement?.classList.remove("text-white/30");
						textElement?.classList.add("text-white/70");
						hasBeenActivated = true;
					}
				},
				onLeaveBack: () => {
					if (hasBeenActivated) {
						item.classList.remove("border-accent-light");
						item.classList.add("border-white/20");
						titleElement?.classList.remove("text-white");
						titleElement?.classList.add("text-white/50");
						textElement?.classList.remove("text-white/70");
						textElement?.classList.add("text-white/30");
						hasBeenActivated = false;
					}
				},
			});
		});
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-dark py-6 sm:py-10 ld:py-16 xl:py-[72px]"
		>
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7 lg:gap-6 xl:gap-10 2xl:gap-20">
					<div className="grid grid-cols-2 gap-6 order-2 lg:order-1 h-full w-full max-lg:hidden">
						<div className="h-full w-full rounded-2xl overflow-hidden">
							<Image
								src={img1}
								alt="requirements image"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="h-full w-full rounded-2xl overflow-hidden">
							<Image
								src={img2}
								alt="requirements image"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="h-full w-full rounded-2xl overflow-hidden col-span-2">
							<Image
								src={img3}
								alt="requirements image"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<TitleComponent
							title="Requirements to Join"
							subtitle="Want to join?"
							variant="dark"
						/>
						<p className="text-white/70 pt-4 lg:pt-8 pb-5 md:pb-7">
							At Delta Carrier Group, we partner with experienced, independent
							professionals who are ready to run on their own terms. To maintain
							our high standards and strong reputation, we require the
							following:
						</p>
						<div
							className="border-t border-white/30 pt-5 md:pt-8"
							ref={requirementsRef}
						>
							{jobRequirements.map((requirement: JobRequirementsProps) => (
								<div
									key={requirement.id}
									className="requirement-item pb-6 last:pb-0 pl-3 sm:pl-4 xl:pl-7 border-l-2 border-white/20 transition-colors duration-300"
								>
									<h4 className="max-[374px]:text-lg text-xl xl:text-2xl text-white/50 font-semibold pb-2 transition-colors duration-300">
										{requirement.title}
									</h4>
									<span className="text-sm md:text-base text-white/30 transition-colors duration-300">
										{requirement.text}
									</span>
								</div>
							))}
						</div>
						<div className="flex flex-col sm:flex-row gap-y-3 gap-x-4 pt-8 lg:pt-12">
							<div className="w-full sm:w-fit">
								<PrimaryButton text="Ship With Us" link="/contact" />
							</div>
							<div className="w-full sm:w-fit">
								<SecondaryButton
									text="Talk With Our Team"
									link="/contact"
									color="light"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequirementsSection;
