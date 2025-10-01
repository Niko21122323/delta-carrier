"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { whyUsData } from "@/ts/data";
import type { WhyUsProps } from "@/ts/types";
import bgImage from "../public/assets/pohots/home/06.jpg";
import PrimaryButton from "./PrimaryButton";
import TitleComponent from "./TitleComponent";

const WhyUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-10 max-lg:hidden"></div>
      <div className="absolute top-0 left-0 h-full w-full max-lg:hidden">
        <Image
          src={bgImage}
          alt="background image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-20 grid grid-cols-3 grid-rows-3 max-lg:hidden">
        <div className="col-span-3 xl:col-span-1 xl:row-span-2 flex items-center py-12 xl:py-24">
          <div className="flex flex-row items-end max-xl:justify-between max-xl:w-full xl:items-start xl:flex-col xl:max-w-[465px] xl:m-auto px-6">
            <div className="max-xl:max-w-[500px]">
              <TitleComponent
                title="Why Customers Choose Delta"
                subtitle="Why Choose Us"
                variant="dark"
              />
            </div>

            <div className="">
              <p className="text-white/70 pt-6 max-xl:max-w-[500px]">
                Shippers choose Delta for reliability, clear updates, and
                hands-on support—delivered with every load.
              </p>
              <div className="w-fit pt-8">
                <PrimaryButton text="Contact Us" link="/contact" />
              </div>
            </div>
          </div>
        </div>
        {whyUsData.slice(0, 6).map((data: WhyUsProps) => (
          <div
            key={data.id}
            className={`p-6 xl:p-8 border-t border-r border-white/30 bg-white/5 backdrop-blur-md flex items-center ${data.gridClass}`}
          >
            <div className="relative py-8 max-xl:h-full max-xl:flex max-xl:flex-col max-xl:justify-center">
              <div className="absolute size-1.5 rounded-full bg-white top-0 left-0"></div>
              <div className="absolute size-1.5 rounded-full bg-white top-0 right-0"></div>
              <div className="absolute size-1.5 rounded-full bg-white bottom-0 left-0"></div>
              <div className="absolute size-1.5 rounded-full bg-white bottom-0 right-0"></div>

              <h4 className="text-white text-2xl font-bold pb-4">
                {data.title}
              </h4>
              <div className="text-sm xl:text-base text-white/70 pb-8 xl:border-b border-white/30">
                {data.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 lg:hidden z-20">
        <div className="py-6 sm:py-12">
          <TitleComponent
            title="Why Customers Choose Delta"
            subtitle="Why Choose Us"
            variant="dark"
          />
          <p className="text-white/70 pt-4">
            Shippers choose Delta for reliability, clear updates, and hands-on
            support—delivered with every load.
          </p>
          <div className="w-full sm:w-fit pt-6">
            <PrimaryButton text="Contact Us" link="/contact" />
          </div>

          <div className="pt-8">
            <Swiper
              className="!overflow-visible"
              slidesPerView={1.1}
              spaceBetween={12}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                550: {
                  slidesPerView: 1.4,
                },
                768: {
                  slidesPerView: 1.8,
                },
                900: {
                  slidesPerView: 2.2,
                },
              }}
            >
              {whyUsData.map((data: WhyUsProps) => (
                <SwiperSlide key={data.id} className="!h-auto cursor-grab">
                  <div className="p-4 border border-white/30 bg-white/5 backdrop-blur-md rounded-lg h-full">
                    <div className="relative py-6 h-full flex flex-col justify-center">
                      <div className="absolute size-1.5 rounded-full bg-white top-0 left-0"></div>
                      <div className="absolute size-1.5 rounded-full bg-white top-0 right-0"></div>
                      <div className="absolute size-1.5 rounded-full bg-white bottom-0 left-0"></div>
                      <div className="absolute size-1.5 rounded-full bg-white bottom-0 right-0"></div>
                      <h4 className="text-white text-xl font-bold pb-3">
                        {data.title}
                      </h4>
                      <div className="text-sm xl:text-base text-white/70 pb-6 border-b border-white/30">
                        {data.text}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
