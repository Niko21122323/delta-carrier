import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import TitleComponent from "@/components/TitleComponent";
import downloadIcon from "../public/assets/icons/downlaod.svg";
import aboutImcage from "../public/assets/pohots/home/01.jpg";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<section className="py-12 md:py-20 lg:py-24">
				<div className="container mx-auto px-4 lg:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7 lg:gap-6 xl:gap-10 2xl:gap-20">
						<div className="h-full w-full overflow-hidden rounded-2xl order-2 lg:order-1">
							<Image
								src={aboutImcage}
								alt="about section image"
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="order-1 lg:order-2">
							<TitleComponent
								title="Your Trusted Freight Partner Since 2013"
								subtitle="About Us"
							/>
							<p className="text-body pt-4 lg:pt-6 xl:pt-8">
								Delta Carrier Group is a 100% owner-operator transportation
								company committed to safety, transparency, and reliable service.
								With a versatile fleet and over a decade of experience, we move
								freight across the U.S. with professionalism and care.
							</p>
							<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center pt-6 lg:pt-12 sm:gap-y-3 max-lg:gap-x-2">
								<div className="max-sm:w-full flex flex-col sm:flex-row items-center gap-x-2 xl:gap-x-4 gap-y-3 xl:pr-4 xl:border-r border-black/15 max-sm:pb-3">
									<div className="w-full sm:w-fit">
										<PrimaryButton text="Learn More" link="/about" />
									</div>
									<div className="w-full sm:w-fit">
										<SecondaryButton text="Ship With Us" link="/contact" />
									</div>
								</div>
								<div className="w-[60%] mx-auto sm:hidden bg-black/15 h-[1px]"></div>
								<div className="w-full sm:w-fit xl:pl-4 max-sm:pt-3">
									<a
										href="#"
										className="flex items-center justify-center w-full gap-3 px-5 py-2 rounded-lg border border-black/15 bg-white hover:bg-light transition-colors duration-300 ease-in-out"
									>
										<span className="text-lg text-body font-medium">
											Download PDF
										</span>
										<Image src={downloadIcon} alt="downlaod icon" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
