import Image from "next/image";
import ctaImg from "../public/assets/pohots/hero-cta/cta-banner.jpg";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TitleComponent from "./TitleComponent";

const CtaSection = () => {
	return (
		<section className="relative overflow-hidden md:rounded-2xl max-md:pt-6 md:py-16 z-30">
			<div className="absolute left-0 top-0 w-full h-full z-10 cta-gradient max-md:hidden"></div>
			<div className="absolute top-0 left-0 h-full w-full max-md:hidden">
				<Image
					src={ctaImg}
					alt="cat image"
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="relative z-20 flex md:items-center md:justify-end md:px-6 lg:pr-16">
				<div className="p-4 sm:p-6 lg:p-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/30 lg:max-w-[604px]">
					<TitleComponent
						title="Ready to Take the Wheel?"
						subtitle="Earn Confidently"
						variant="dark"
					/>
					<p className="text-white/70 pt-3 lg:pt-6 pb-6 lg:pb-9">
						Join a carrier that puts you in control. At Delta Carrier Group, you
						get the freedom to run your business—backed by real support,
						transparent pay, and nationwide opportunities.
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
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
		</section>
	);
};

export default CtaSection;
