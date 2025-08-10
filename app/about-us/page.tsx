import Image from "next/image";
import BannerComponent from "@/components/BannerComponent";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import TitleComponent from "@/components/TitleComponent";
import deliverImg1 from "../../public/assets/pohots/about-us/1.jpg";
import deliverImg2 from "../../public/assets/pohots/about-us/2.jpg";

export default function About() {
	return (
		<main>
			<BannerComponent
				title="About Delta Carrier Group"
				text="At Delta Carrier Group, we’re driven by purpose—not just miles. As a 100% owner-operator company, we lead with trust, transparency, and a commitment to doing things the right way."
			/>
			<section className="py-6 sm:py-12 md:py-16 lg:py-24">
				<div className="container mx-auto px-4 lg:px-6">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-4 2xl:gap-6">
						<div className="h-full w-full rounded-2xl overflow-hidden md:col-span-4 lg:col-span-3 min-[1719px]:!col-span-4 order-2 md:order-1">
							<Image
								src={deliverImg1}
								alt="deliver image"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="bg-light rounded-2xl p-4 lg:p-6 xl:p-8 md:col-span-8 lg:col-span-6 min-[1719px]:!col-span-4 order-1 md:order-2">
							<TitleComponent
								title="Driven to Deliver, Committed to You"
								subtitle="Built for the Long Haul"
							/>
							<p className="text-body pt-6">
								Delta Carrier Group is a proudly independent, 100%
								owner-operator transportation company based in Rockdale, IL.
								Since 2013, we’ve specialized in delivering flexible, safe, and
								professional freight solutions across the continental U.S. We’re
								more than just a carrier—we’re a trusted partner built on
								transparency, accountability, and a commitment to excellence at
								every mile.
							</p>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8">
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
						<div className="h-full w-full rounded-2xl overflow-hidden col-span-3 min-[1719px]:!col-span-4 max-lg:hidden order-3">
							<Image
								src={deliverImg2}
								alt="deliver image"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
