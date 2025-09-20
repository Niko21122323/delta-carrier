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
        title="In-Office Careers at Delta Carrier"
        text="Working at Delta Carrier means joining a reliable, growth-oriented transportation company while enjoying the stability and energy of a professional office environment."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="lg:col-span-7">
              <div className="">
                <p className="text-body py-6">
                  Working at Delta Carrier means joining a reliable,
                  growth-oriented transportation company while enjoying the
                  stability and energy of a professional office environment. Our
                  in-office team keeps every shipment moving and every driver
                  supported, making them an essential part of our success. From
                  dispatch and logistics coordination to customer service,
                  billing, and human resources, each role contributes to a
                  smooth and efficient operation that serves clients across the
                  country.
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
                  <p className="text-body">
                    We offer a workplace designed for focus and collaboration.
                    Employees enjoy regular weekday hours, allowing them to
                    maintain a healthy work–life balance, as well as a clean and
                    modern office equipped with the latest tools and technology.
                    Competitive salaries are paired with comprehensive benefits
                    such as health coverage, paid time off, and retirement plan
                    options, so you can build a secure future while advancing
                    your career.
                  </p>
                  <p className="text-body pt-2">
                    Career development is a cornerstone of our culture. Whether
                    you are starting in an entry-level administrative position
                    or bringing years of logistics experience, you will have
                    access to ongoing training, mentorship programs, and
                    opportunities for promotion. We value initiative and reward
                    employees who are eager to learn and grow within the
                    company. Your contributions are recognized, and your ideas
                    are welcomed.
                  </p>
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
                  <p className="text-body">
                    Our ideal candidates are dependable team players with strong
                    communication skills and a problem-solving mindset.
                    Familiarity with office software or transportation logistics
                    systems is a plus, but more important is a willingness to
                    learn and a commitment to providing excellent service to
                    both internal teams and external customers. Reliability,
                    attention to detail, and a collaborative attitude are key
                    traits that help our office staff succeed every day.
                  </p>
                  <p className="text-body pt-2">
                    If you are ready to build a rewarding career in a stable and
                    supportive environment, we invite you to apply for an
                    in-office position at Delta Carrier. Complete the
                    application form below, attach your résumé, and tell us why
                    you want to join our team. Our hiring managers review every
                    submission carefully and will contact you to discuss next
                    steps. Join us and help keep the wheels of Delta Carrier
                    turning—right from the heart of our operations.
                  </p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
