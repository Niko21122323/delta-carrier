import Image from "next/image";
import AsideService from "@/components/AsideService";
import BannerComponent from "@/components/BannerComponent";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import TitleComponent from "@/components/TitleComponent";
import shippingIcon3 from "../../../public/assets/icons/calendar.svg";
import includingIcon1 from "../../../public/assets/icons/cart.svg";
import includingIcon4 from "../../../public/assets/icons/chip.svg";
import includingIcon2 from "../../../public/assets/icons/food.svg";
import shippingIcon1 from "../../../public/assets/icons/location.svg";
import shippingIcon2 from "../../../public/assets/icons/person.svg";
import includingIcon3 from "../../../public/assets/icons/stac.svg";
import shippingIcon4 from "../../../public/assets/icons/usa.svg";
import serviceImage3 from "../../../public/assets/pohots/gallery/11.webp";
import serviceImage2 from "../../../public/assets/pohots/gallery/14.webp";
import serviceImage1 from "../../../public/assets/pohots/gallery/18.webp";

const includingData = [
  {
    id: 1,
    icon: includingIcon1,
    title: "Building Materials & Steel",
    text: "Sturdy and secure transport for items like lumber, steel beams, pipes, and bundles of planks.",
  },
  {
    id: 2,
    icon: includingIcon2,
    title: "Machinery & Industrial Equipment",
    text: "Specialized moving of heavy tools, equipment, and machinery using precise loading and tie-down methods.",
  },
  {
    id: 3,
    icon: includingIcon3,
    title: "Modular Components & Prefabs",
    text: "Safe handling of prefabricated structures, home panels, and construction modules.",
  },
  {
    id: 4,
    icon: includingIcon4,
    title: "Oversized & Unique Loads",
    text: "We expertly load and transport goods that simply won’t fit inside a traditional dry van.",
  },
];

const shippingData = [
  {
    id: 1,
    icon: shippingIcon1,
    title: "Fully Equipped for Secure Transport",
    text: "Our trailers—with all necessary tie-down gear and tarping systems—are ready for any type of load. Follow-through is non-negotiable.",
  },
  {
    id: 2,
    icon: shippingIcon2,
    title: "Versatile Trailer Fleet",
    text: "We operate both 48' and 53' flatbeds and can integrate your Step Deck into the fleet when preferred",
  },
  {
    id: 3,
    icon: shippingIcon3,
    title: "Skilled Owner-Operators & Drivers",
    text: "Experienced professionals take pride in your load—ensuring safe and punctual delivery every time.",
  },
  {
    id: 4,
    icon: shippingIcon4,
    title: "Transparent Communication & Electronic Tracking",
    text: "Our streamlined dispatch and tracking systems keep you in the loop—from pickup to drop-off. Reviews cite strong communication and modern tracking as key strengths",
  },
];

const page = () => {
  return (
    <main>
      <BannerComponent
        title="Flatbed Trailers"
        text="At Delta Carrier Group, our Flatbed Division delivers unmatched versatility and strength for transporting oversized, heavy, or specialized cargo. With 48' and 53' open-deck trailers—and the flexibility to work with your Step Deck—we ensure safe, efficient transit through expert securement and unmatched reliability."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="">
                <TitleComponent
                  title="What Is Flatbed Freight?"
                  subtitle="Flatbed Freight"
                />
                <p className="text-body py-6">
                  Flatbed freight refers to open-deck trailers without side
                  walls or a roof, making them perfect for hauling heavy,
                  oversized, or irregularly shaped loads. Whether it’s
                  construction materials, machinery, or modular components,
                  flatbeds excel in accessibility and flexibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
                  <div className="w-full sm:w-fit">
                    <PrimaryButton text="Contact Us" link="/contact" />
                  </div>
                  <div className="w-full sm:w-fit">
                    <SecondaryButton text="Apply now" link="/contact" />
                  </div>
                </div>

                <div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={serviceImage1}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h3 className="text-3xl md:text-4xl xl:text-5xl text-dark font-semibold pb-4">
                    What We Haul
                  </h3>
                  <p className="text-body">
                    Our flatbeds are engineered for a wide range of heavy-duty
                    freight. From single large shipments to project-based hauls,
                    we adapt every job to your exact needs.
                  </p>
                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6">
                    All of that including
                  </h4>
                  <div className="flex flex-col gap-4">
                    {includingData.map((data) => (
                      <div
                        key={data.id}
                        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center flex-shrink-0 size-8 max-sm:p-1.5 sm:size-[52px] bg-light border border-black/5 rounded-sm sm:rounded-lg">
                            <Image src={data.icon} alt="icon" />
                          </div>
                          <h6 className="sm:hidden text-base text-dark font-semibold">
                            {data.title}
                          </h6>
                        </div>

                        <div className="">
                          <h6 className="text-xl text-dark font-semibold pb-1 max-sm:hidden">
                            {data.title}
                          </h6>
                          <p className="text-body">{data.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
                    <div className="w-full sm:w-fit">
                      <PrimaryButton text="Contact Us" link="/contact" />
                    </div>
                    <div className="w-full sm:w-fit">
                      <SecondaryButton text="Apply now" link="/contact" />
                    </div>
                  </div>
                </div>

                <div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={serviceImage2}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6">
                    Why Choose Delta for Flatbed Shipping?
                  </h4>

                  <p className="text-body">
                    Flatbed hauling demands precision, safety, and adaptability.
                    Here’s how we deliver:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-8">
                    {shippingData.map((data) => (
                      <div
                        key={data.id}
                        className="bg-light border border-black/15 rounded-xl p-3 md:p-4"
                      >
                        <div className="flex items-center justify-center flex-shring-0 size-12 bg-white rounded-md border border-black/15">
                          <Image src={data.icon} alt="icon" />
                        </div>
                        <h5 className="text-dark text-xl font-medium pt-3 pb-2">
                          {data.title}
                        </h5>
                        <p className="text-body">{data.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
                    <div className="w-full sm:w-fit">
                      <PrimaryButton text="Contact Us" link="/contact" />
                    </div>
                    <div className="w-full sm:w-fit">
                      <SecondaryButton text="Apply now" link="/contact" />
                    </div>
                  </div>
                </div>

                <div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={serviceImage3}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h3 className="text-3xl md:text-4xl xl:text-5xl text-dark font-semibold pb-4">
                    Who We Serve
                  </h3>
                  <p className="text-body">
                    From construction companies to manufacturers and industrial
                    suppliers, we partner with clients who need reliable flatbed
                    shipping for oversized and heavy freight. Our flatbed
                    division is ideal for moving building materials, machinery,
                    and specialized loads that demand open-deck transport and
                    expert securement. Whether it’s recurring shipments,
                    project-based hauling, or one-time oversized deliveries, we
                    provide dependable service with seamless coordination.
                    Operating across all 48 contiguous U.S. states, Delta
                    Carrier Group ensures your freight moves efficiently coast
                    to coast—with safety and professionalism at the forefront.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
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
            <div className="max-lg:hidden lg:col-span-3 lg:col-start-10">
              <AsideService />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
