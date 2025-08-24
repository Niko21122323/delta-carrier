import Image from "next/image";
import type { BannerProps } from "@/ts/types";
import starIconWhite from "../public/assets/icons/star-white.svg";
import heroImage from "../public/assets/pohots/hero-cta/banner.jpg";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const BannerComponent = ({ title, text }: BannerProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative z-20 pt-[250px] lg:pt-[300px] 2xl:pt-[390px] pb-4 sm:pb-12 lg:pb-20 2xl:pb-[100px]">
          <div className="flex flex-col lg:flex-row gap-y-5 lg:items-end lg:justify-between gap-10">
            <div>
              <div className="flex gap-2">
                <span className="flex items-center gap-2 text-white text-lg lg:text-xl font-medium py-2.5 max-[350px]:px-2.5 px-4 sm:px-6 rounded-md bg-white/10 border border-white/15 backdrop-blur-ld">
                  Relied on Nationwide <div className="sm:hidden">4.1</div>
                  <Image
                    src={starIconWhite}
                    alt="star icon"
                    className="sm:hidden"
                  />
                </span>
                <span className="max-sm:hidden flex items-center gap-2 text-white text-lg lg:text-xl font-medium py-2.5 px-6 rounded-md bg-white/10 border border-white/15 backdrop-blur-ld">
                  4.1
                  <Image src={starIconWhite} alt="star icon" />
                </span>
              </div>
              <h1 className="text-white max-[350px]:text-4xl text-[40px] sm:text-5xl 2xl:text-[64px] font-semibold pt-6 max-w-[887px] text-pretty">
                {title}
              </h1>
            </div>
            {text && (
              <div className="flex flex-col gap-6 lg:gap-8">
                <p className="text-white/90 max-w-[608px]">{text}</p>
                <div className="flex max-[450px]:flex-col gap-3 sm:gap-4">
                  <div className="w-full sm:w-fit">
                    <PrimaryButton text="Contact Us" link="/contact" />
                  </div>
                  <div className="w-full sm:w-fit">
                    <SecondaryButton
                      text="Learn More"
                      link="/about"
                      color="light"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={heroImage}
            alt="hero image"
            className="h-full w-full object-cover"
            placeholder="blur"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full hero-gradient z-10"></div>
      </div>
    </section>
  );
};

export default BannerComponent;
