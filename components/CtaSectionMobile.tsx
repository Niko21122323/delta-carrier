import Image from "next/image";
import ctaImg from "../public/assets/pohots/hero-cta/cta-banner.jpg";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TitleComponent from "./TitleComponent";

const CtaSectionMobile = () => {
  return (
    <section className="relative overflow-hidden md:rounded-2xl max-md:pb-6 md:pb-16 z-30 md:hidden">
      <div className="relative z-20 flex md:items-center md:justify-end md:px-6 lg:pr-16">
        <div className="p-4 sm:p-6 lg:p-12 rounded-xl">
          <TitleComponent
            title="Ready to Take the Wheel?"
            subtitle="Earn Confidently"
          />
          <p className="text-body pt-3 lg:pt-6 pb-6 lg:pb-9">
            Join a carrier that puts you in control. At Delta Carrier Group, you
            get the freedom to run your business—backed by real support,
            transparent pay, and nationwide opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full sm:w-fit">
              <PrimaryButton text="Contact Us" link="/contact" />
            </div>
            <div className="w-full sm:w-fit">
              <SecondaryButton
                text="Apply now"
                link="https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_584214130"
                target="_blank"
                color="light"
              />
            </div>
          </div>
          <div className="rounded-lg sm:rounded-xl overflow-hidden mt-6">
            <Image
              src={ctaImg}
              alt="cat image"
              className="h-full w-full object-cover min-h-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionMobile;
