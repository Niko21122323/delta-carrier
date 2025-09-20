import Image from "next/image";
import AsideJobs from "@/components/AsideJobs";
import BannerComponent from "@/components/BannerComponent";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import TitleComponent from "@/components/TitleComponent";
import responsibilitieIcon1 from "../../../public/assets/icons/directions.svg";
import requirementIcon1 from "../../../public/assets/icons/document.svg";
import responsibilitieIcon2 from "../../../public/assets/icons/free-drive.svg";
import offerIcon3 from "../../../public/assets/icons/fuel.svg";
import offerIcon2 from "../../../public/assets/icons/headset-red.svg";
import offerIcon4 from "../../../public/assets/icons/medal.svg";
import offerIcon1 from "../../../public/assets/icons/money.svg";
import requirementIcon3 from "../../../public/assets/icons/pills.svg";
import responsibilitieIcon3 from "../../../public/assets/icons/puzzle.svg";
import responsibilitieIcon4 from "../../../public/assets/icons/road.svg";
import requirementIcon6 from "../../../public/assets/icons/star-bright.svg";
import requirementIcon4 from "../../../public/assets/icons/truck-static.svg";
import requirementIcon5 from "../../../public/assets/icons/usa.svg";
import requirementIcon2 from "../../../public/assets/icons/wheel.svg";
import jobImg1 from "../../../public/assets/pohots/cdl/1.jpg";
import jobImg2 from "../../../public/assets/pohots/cdl/2.jpg";
import jobImg3 from "../../../public/assets/pohots/cdl/3.jpg";

const responsibilities = [
  {
    id: 1,
    icon: responsibilitieIcon1,
    title: "Fuel Discounts",
    text: "Up to $0.90 per Gallon, You Can Track The Daily Real-Time Discounts via Phone Application.",
  },
  {
    id: 2,
    icon: responsibilitieIcon2,
    title: "Van & Flatber",
    text: "Division drivers average 2800-3400 Miles weekly. ",
  },
];

const offer = [
  {
    id: 1,
    icon: offerIcon1,
    title: "2026 & 2025 Kenworth T680 with CUMMINS ENGINE",
    text: "APU & Inverter, Fridge, 12 speed Automatic Transmission. SOLAR panel for charging the truck batteries.",
  },
  {
    id: 2,
    icon: offerIcon2,
    title: "2026 & 2025 Freightliner Cascadias DD15",
    text: "APU & Inverter, Fridge, 12 Speed Automatic, SOLAR panel for charging the truck batteries.",
  },
  {
    id: 3,
    icon: offerIcon3,
    title: "2025 Kenworth T680 with KIMS System APU & Inverter",
    text: "Diamond Package, Fridge, 12 speed Automatic Transmission. SOLAR panel for charging the truck batteries.",
  },
  {
    id: 4,
    icon: offerIcon4,
    title: "2024 Kenworth T680 with KIMS System APU & Inverter",
    text: "Diamond Package, Fridge, 12 speed Automatic Transmission. SOLAR panel for charging the truck batteries.",
  },
  {
    id: 5,
    icon: offerIcon4,
    title: "2023 Kenworth T680 with KIMS System APU & Inverter",
    text: "Diamond Package, Fridge, 12 speed Automatic Transmission. SOLAR panel for charging the truck batteries.",
  },
  {
    id: 6,
    icon: offerIcon4,
    title: "2022 Kenworth T680 with Thermo King TriPack APU & Power Inverter",
    text: "Diamond Package, Fridge, 12 speed Automatic Transmission.",
  },
  {
    id: 7,
    icon: offerIcon4,
    title: "2021 Kenworth T680 with Carrier APU",
    text: "Fridge, Power Inverter, 12 speed Automatic Transmission. ",
  },
];

const benefits = [
  {
    id: 1,
    text: "Health Benefits thru partner company and you can build your plan.",
  },
  {
    id: 2,
    text: "Operating mostly mix of Midwest, North East, and Southern states.",
  },
  {
    id: 3,
    text: "We have a great reputation for keeping our contractors busy and with great earnings.",
  },
  {
    id: 4,
    text: "Pet & Passenger Policy",
  },
  {
    id: 5,
    text: "NO Money Down, NO Balloon Payments!",
  },
  {
    id: 6,
    text: "Walk-Away Lease!!!",
  },
];

const privilages = [
  {
    id: 1,
    text: "Driver needs to have 2 years recent OTR experience",
  },
  {
    id: 2,
    text: "Good Driving Record",
  },
  {
    id: 3,
    text: "Minimum Age of 23 or Older",
  },
  {
    id: 4,
    text: "No SAP Programs.",
  },
];

const requierments = [
  {
    id: 1,
    icon: requirementIcon1,
    text: "Personal Dispatch, Non-Forced Dispatch - 24/7",
  },
  {
    id: 2,
    icon: requirementIcon2,
    text: "Consistent loads",
  },
  {
    id: 3,
    icon: requirementIcon3,
    text: "Direct Deposit Pay Every Friday",
  },
  {
    id: 4,
    icon: requirementIcon4,
    text: "Trailer maintenance paid by the company",
  },
  {
    id: 5,
    icon: requirementIcon5,
    text: "Substitute truck in case of emergency (breakdown)",
  },
  {
    id: 6,
    icon: requirementIcon6,
    text: "Governed at 70 mph",
  },
  {
    id: 7,
    icon: requirementIcon6,
    text: "Fuel Cards",
  },
  {
    id: 8,
    icon: requirementIcon6,
    text: "Limited Cash Advances available",
  },
  {
    id: 9,
    icon: requirementIcon6,
    text: "Safety and Referral Bonuses",
  },
  {
    id: 10,
    icon: requirementIcon6,
    text: "We are 100% Owner Operators Company",
  },
];

const page = () => {
  return (
    <main>
      <BannerComponent
        title="CDL-Lis Purchase"
        text="LEASE PURCHASE OFFER - 2026 & 2025 KW T680 with Cummins Engine & 2026-2025 Freightliner Cascadia DD15 Trucks and more."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="">
              <div className="">
                <TitleComponent
                  title=" Get $8000 Sign-On Bonus when joining our Flatbed Division! "
                  subtitle="Job Position"
                />
                <p className="text-body py-6">
                  Home every 2-3 weeks depending on the area you live in and
                  home time you need, it's up to you. The more you run, the more
                  you'll make. Ask your Recruiter what is doable for your area.
                  We are looking for professional truck drivers to join our VAN
                  & FLATBED, CONESTOGA Division for OVER THE ROAD (CDL Class A -
                  OTR).
                </p>
                <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
                  <div className="w-full sm:w-fit">
                    <PrimaryButton text="Contact Us" link="/contact" />
                  </div>
                  <div className="w-full sm:w-fit">
                    <SecondaryButton
                      text="Apply now"
                      link="https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_584214130"
                      target="_blank"
                    />
                  </div>
                </div>

                <div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={jobImg1}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h3 className="text-3xl md:text-4xl xl:text-5xl text-dark font-semibold pb-4">
                    Your Role on the Road
                  </h3>
                  <p className="text-body pb-6">
                    Home every 2-3 weeks depending on the area you live in and
                    home time you need, it's up to you. The more you run, the
                    more you'll make. Ask your Recruiter what is doable for your
                    area.
                    <br />
                    We are looking for professional truck drivers to join our
                    VAN & FLATBED, CONESTOGA Division for OVER THE ROAD (CDL
                    Class A - OTR).
                  </p>
                  <div className="flex flex-col gap-4">
                    {responsibilities.map((data) => (
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
                      <SecondaryButton
                        text="Apply now"
                        link="https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_584214130"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={jobImg2}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6">
                    We Hire East of the Rockies only!
                  </h4>

                  <p className="text-body">
                    You get %75 from the line haul gross (Includes Trailer Rent
                    with covered Maintenance & Included Cargo Insurance, Free
                    Logix Anywhere & Free ELD Weekly Service)
                  </p>

                  <div className="flex flex-col gap-4 pt-6">
                    {offer.map((data) => (
                      <div
                        key={data.id}
                        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                      >
                        <div className="">
                          <h6 className="text-xl text-dark font-semibold pb-1 max-sm:hidden">
                            {data.title}
                          </h6>
                          <p className="text-body">{data.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold pt-6 pb-4">
                    Benefits
                  </h4>
                  <div className="flex flex-col gap-2">
                    {benefits.map((data) => (
                      <ul key={data.id} className="list-disc pl-6">
                        <li className="text-body">{data.text}</li>
                      </ul>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
                    <div className="w-full sm:w-fit">
                      <PrimaryButton text="Contact Us" link="/contact" />
                    </div>
                    <div className="w-full sm:w-fit">
                      <SecondaryButton
                        text="Apply now"
                        link="https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_584214130"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-h-[400px] my-6 lg:my-8 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={jobImg3}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6 capitalize">
                    Requierments:
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-6">
                    {privilages.map((data) => (
                      <li key={data.id} className="">
                        <p className="text-body">{data.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="">
                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6 capitalize">
                    Privilages:
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-6">
                    {requierments.map((data) => (
                      <li key={data.id} className="">
                        <p className="text-body">{data.text}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 pt-6 md:pt-8">
                    <div className="w-full sm:w-fit">
                      <PrimaryButton text="Contact Us" link="/contact" />
                    </div>
                    <div className="w-full sm:w-fit">
                      <SecondaryButton
                        text="Apply now"
                        link="https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_584214130"
                        target="_blank"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
