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
    title: "Versatile Freight Options",
    text: "Haul dry van, flatbed or step deck based on your setup and expertise.",
  },
  {
    id: 2,
    icon: responsibilitieIcon2,
    title: "Freedom to Choose",
    text: "Pick your own loads and plan your routes—no forced dispatch, ever.",
  },
  {
    id: 3,
    icon: responsibilitieIcon3,
    title: "Collaborative Trip Planning",
    text: "Work with our dispatch team when needed to optimize routes and scheduling.",
  },
  {
    id: 4,
    icon: responsibilitieIcon4,
    title: "Stay Compliant on the Road",
    text: "Follow FMCSA and ELD regulations with full support to keep your operations smooth and legal.",
  },
];

const offer = [
  {
    id: 1,
    icon: offerIcon1,
    title: "Transparent Pay",
    text: "Keep 88% of gross revenue with weekly, transparent settlements.",
  },
  {
    id: 2,
    icon: offerIcon2,
    title: "Reliable Dispatch",
    text: "Get 24/5 access to our dispatch team, including Saturdays always there when you need support.",
  },
  {
    id: 3,
    icon: offerIcon3,
    title: "Fuel & Cash Flow Support",
    text: "Use our fuel cards with national discounts and request optional cash advances when needed.",
  },
  {
    id: 4,
    icon: offerIcon4,
    title: "Self-Dispatch Freedom",
    text: "Want full control? Book your own loads and manage your schedule your way.",
  },
];

const requirements = [
  {
    id: 1,
    icon: requirementIcon1,
    title: "Proven CDL-A Experience",
    text: "We require a minimum of 2 years of verifiable CDL-A experience to ensure you're road-ready and confident behind the wheel.",
  },
  {
    id: 2,
    icon: requirementIcon2,
    title: "Clean Driving Record",
    text: "A clean Motor Vehicle Record with no major violations in the past 24 months helps us maintain safety and compliance across the fleet.",
  },
  {
    id: 3,
    icon: requirementIcon3,
    title: "DOT Drug Screening",
    text: "All drivers must pass a DOT-compliant drug screening. For safety reasons, we do not accept applicants in or coming from the SAP program.",
  },
  {
    id: 4,
    icon: requirementIcon4,
    title: "Operate Your Own Truck",
    text: "You must own and operate your own truck as a solo driver. We do not onboard teams or company drivers.",
  },
  {
    id: 5,
    icon: requirementIcon5,
    title: "Nationwide Availability",
    text: "Be willing to run loads throughout all 48 contiguous U.S. states. You’ll always have the freedom to choose where and when you drive.",
  },
  {
    id: 6,
    icon: requirementIcon6,
    title: "Professionalism & Safety",
    text: "We’re looking for drivers who take pride in safe driving, clear communication, and a professional approach to every load.",
  },
];

const page = () => {
  return (
    <main>
      <BannerComponent
        title="CDL-A Owner-Operator"
        text="Join a team that puts you in the driver’s seat—literally. At Delta Carrier Group, you’re not just another number. You own your truck, your time, and your path to success. We’re here to support you every mile."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="">
                <TitleComponent
                  title="Drive Free and Own Your Success."
                  subtitle="Job Position"
                />
                <p className="text-body py-6">
                  At Delta Carrier Group, we’re built for drivers who want
                  freedom, not restrictions. As a 100% owner-operator company,
                  we partner with experienced CDL-A professionals who are ready
                  to run their own business with the confidence of having a
                  trusted team behind them. This isn’t just another trucking
                  gig. This is your truck, your schedule, and your
                  success—backed by our dispatch, logistics, and maintenance
                  support from day one.
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
                    src={jobImg1}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <h3 className="text-3xl md:text-4xl xl:text-5xl text-dark font-semibold pb-4">
                    Your Role on the Road
                  </h3>
                  <p className="text-body">
                    As an Owner-Operator at Delta Carrier Group, you’re in
                    control of your business—but never alone. You’ll run your
                    own truck under our authority while hauling freight across
                    the country with full freedom and support:
                  </p>
                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6">
                    Key Responsibilities
                  </h4>
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
                      <SecondaryButton text="Apply now" link="/contact" />
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
                    What We Offer
                  </h4>

                  <p className="text-body">
                    We’re committed to helping you run efficiently and
                    profitably. From transparent pay to optional support
                    services, everything is designed to help you succeed.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-8">
                    {offer.map((data) => (
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
                    src={jobImg3}
                    alt="service image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="">
                  <TitleComponent
                    title="What You’ll Need"
                    subtitle="Job Position"
                  />
                  <p className="text-body pt-4">
                    To maintain a high standard of service and safety, we work
                    only with experienced, reliable professionals who are ready
                    to take control of their business.
                  </p>

                  <h4 className="text-2xl lg:text-3xl text-dark font-semibold py-6">
                    Minimum Requirements
                  </h4>
                  <div className="flex flex-col gap-4">
                    {requirements.map((data) => (
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
              </div>
            </div>

            <div className="max-lg:hidden lg:col-span-3 lg:col-start-10">
              <AsideJobs />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
