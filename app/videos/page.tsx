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
        title="Helpful Videos"
        text="At Delta Carrier Group, every division is tailored to handle a specific kind of freight with precision, care, and efficiency. From dry vans to Conestogas, we’re structured for performance."
      />
      <section className="py-12 sm:py-16 xl:py-[84px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center justify-center pb-6 sm:pb-8 xl:pb-12">
            <TitleComponent
              title="Driver Tutorials"
              subtitle="Videos"
              position="center"
            />
            <p className="text-body text-center max-w-[750px] pt-4 lg:pt-6">
              Welcome to your one-stop training hub. This page is built for
              drivers, with short, easy-to-follow videos that walk you through
              everything you need on the road.
            </p>
            <p className="text-body text-center max-w-[750px] pt-4 lg:pt-6">
              Here you’ll find step-by-step guides on:
            </p>
            <p className="text-body text-center max-w-[1100px] pt-2">
              How to use Omnitracs to confirm and manage loads, submitting your
              BOLs quickly and correctly, making the most of the FuelBook app,
              understanding your permit book, following split sleeper berth
              rules (7+3, 8+2), and using Drivewyze PreClear for weigh station
              bypasses. Every video is designed to be clear, practical, and
              right to the point — so you can learn fast and keep moving.
              Whether you’re new or experienced, these tutorials are here to
              help you stay efficient, safe, and confident behind the wheel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 lg:gap-4 xl:gap-6">
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
