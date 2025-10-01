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
              <div className="aspect-video" key={video.id}>
                <iframe
                  width="100%"
                  height="100%"
                  src={video.videoLink}
                  title="Delta Carrier Group Permit Book"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
