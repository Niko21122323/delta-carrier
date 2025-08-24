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
import serviceImage3 from "../../../public/assets/pohots/service/01.jpg";
import serviceImage2 from "../../../public/assets/pohots/service/02.jpg";
import serviceImage1 from "../../../public/assets/pohots/service/03.jpg";

const includingData = [
  {
    id: 1,
    icon: includingIcon1,
    title: "Building Materials and Steel",
    text: "From lumber and bricks to steel beams and pipes, we move heavy construction supplies with secure tie-downs and tarps.",
  },
  {
    id: 2,
    icon: includingIcon2,
    title: "Machinery and Industrial Equipment",
    text: "We transport oversized machines, tools, and equipment with precision and care.",
  },
  {
    id: 3,
    icon: includingIcon3,
    title: "Prefabricated Structures",
    text: "Modular homes, panels, and other large components move efficiently on our flatbeds.",
  },
  {
    id: 4,
    icon: includingIcon4,
    title: "Oversized and Specialized Cargo",
    text: "If it doesn’t fit in a dry van, our flatbeds provide the flexibility and securement needed for safe delivery.",
  },
];

const shippingData = [
  {
    id: 1,
    icon: shippingIcon1,
    title: "Expert Securement & Safety",
    text: "Our drivers are trained in advanced load securement, tarping, and safety procedures to protect your freight.",
  },
  {
    id: 2,
    icon: shippingIcon2,
    title: "Versatile Equipment",
    text: "We offer standard flatbeds, step decks, and specialized trailers to handle a wide range of cargo types.",
  },
  {
    id: 3,
    icon: shippingIcon3,
    title: "On-Time, Reliable Service",
    text: "Every load is backed by professional drivers and dependable scheduling across all routes.",
  },
  {
    id: 4,
    icon: shippingIcon4,
    title: "Nationwide Coverage",
    text: "From local hauls to coast-to-coast deliveries, our flatbed fleet provides reach and reliability wherever you need it.",
  },
];

const page = () => {
  return (
    <main>
      <BannerComponent
        title="Conestoga"
        text="At Delta Carrier Group, our Conestoga Division combines the protection of an enclosed trailer with the flexibility of a flatbed. Featuring retractable tarping systems, our Conestoga trailers make loading and unloading oversized or sensitive freight easy—while keeping it shielded from weather and road debris."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="">
                <TitleComponent
                  title="What Is Conestoga?"
                  subtitle="Conestoga"
                />
                <p className="text-body py-6">
                  Conestoga freight refers to open-deck flatbeds outfitted with
                  a sliding tarp system. This unique design allows freight to be
                  loaded from the side, rear, or overhead, while still being
                  fully enclosed once secured. Conestogas are the perfect
                  solution for oversized, delicate, or high-value cargo
                  requiring both accessibility and protection.
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
                    Our Conestoga trailers are built for specialized freight
                    that demands careful handling, weather protection, and ease
                    of access. Whether you’re moving large machinery or
                    sensitive products, our Conestoga fleet provides a secure
                    and versatile transport solution.
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
                    Why Choose Delta for Conestoga Shipping?
                  </h4>

                  <p className="text-body">
                    Conestoga hauling requires the right equipment and
                    expertise—Delta Carrier Group delivers both.
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
                    From manufacturers and distributors to aerospace and
                    high-tech industries, we partner with clients who require
                    specialized transport for freight that must stay protected
                    yet remain easy to load. Our Conestoga division is ideal for
                    recurring shipments, project-based moves, or one-time
                    specialized loads. Operating across all 48 contiguous U.S.
                    states, Delta Carrier Group ensures your cargo moves with
                    care, efficiency, and dependable service.
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
