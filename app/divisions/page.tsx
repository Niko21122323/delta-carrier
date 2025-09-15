import Image from "next/image";
import BannerComponent from "@/components/BannerComponent";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SolutionsSection from "@/components/SolutionsSection";
import TitleComponent from "@/components/TitleComponent";
import divisionImage1 from "../../public/assets/pohots/gallery/11.jpg";
import divisionImage2 from "../../public/assets/pohots/gallery/10.jpg";

export default function page() {
  return (
    <main>
      <BannerComponent
        title="Divisions That Deliver"
        text="At Delta Carrier Group, every division is tailored to handle a specific kind of freight with precision, care, and efficiency. From dry vans to Conestogas, we’re structured for performance."
      />
      <section className="py-12 sm:py-16 xl:py-[84px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7 lg:gap-6 xl:gap-10 2xl:gap-20">
            <div className="h-full w-full overflow-hidden rounded-2xl order-2 lg:order-1">
              <Image
                src={divisionImage1}
                alt="solutions image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <TitleComponent
                title="Divisions Built for Performance"
                subtitle="Our Divisions"
              />
              <p className="text-body pt-8">
                At Delta Carrier Group, we don’t believe in one-size-fits-all.
                Our operations are divided into specialized divisions to ensure
                every type of freight is handled with the right strategy,
                equipment, and expertise. Whether you're moving general goods,
                oversized machinery, or time-sensitive freight, each division is
                built to deliver safety, reliability, and full transparency
                every mile of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-y-3 gap-x-4 pt-12">
                <div className="w-full sm:w-fit">
                  <PrimaryButton text="Contact Us" link="/contact" />
                </div>
                <div className="w-full sm:w-fit">
                  <SecondaryButton text="Apply now" link="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SolutionsSection />
      <section className="py-12 sm:py-16 xl:py-[84px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7 lg:gap-6 xl:gap-10 2xl:gap-20">
            <div className="h-full w-full overflow-hidden rounded-2xl order-2">
              <Image
                src={divisionImage2}
                alt="solutions image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1">
              <TitleComponent
                title="One Network, Multiple Solutions"
                subtitle="Divisions That Drive Results"
              />
              <p className="text-body pt-8">
                No matter which division your freight falls under, you’ll
                benefit from real-time tracking, responsive support, and a team
                that treats your cargo like their own. With national coverage
                and a commitment to excellence, Delta Carrier Group is ready to
                haul what matters most—on your terms.
              </p>

              <div className="flex flex-col sm:flex-row gap-y-3 gap-x-4 pt-12">
                <div className="w-full sm:w-fit">
                  <PrimaryButton text="Contact Us" link="/contact" />
                </div>
                <div className="w-full sm:w-fit">
                  <SecondaryButton text="Apply now" link="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
