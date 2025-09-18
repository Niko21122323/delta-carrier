import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import PrimaryButton from "@/components/PrimaryButton";
import RequirementsSection from "@/components/RequirementsSection";
import SecondaryButton from "@/components/SecondaryButton";
import PrimaryButtonArrow from "@/components/svgComponents/PrimaryButtonArrow";
import TestimonialsSectionWhite from "@/components/TestimonialsSectionWhite";
import TitleComponent from "@/components/TitleComponent";
import WhyUsSection from "@/components/WhyUsSection";
import { services } from "@/ts/data";
import downloadIcon from "../public/assets/icons/downlaod.svg";
import aboutImcage from "../public/assets/pohots/gallery/01.jpg";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7 lg:gap-6 xl:gap-10 2xl:gap-20">
            <div className="h-full w-full overflow-hidden rounded-2xl order-2 lg:order-1">
              <Image
                src={aboutImcage}
                alt="about section image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <TitleComponent
                title="Your Trusted Freight Partner Since 2013"
                subtitle="About Us"
              />
              <p className="text-body pt-4 lg:pt-6 xl:pt-8">
                Delta Carrier Group is a 100% owner-operator transportation
                company committed to safety, transparency, and reliable service.
                With a versatile fleet and over a decade of experience, we move
                freight across the U.S. with professionalism and care.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center pt-6 lg:pt-12 sm:gap-y-3 max-lg:gap-x-2">
                <div className="max-sm:w-full flex flex-col sm:flex-row items-center gap-x-2 xl:gap-x-4 gap-y-3 max-sm:pb-3">
                  <div className="w-full sm:w-fit">
                    <PrimaryButton text="Learn More" link="/about-us" />
                  </div>
                  <div className="w-full sm:w-fit">
                    <a
                      href="https://deltacarriergroup.com/packet.pdf"
                      target="_blank"
                      className="flex items-center justify-center w-full gap-3 px-5 py-2 rounded-lg border border-black/15 bg-white hover:bg-light transition-colors duration-300 ease-in-out"
                    >
                      <span className="text-lg text-body font-medium">
                        Our carrier packet
                      </span>
                      <Image src={downloadIcon} alt="downlaod icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark py-6 sm:py-10 lg:py-16 2xl:py-[72px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-end gap-y-4 pb-6 sm:pb-12">
            <div className="lg:col-span-5">
              <TitleComponent
                title="Freight Services Offered"
                subtitle="Our Services"
                variant="dark"
              />
            </div>

            <p className="text-white/80 lg:col-span-5 lg:col-start-8">
              At Delta Carrier Group, we do more than haul freight—we deliver
              trust. As a 100% owner-operator company, we lead with integrity,
              real support, and a commitment to the people who keep us moving.
            </p>
          </div>
          <div className="grid sm:col-span-4 lg:grid-cols-2 gap-3 xl:gap-6">
            {services.map((service) => (
              <Link
                href={service.link}
                key={service.id}
                className="relative overflow-hidden rounded-xl md:rounded-2xl max-lg:max-h-[344px] max-h-[500px] group"
              >
                <Image
                  src={service.image}
                  alt="service image"
                  className="h-full w-full object-cover"
                />
                <div className="absolute z-10 bottom-0 left-0 w-full p-2 sm:p-3">
                  <div className="flex flex-col px-3 xl:px-5 py-3 xl:py-[18px] rounded-xl bg-white/5 backdrop-blur-xl border border-white/30">
                    <div className="flex items-center justify-between gap-6">
                      <h4 className="text-white text-lg xl:text-xl 2xl:text-2xl font-semibold">
                        {service.title}
                      </h4>
                      <div className="flex items-center justify-center size-7 rounded-sm bg-accent-light lg:bg-white group-hover:bg-accent-light transition-colors duration-300 ease-in-out">
                        <PrimaryButtonArrow color="fill-white lg:fill-accent-light lg:rotate-45 group-hover:rotate-0 group-hover:fill-white transition-all duration-300 ease-in-out" />
                      </div>
                    </div>
                    <div className="grid lg:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pt-3">
                          <span className="text-white/80 text-sm sm:text-base">
                            {service.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WhyUsSection />
      <TestimonialsSectionWhite />
      <RequirementsSection />
      <FaqSection />
    </main>
  );
}
