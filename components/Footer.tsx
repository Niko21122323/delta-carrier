import Image from "next/image";
import { socials } from "@/ts/data";
import logo from "../public/assets/logo/logo.png";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
	return (
		<footer className="relative overflow-hidden">
			<div className="relative container mx-auto px-4 lg:px-6 z-20">
				<div className="flex items-start justify-baseline pt-16 pb-10">
					<div className="">
						<Image src={logo} alt="company logo" className="max-w-20 h-auto" />
						<p className="text-white/70 max-w-[604px] pt-6">
							Delta Carrier Group is committed to delivering freight with
							integrity, safety, and support. As a 100% owner-operator company,
							we put drivers first and deliver dependable service coast to
							coast.
						</p>
						<div className="flex items-center gap-5 pt-8">
							<div className="w-full sm:w-fit">
								<PrimaryButton text="Ship With Us" link="/contact" />
							</div>
							<div className="h-8 w-[1px] bg-white/15"></div>
							<div className="flex items-center gap-3">
								{socials.map((social) => (
									<a
										key={social.id}
										href={social.link}
										target="_blank"
										className="size-12 flex items-center justify-center rounded-md bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-accent-light transition-colors duration-300 ease-in-out"
									>
										<Image src={social.icon} alt="social icon" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className=""></div>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-full bg-dark"></div>
		</footer>
	);
};

export default Footer;
