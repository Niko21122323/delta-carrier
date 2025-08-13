"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import { solutionsData1 } from "@/ts/data";
import img1 from "../public/assets/pohots/divisions/2.jpg";
import img2 from "../public/assets/pohots/divisions/3.jpg";
import img3 from "../public/assets/pohots/divisions/4.jpg";
import TitleComponent from "./TitleComponent";

gsap.registerPlugin(ScrollTrigger);

const SolutionsSection = () => {
	useEffect(() => {
		gsap.set(["#grid1-img1"], {
			x: "200%",
		});
		gsap.set(["#grid1-img2"], {
			x: "100%",
		});

		gsap.to(["#grid1-img1", "#grid1-img2"], {
			x: "0%",
			duration: 0.5,
			ease: "power2.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: "#grid1-img2",
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section className="bg-dark py-6 sm:py-10 lg:py-16 2xl:py-[72px]">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="flex flex-col items-center justify-center gap-8 pb-12">
					<div className="max-w-[680px]">
						<TitleComponent
							title="Tailored Freight Solutions for Every Load"
							subtitle="Unified by Excellence"
							variant="dark"
							position="center"
						/>
					</div>
					<p className="text-white/60 text-center max-w-[690px]">
						Each Delta division is built to move your freight with care—dry
						vans, flatbeds, Conestogas, and more, all delivered reliably across
						the U.S.
					</p>
				</div>
				<div className="py-20">
					<div className="grid grid-cols-5 items-center gap-2 xl:gap-4 2xl:gap-6">
						{solutionsData1.map((data) => (
							<div
								key={data.id}
								className="relative h-full w-full overflow-hidden rounded-xl xl:rounded-2xl even:z-20 first:z-30 last:z-10"
								id={data.elementId}
							>
								<Image
									src={data.image}
									alt="grid image"
									className="h-full w-full object-cover"
								/>
							</div>
						))}
						<div className="col-span-2 flex flex-col items-center justify-center">
							<div className="max-2xl:pl-4">
								<h5 className="text-3xl text-white font-semibold pb-5">
									Dry Van Division
								</h5>
								<p className="text-body max-w-[554px]">
									Our Dry Van Division handles everything from packaged goods to
									palletized freight. With 53' enclosed trailers and advanced
									tracking technology, we offer secure and flexible transport
									for short and long hauls across the U.S.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SolutionsSection;
