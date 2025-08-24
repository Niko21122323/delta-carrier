import Image from "next/image";
import { heroValues } from "@/ts/data";
import starIconWhite from "../public/assets/icons/star-white.svg";
import heroImage from "../public/assets/pohots/hero-cta/hero.jpg";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden">
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
        <div className="relative container mx-auto px-4 lg:px-6 z-20">
          <div className="flex flex-col gap-12 pt-[233px] lg:pt-[390px] 2xl:pt-[490px] pb-4 sm:pb-10 lg:pb-20 2xl:pb-[100px]">
            <div className="flex flex-col lg:flex-row gap-y-5 lg:items-end lg:justify-between">
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
                  Freight You Can Count On Driven by Experience.
                </h1>
              </div>
              <div className="flex flex-col gap-6 lg:gap-8">
                <p className="text-white/90 max-w-[608px]">
                  Since 2013, we’ve delivered freight with precision, care, and
                  reliability. As a 100% owner-operator company, we bring
                  hands-on service and trusted performance to every mile.
                </p>
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
            </div>

            <div className="grid grid-cols-4 gap-6 max-lg:hidden">
              {heroValues.map((value) => (
                <div
                  key={value.id}
                  className="relative overflow-hidden pt-6 border-t-2 border-white/20 hover:border-white transition-colors duration-300 ease-in-out group"
                >
                  <div className="absolute top-0 left-0 w-full h-0 hero-value-gradient group-hover:h-full transition-all duration-300 ease-in-out"></div>

                  <div className="relative flex flex-col gap-2 z-10">
                    <div className="flex items-center justify-center size-10 rounded-md bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white transition-colors duration-300 ease-in-out">
                      <value.icon color="fill-white/50 group-hover:fill-accent-light transition-colors duration-300 ease-in-out" />
                    </div>

                    <h4 className="pt-2 text-white/50 text-lg 2xl:text-xl font-semibold group-hover:text-white transition-colors duration-300 ease-in-out max-xl:max-w-[180px]">
                      {value.title}
                    </h4>
                    <div className="text-white/40 group-hover:text-white/80 text-sm xl:text-base transition-colors duration-300 ease-in-out">
                      {value.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 lg:hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {heroValues.map((value) => (
              <div
                key={value.id}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-light rounded-lg border border-black/10 max-sm:max-w-[425px] max-sm:mx-auto"
              >
                <div className="flex items-center justify-center size-10 bg-accent-light rounded-md">
                  <value.icon color="fill-white" />
                </div>
                <h4 className="text-dark text-xl text-center font-medium pt-2">
                  {value.title}
                </h4>
                <p className="text-body text-center">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
