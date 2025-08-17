import { useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import TitleComponent from "@/components/TitleComponent";
import { jobs } from "@/ts/data";
import type { JobProps } from "@/ts/types";

const JobsSection = () => {
	const [activeFilter, setActiveFilter] = useState<"in-office" | "other">(
		"in-office",
	);

	const filteredJobs = jobs.filter((job: JobProps) => {
		if (activeFilter === "in-office") {
			return job.variant === "in-office";
		} else {
			return job.variant !== "in-office";
		}
	});

	return (
		<section className="py-12 sm:py-16 xl:py-[84px]">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="flex flex-col items-center justify-center pb-6 sm:pb-8 xl:pb-12">
					<TitleComponent
						title="Join Our Team"
						subtitle="Job Positions"
						position="center"
					/>
					<p className="text-body text-center max-w-[632px] py-4 lg:py-6">
						At Delta Carrier Group, we value independence, integrity, and hard
						work. Join a team that supports your goals and rewards your
						performance.
					</p>
					<div className="flex gap-1 bg-light p-1 rounded-md">
						<button
							type="button"
							onClick={() => setActiveFilter("in-office")}
							className={`rounded-md px-6 py-3 text-lg cursor-pointer transition-all duration-300 ease-in-out ${
								activeFilter === "in-office"
									? "bg-accent-light text-white font-semibold"
									: "bg-white text-body hover:bg-accent-light hover:text-white"
							}`}
						>
							In Office
						</button>
						<button
							type="button"
							onClick={() => setActiveFilter("other")}
							className={`rounded-md px-6 py-3 text-lg cursor-pointer transition-all duration-300 ease-in-out ${
								activeFilter === "other"
									? "bg-accent-light text-white font-semibold"
									: "bg-white text-body hover:bg-accent-light hover:text-white"
							}`}
						>
							Other One
						</button>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 2xl:gap-6 pt-6 sm:pt-8 lg:pt-10">
						{filteredJobs.map((job: JobProps) => (
							<div
								key={job.id}
								id={job.variant}
								className="p-4 2xl:p-8 rounded-xl md:rounded-2xl bg-light border border-[#D4D4D8] max-sm:max-w-[425px]"
							>
								<div className="flex flex-col-reverse lg:flex-row lg:items-center gap-4 pb-3">
									<h3 className="text-dark text-xl 2xl:text-2xl font-bold">
										{job.title}
									</h3>
									<span className="bg-white text-sm 2xl:text-base text-dark px-3 py-1.5 rounded-sm w-fit">
										{job.subtitle}
									</span>
								</div>
								<span className="text-sm 2xl:text-base text-body">
									{job.text}
								</span>
								<div className="flex flex-col md:flex-row gap-2 md:gap-4 pt-7">
									<div className="w-full sm:w-fit">
										<PrimaryButton text="Apply Now" link={job.link} />
									</div>
									<div className="w-full sm:w-fit">
										<SecondaryButton
											text="Read More"
											link={job.link}
											color="light"
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default JobsSection;
