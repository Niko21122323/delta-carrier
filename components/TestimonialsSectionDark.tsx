"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/ts/data";
import type { TestimonialsProps } from "@/ts/types";
import googleIcon from "../public/assets/icons/google.svg";
import quotesIcon from "../public/assets/icons/quotes-icon-white.svg";
import starIcon from "../public/assets/icons/star.svg";
import TitleComponent from "./TitleComponent";

const TestimonialsSectionDark = () => {
	return (
		<section className="py-12 sm:py-16 lg:py-24 overflow-hidden bg-dark">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="flex items-end justify-between gap-10 pb-6 sm:pb-8 lg:pb-12 max-lg:hidden">
					<div className="lg:flex lg:flex-shrink-0">
						<TitleComponent
							title="What Our Driver Say"
							subtitle="Testimonials"
							variant="dark"
						/>
					</div>
					<p className="text-white/70 max-w-[632px]">
						Real stories from real drivers. Here's what it's like to be part of
						Delta Carrier Group—where support, freedom, and respect come
						standard.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center pb-6 lg:hidden">
					<TitleComponent
						title="What Our Driver Say"
						position="center"
						subtitle="Testimonials"
						variant="dark"
					/>
					<p className="text-white/70 pt-4 text-center">
						Real stories from real drivers. Here's what it's like to be part of
						Delta Carrier Group—where support, freedom, and respect come
						standard.
					</p>
				</div>

				<div className="">
					<Swiper
						className="!overflow-visible"
						slidesPerView={1}
						spaceBetween={8}
						loop={true}
						centeredSlides={true}
						breakpoints={{
							500: {
								slidesPerView: 1.2,
								spaceBetween: 12,
							},
							768: {
								slidesPerView: 1.5,
							},
							1024: {
								slidesPerView: 2.6,
							},
							1280: {
								slidesPerView: 3.2,
							},
							1536: {
								slidesPerView: 4,
							},
						}}
						modules={[Autoplay]}
						autoplay={{
							delay: 3000,
						}}
					>
						{testimonials.map((testimonial: TestimonialsProps) => (
							<SwiperSlide
								key={testimonial.id}
								className="!h-auto group select-none"
							>
								<div className="relative overflow-hidden rounded-2xl border border-black/5 h-full min-h-[458px] md:min-h-[582px] flex flex-col justify-end">
									<div className="relative flex flex-col justify-between gap-10 bg-[#242424] h-full group-[.swiper-slide-active]:h-[55%] p-6 rounded-0 group-[.swiper-slide-active]:rounded-2xl z-20 transition-all duration-300 ease-in-out">
										<div className="absolute bottom-0 right-0 opacity-5">
											<Image src={quotesIcon} alt="quotes icon" />
										</div>
										<div className="relative z-10">
											<div className="flex items-center gap-2 bg-white/10 py-1.5 px-3 rounded-sm w-fit">
												<span className="text-white text-[12px]">5.0</span>
												<div className="flex items-center gap-0.5">
													<Image src={starIcon} alt="star icon" />
													<Image src={starIcon} alt="star icon" />
													<Image src={starIcon} alt="star icon" />
													<Image src={starIcon} alt="star icon" />
													<Image src={starIcon} alt="star icon" />
												</div>
											</div>
											<p className="text-white/80 pt-4 sm:pt-6">
												{testimonial.reviews}
											</p>
										</div>
										<div className="relative flex items-center gap-3 z-10">
											<div className="flex items-center justify-center rounded-md bg-white/10 border border-black/20 size-14">
												<Image src={googleIcon} alt="google icon" />
											</div>
											<div className="flex flex-col">
												<p className="text-white/90">{testimonial.name}</p>
												<p className="text-white/35">{testimonial.job}</p>
											</div>
										</div>
									</div>

									<div className="absolute top-0 left-0 w-full h-[60%]">
										<Image
											src={testimonial.image}
											alt="testimonial image"
											className="h-full w-full object-cover"
										/>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSectionDark;
