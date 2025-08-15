import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import BannerComponent from "@/components/BannerComponent";
import TitleComponent from "@/components/TitleComponent";
import { videos } from "@/ts/data";
import type { VideoProps } from "@/ts/types";

export default function page() {
	return (
		<main>
			<BannerComponent
				title="Helpful Delta Carrier Videos"
				text="At Delta Carrier Group, every division is tailored to handle a specific kind of freight with precision, care, and efficiency. From dry vans to Conestogas, we’re structured for performance."
			/>
			<section className="py-12 sm:py-16 xl:py-[84px]">
				<div className="container mx-auto px-4 lg:px-6">
					<div className="flex flex-col items-center justify-center pb-6 sm:pb-8 xl:pb-12">
						<TitleComponent
							title="Life on the Road with Delta"
							subtitle="Videos"
							position="center"
						/>
						<p className="text-body text-center max-w-[750px] pt-4 lg:pt-6">
							See what it's like to drive with Delta Carrier Group—from
							behind-the-wheel moments to warehouse ops and on-the-road stories.
							Real drivers. Real hauls. Real results.
						</p>
					</div>
					<div className="grid max-[425px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-4 xl:gap-6">
						{videos.map((video: VideoProps) => (
							<a
								key={video.id}
								href={video.videoLink}
								className="relative rounded-lg xl:rounded-2xl overflow-hidden max-[425px]:last:col-span-1 last:col-span-2 last:sm:col-span-1 group"
							>
								<Image
									src={video.videoThumbnail}
									alt="video thumbnail"
									className="h-full w-full object-cover group-hover:blur-sm transition-all duration-300 ease-in-out"
								/>
								<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
									<BsYoutube className="text-white text-7xl group-hover:text-accent-light transition-colors duration-300 ease-in-out" />
								</div>
							</a>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
