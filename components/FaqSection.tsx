"use client";

import { useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { faqs } from "@/ts/data";
import type { FaqProps } from "@/ts/types";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TitleComponent from "./TitleComponent";

const FaqSection = () => {
	const [openAccordion, setOpenAccordion] = useState<number | null>(
		faqs[0]?.id || null,
	);

	const toggleAccordion = (id: number) => {
		setOpenAccordion(openAccordion === id ? null : id);
	};

	return (
		<section className="py-12 sm:py-16 lg:py-24 2xl:py-[120px]">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10 2xl:gap-20">
					<div className="">
						<TitleComponent
							title="Frequently Asked Questions At Delta Carrier"
							subtitle="Faq's"
						/>
						<p className="text-body pt-4 lg:pt-6">
							Got questions? Here are quick answers to what drivers ask most
							about working with Delta Carrier Group. If you need more details,
							our team is always here to help.
						</p>
						<div className="flex flex-col sm:flex-row gap-y-3 gap-x-4 pt-8">
							<div className="w-full sm:w-fit">
								<PrimaryButton text="Ship With Us" link="/contact" />
							</div>
							<div className="w-full sm:w-fit">
								<SecondaryButton text="Talk With Our Team" link="/contact" />
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 sm:gap-4 xl:gap-6">
						{faqs.map((faq: FaqProps) => (
							<button
								type="button"
								key={faq.id}
								onClick={() => toggleAccordion(faq.id)}
								className={`relative grid ${openAccordion === faq.id ? "grid-rows-[0.1fr_1fr]" : "grid-rows-[0.1fr_0fr]"} overflow-hidden bg-light max-md:p-4 md:px-7 md:py-6 rounded-xl border border-black/15 cursor-pointer transition-all duration-300`}
							>
								<div className="flex items-center justify-between gap-10 cursor-pointer relative z-20">
									<div className="flex max-sm:flex-col sm:items-center gap-4 w-full">
										<div className="flex items-center justify-between">
											<span
												className={`max-[374px]:text-lg text-xl xl:text-2xl font-semibold ${openAccordion === faq.id ? "text-white" : "text-dark/30"} transition-colors duration-300 ease-in-out`}
											>
												{faq.number}
											</span>
											<div
												className={`size-7 flex items-center justify-center rounded-sm ${openAccordion === faq.id ? "bg-white" : "bg-accent-light"} transition-colors duration-300 ease-in-out flex-shrink-0 sm:hidden`}
											>
												<IoChevronForwardOutline
													className={`${openAccordion === faq.id ? "rotate-90 text-accent-light" : "text-white"} transition-colors duration-300 ease-in-out`}
												/>
											</div>
										</div>

										<h3
											className={`text-left max-[374px]:text-lg text-xl xl:text-2xl font-semibold ${openAccordion === faq.id ? "text-white" : "text-dark"} transition-colors duration-300 ease-in-out`}
										>
											{faq.title}
										</h3>
									</div>
									<div
										className={`size-7 flex items-center justify-center rounded-sm ${openAccordion === faq.id ? "bg-white" : "bg-accent-light"} transition-colors duration-300 ease-in-out flex-shrink-0 max-sm:hidden`}
									>
										<IoChevronForwardOutline
											className={`${openAccordion === faq.id ? "rotate-90 text-accent-light" : "text-white"} transition-colors duration-300 ease-in-out`}
										/>
									</div>
								</div>
								<div className={`overflow-hidden relative z-20`}>
									<div
										className={`text-sm sm:text-base text-left pt-2 sm:pt-5 ${openAccordion === faq.id ? "text-white/90" : "text-body"} transition-colors duration-300 ease-in-out`}
									>
										{faq.text}
									</div>
								</div>

								<div
									className={`absolute top-0 left-0 w-full h-full accordion-gradient ${openAccordion === faq.id ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out`}
								></div>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
