import Image from "next/image";
import starIconWhite from "../public/assets/icons/star-white.svg";
import heroImage from "../public/assets/pohots/home/01.jpg";
import PrimaryButton from "./PrimaryButton";

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full">
				<Image
					src={heroImage}
					alt="hero image"
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full hero-gradient z-10"></div>
			<div className="relative container mx-auto px-4 lg:px-6 z-20">
				<div className="flex flex-col gap-12 pt-[490px] pb-[100px]">
					<div className="flex items-end justify-between">
						<div>
							<div className="flex gap-2">
								<span className="text-white text-xl font-medium py-2.5 px-6 rounded-md bg-white/10 border border-white/15 backdrop-blur-ld">
									Relied on Nationwide
								</span>
								<span className="flex items-center gap-2 text-white text-xl font-medium py-2.5 px-6 rounded-md bg-white/10 border border-white/15 backdrop-blur-ld">
									4.1
									<Image src={starIconWhite} alt="star icon" />
								</span>
							</div>
							<h1 className="text-white text-[64px] font-semibold pt-6 max-w-[887px]">
								Freight You Can Count On Driven by Experience.
							</h1>
						</div>
						<div className="flex flex-col gap-8">
							<p className="text-white/90 max-w-[608px]">
								Since 2013, we’ve delivered freight with precision, care, and
								reliability. As a 100% owner-operator company, we bring hands-on
								service and trusted performance to every mile.
							</p>
							<div className="flex gap-4">
								<div className="w-fit">
									<PrimaryButton text="Ship With Us" link="/contact" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
