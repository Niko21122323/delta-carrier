"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  findUsLinksFooter,
  quickLinks,
  serviceLinksFooter,
  socials,
} from "@/ts/data";
import type { FooterLinkProps } from "@/ts/types";
import logo from "../public/assets/logo/logo.png";
import CtaSection from "./CtaSection";
import CtaSectionMobile from "./CtaSectionMobile";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <CtaSectionMobile />
      <footer className="relative overflow-hidden max-md:bg-dark">
        <div className="relative container mx-auto px-4 lg:px-6 z-20">
          <CtaSection />
          <div className="flex flex-col lg:flex-row items-start lg:justify-between pt-8 md:pt-16 pb-10 border-b border-white/30 gap-12 lg:gap-20">
            <div className="">
              <Image
                src={logo}
                alt="company logo"
                className="max-w-20 h-auto"
              />
              <p className="text-white/70 lg:max-w-[300px] xl:max-w-[604px] pt-6">
                Delta Carrier Group is committed to delivering freight with
                integrity, safety, and support. As a 100% owner-operator
                company, we put drivers first and deliver dependable service
                coast to coast.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-5 pt-6 sm:pt-8">
                <div className="w-full sm:w-fit">
                  <PrimaryButton text="Contact Us" link="/contact" />
                </div>
                <div className="flex lg:hidden xl:flex h-8 w-[1px] bg-white/15 max-sm:hidden"></div>
                <div className="grid grid-cols-5 sm:flex items-center gap-2 sm:gap-3 max-sm:w-full">
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      className="max-sm:size-full max-sm:aspect-square sm:size-12 flex items-center justify-center rounded-md bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-accent-light transition-colors duration-300 ease-in-out"
                    >
                      <Image src={social.icon} alt="social icon" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex max-sm:flex-col max-lg:justify-between max-lg:w-full gap-8 sm:gap-6 xl:gap-12 2xl:gap-24 2xl:flex-[0.8]">
              <div className="">
                <h6 className="text-white text-xl font-medium sm:font-semibold pb-6 sm:pb-7">
                  Quick Links
                </h6>
                <ul className="grid grid-cols-1 2xl:grid-cols-2 gap-x-7 gap-y-5">
                  {quickLinks.map((link: FooterLinkProps) => (
                    <li
                      key={link.id}
                      className={`text-base hover:text-white transition-colors duration-300 ease-in-out ${
                        pathname === link.link
                          ? "text-white font-semibold"
                          : "text-white/70"
                      }`}
                    >
                      <a href={link.link}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h6 className="text-white text-xl font-medium sm:font-semibold pb-6 sm:pb-7">
                  Services
                </h6>
                <ul className="flex flex-col gap-5">
                  {serviceLinksFooter.map((link: FooterLinkProps) => (
                    <li
                      key={link.id}
                      className={`text-base hover:text-white transition-colors duration-300 ease-in-out ${
                        pathname === link.link
                          ? "text-white font-semibold"
                          : "text-white/70"
                      }`}
                    >
                      <a href={link.link}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h6 className="text-white text-xl font-medium sm:font-semibold pb-6 sm:pb-7">
                  Find Us
                </h6>
                <ul className="flex flex-col gap-5">
                  {findUsLinksFooter.map((link: FooterLinkProps) => (
                    <li
                      key={link.id}
                      className={`text-base text-white/70 hover:text-white transition-colors duration-300 ease-in-out max-w-[220px]`}
                    >
                      <a href={link.link}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between py-6 gap-3">
            <span className="text-base text-white/70">
              © All Rights Reserved Delta Carrier Group. Website Developed by:
              Lorem ipsum
            </span>
            <div className="flex items-center gap-3">
              <a
                href="/privacy-policy"
                className="text-white/70 hover:text-white transition-colors duration-300 ease-in-out"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="text-white/70 hover:text-white transition-colors duration-300 ease-in-out"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[80%] lg:h-[70%] bg-dark max-md:hidden"></div>
      </footer>
    </>
  );
};

export default Footer;
