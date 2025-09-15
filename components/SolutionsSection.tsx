"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import { solutionsData1, solutionsData2, solutionsData3 } from "@/ts/data";
import type { SolutionsDataProps } from "@/ts/types";
import TitleComponent from "./TitleComponent";

gsap.registerPlugin(ScrollTrigger);

const SolutionsSection = () => {
  useEffect(() => {
    gsap.set(["#grid1-img1", "#grid3-img1"], {
      x: "200%",
    });
    gsap.set(["#grid2-img3"], {
      x: "-200%",
    });
    gsap.set(["#grid1-img2", "#grid2-img2", "#grid3-img2"], {
      x: "100%",
    });
    gsap.set(["#grid2-img2"], {
      x: "-100%",
    });
    gsap.to(["#grid1-img1", "#grid1-img2"], {
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#grid1-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(["#grid2-img2", "#grid2-img3"], {
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#grid2-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(["#grid3-img1", "#grid3-img2"], {
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#grid3-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(["#mobile1-img1", "#mobile2-img1", "#mobile3-img1"], {
      x: "100%",
    });
    gsap.set(["#mobile1-img3", "#mobile2-img3", "#mobile3-img3"], {
      x: "-100%",
    });
    gsap.to(["#mobile1-img1", "#mobile1-img3"], {
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#mobile1-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(["#mobile2-img1", "#mobile2-img3"], {
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#mobile2-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(["#mobile3-img1", "#mobile3-img3"], {
      x: "0%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#mobile3-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(["#mobile1-content", "#mobile2-content", "#mobile3-content"], {
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    });
    gsap.to("#mobile1-content", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0.5,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#mobile1-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to("#mobile2-content", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0.5,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#mobile2-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to("#mobile3-content", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0.5,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#mobile3-img1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-dark py-6 sm:py-10 lg:py-16 2xl:py-[72px] overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-6 lg:gap-8 pb-4 sm:pb-6 lg:pb-10 2xl:pb-12">
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
        <div className="py-10 xl:py-16 2xl:py-20 max-md:hidden">
          <div className="grid grid-cols-5 items-center gap-2 xl:gap-4 2xl:gap-6">
            {solutionsData1.map((data: SolutionsDataProps) => (
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
                <h5 className="text-2xl xl:text-3xl text-white font-semibold pb-3 xl:pb-5">
                  Flatbed Division
                </h5>
                <p className="text-body max-w-[554px]">
                  For loads that can’t fit inside a box, our Flatbed Division
                  offers the strength and space to get the job done. From
                  building materials to heavy machinery, we specialize in
                  open-deck transport with expert load securement and route
                  planning.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 items-center gap-2 xl:gap-4 2xl:gap-6 pt-6">
            {solutionsData2.map((data: SolutionsDataProps) => (
              <div
                key={data.id}
                className="order-2 relative h-full w-full overflow-hidden rounded-xl xl:rounded-2xl even:z-20 first:z-30 last:z-10"
                id={data.elementId}
              >
                <Image
                  src={data.image}
                  alt="grid image"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="order-1 col-span-2 flex flex-col items-center justify-center">
              <div className="max-2xl:pl-4">
                <h5 className="text-2xl xl:text-3xl text-white font-semibold pb-3 xl:pb-5">
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

      <div className="py-6 md:hidden">
        <div className="min-[563px]:!container mx-auto min-[563px]:!px-4 pt-6">
          <div className="overflow-x-auto flex justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="min-w-[531px] grid grid-cols-3 gap-3">
              {solutionsData1.map((data: SolutionsDataProps) => (
                <div
                  key={data.id}
                  className="relative h-full w-full overflow-hidden rounded-xl xl:rounded-2xl even:z-30 first:z-20 last:z-10"
                  id={data.mobileId}
                >
                  <Image
                    src={data.image}
                    alt="grid image"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 pt-5">
            <div
              className="flex flex-col items-center justify-center py-2 overflow-hidden"
              id="mobile1-content"
            >
              <h5 className="text-2xl text-white font-semibold pb-3 text-center">
                Dry Van Division
              </h5>
              <p className="text-body max-w-[554px] text-center">
                Our Dry Van Division handles everything from packaged goods to
                palletized freight. With 53’ enclosed trailers and advanced
                tracking technology, we offer secure and flexible transport for
                short and long hauls across the U.S.
              </p>
            </div>
          </div>
        </div>
        <div className="min-[563px]:!container mx-auto min-[563px]:!px-4 pt-6">
          <div className="overflow-x-auto flex justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="min-w-[531px] grid grid-cols-3 gap-3">
              {solutionsData2.map((data: SolutionsDataProps) => (
                <div
                  key={data.id}
                  className="relative h-full w-full overflow-hidden rounded-xl xl:rounded-2xl even:z-30 first:z-20 last:z-10"
                  id={data.mobileId}
                >
                  <Image
                    src={data.image}
                    alt="grid image"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 pt-5">
            <div
              className="flex flex-col items-center justify-center py-2 overflow-hidden"
              id="mobile2-content"
            >
              <h5 className="text-2xl text-white font-semibold pb-3 text-center">
                Flatbed Division
              </h5>
              <p className="text-body max-w-[554px] text-center">
                For loads that can’t fit inside a box, our Flatbed Division
                offers the strength and space to get the job done. From building
                materials to heavy machinery, we specialize in open-deck
                transport with expert load securement and route planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
