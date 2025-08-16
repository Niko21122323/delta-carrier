import Image from "next/image";
import BannerComponent from "@/components/BannerComponent";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import TitleComponent from "@/components/TitleComponent";
import shippingIcon3 from "../../../public/assets/icons/calendar.svg";
import includingIcon1 from "../../../public/assets/icons/cart.svg";
import includingIcon4 from "../../../public/assets/icons/chip.svg";
import includingIcon2 from "../../../public/assets/icons/food.svg";
import shippingIcon1 from "../../../public/assets/icons/location.svg";
import shippingIcon2 from "../../../public/assets/icons/person.svg";
import includingIcon3 from "../../../public/assets/icons/stac.svg";
import shippingIcon4 from "../../../public/assets/icons/usa.svg";
import serviceImage3 from "../../../public/assets/pohots/service/01.jpg";
import serviceImage2 from "../../../public/assets/pohots/service/02.jpg";
import serviceImage1 from "../../../public/assets/pohots/service/03.jpg";

const includingData = [
	{
		id: 1,
		icon: includingIcon1,
		title: "Retail and consumer goods",
		text: "We deliver boxed and palletized retail items safely and on time.",
	},
	{
		id: 2,
		icon: includingIcon2,
		title: "Non-perishable food and beverage products",
		text: "Dry goods and packaged drinks stay secure in our enclosed trailers.",
	},
	{
		id: 3,
		icon: includingIcon3,
		title: "Building materials and packaged supplies",
		text: "We move packaged construction materials with protection from the elements.",
	},
	{
		id: 4,
		icon: includingIcon4,
		title: "Electronics, paper products, and more",
		text: "Sensitive goods are handled with care to ensure safe, stable delivery.",
	},
];

const shippingData = [
	{
		id: 1,
		icon: shippingIcon1,
		title: "Real-Time Tracking",
		text: "Our 53' dry vans are tech-equipped for real-time visibility, so you always know where your freight is.",
	},
	{
		id: 2,
		icon: shippingIcon2,
		title: "Professional, Dedicated Drivers",
		text: "Every load is handled by experienced owner-operators who take pride in delivering safely and on time.",
	},
	{
		id: 3,
		icon: shippingIcon3,
		title: "Flexible & Reliable Scheduling",
		text: "We offer adaptable pickup and delivery windows, supported by 24/5 dispatch and Saturday availability.",
	},
	{
		id: 4,
		icon: shippingIcon4,
		title: "Nationwide Reach",
		text: "From coast to coast, we provide consistent, dependable service across all 48 contiguous states.",
	},
];

const page = () => {
	return (
		<main>
			<BannerComponent
				title="Dry Van Freight"
				text="At Delta Carrier Group, our Dry Van Division delivers secure, flexible freight solutions for all types of general cargo. Our 53' enclosed trailers ensure your goods move safely—with the support and professionalism you can count on."
			/>
			<section className="py-12 md:py-20 lg:py-24">
				<div className="container mx-auto px-4 lg:px-6">
					<div className="grid lg:grid-cols-12">
						<div className="lg:col-span-7">
							<div className="">
								<TitleComponent
									title="What Is Dry Van Freight?"
									subtitle="Dry Van Freight"
								/>
								<p className="text-body py-6">
									Dry van freight refers to fully enclosed, non-refrigerated
									trailers ideal for general cargo. It's the most common and
									cost-effective option for protecting goods from weather,
									debris, and theft during transport.
								</p>
								<div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
									<div className="w-full sm:w-fit">
										<PrimaryButton text="Ship With Us" link="/contact" />
									</div>
									<div className="w-full sm:w-fit">
										<SecondaryButton
											text="Talk With Our Team"
											link="/contact"
										/>
									</div>
								</div>

								<div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
									<Image
										src={serviceImage1}
										alt="service image"
										className="h-full w-full object-cover"
									/>
								</div>

								<div className="">
									<h3 className="text-3xl md:text-4xl xl:text-5xl text-dark font-semibold pb-4">
										What We Haul
									</h3>
									<p className="text-body">
										Our dry vans are equipped to handle a wide range of freight.
										Whether it's a full truckload (FTL) or part of a larger
										logistics plan, we customize every haul to meet your needs.
									</p>
									<h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6">
										All of that including
									</h4>
									<div className="flex flex-col gap-4">
										{includingData.map((data) => (
											<div key={data.id} className="flex items-center gap-3">
												<div className="flex items-center justify-center flex-shrink-0 size-[52px] bg-light border border-black/5 rounded-lg">
													<Image src={data.icon} alt="icon" />
												</div>
												<div className="">
													<h6 className="text-xl text-dark font-semibold pb-1">
														{data.title}
													</h6>
													<p className="text-body">{data.text}</p>
												</div>
											</div>
										))}
									</div>
									<div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
										<div className="w-full sm:w-fit">
											<PrimaryButton text="Ship With Us" link="/contact" />
										</div>
										<div className="w-full sm:w-fit">
											<SecondaryButton
												text="Talk With Our Team"
												link="/contact"
											/>
										</div>
									</div>
								</div>

								<div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
									<Image
										src={serviceImage2}
										alt="service image"
										className="h-full w-full object-cover"
									/>
								</div>

								<div className="">
									<h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6">
										Why Choose Delta for Dry Van Shipping?
									</h4>

									<p className="text-body">
										We understand that reliability and communication matter most
										when it comes to freight. That's why we offer:
									</p>

									<div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-8">
										{shippingData.map((data) => (
											<div
												key={data.id}
												className="bg-light border border-black/15 rounded-xl p-3 md:p-4"
											>
												<div className="flex items-center justify-center flex-shring-0 size-12 bg-white rounded-md border border-black/15">
													<Image src={data.icon} alt="icon" />
												</div>
												<h5 className="text-dark text-xl font-medium pt-3 pb-2">
													{data.title}
												</h5>
												<p className="text-body">{data.text}</p>
											</div>
										))}
									</div>
									<div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
										<div className="w-full sm:w-fit">
											<PrimaryButton text="Ship With Us" link="/contact" />
										</div>
										<div className="w-full sm:w-fit">
											<SecondaryButton
												text="Talk With Our Team"
												link="/contact"
											/>
										</div>
									</div>
								</div>

								<div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
									<Image
										src={serviceImage3}
										alt="service image"
										className="h-full w-full object-cover"
									/>
								</div>

								<div className="">
									<h3 className="text-3xl md:text-4xl xl:text-5xl text-dark font-semibold pb-4">
										Who We Serve
									</h3>
									<p className="text-body">
										From small businesses to enterprise-level shippers, we work
										with clients who need dependable, on-time service. Our dry
										van division is perfect for recurring shipments, dedicated
										lanes, or one-time loads that require secure handling and
										seamless coordination. We operate across all 48 contiguous
										U.S. states, ensuring your freight moves efficiently coast
										to coast with a trusted partner at the wheel.
									</p>
									<div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
										<div className="w-full sm:w-fit">
											<PrimaryButton text="Ship With Us" link="/contact" />
										</div>
										<div className="w-full sm:w-fit">
											<SecondaryButton
												text="Talk With Our Team"
												link="/contact"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="max-lg:hidden lg:col-span-4 col-start-9"></div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default page;
