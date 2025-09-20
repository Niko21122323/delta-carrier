import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import BannerComponent from "@/components/BannerComponent";
import blogImg1 from "../../../public/assets/pohots/blog-detail/1.jpg";
import blogImg2 from "../../../public/assets/pohots/blog-detail/2.jpg";

const page = () => {
  return (
    <main>
      <BannerComponent
        title="Top Challenges Owner-Operators Face—and How to Overcome Them"
        text="Life on the road as an owner-operator offers freedom and the potential for strong profits, but it also comes with unique hurdles. From unpredictable costs to long hours away from home, the challenges can test even the most experienced drivers. Here are the most common obstacles—and practical strategies to keep your business rolling smoothly."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1134px] mx-auto">
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              1. Rising Fuel Prices
            </h4>
            <p className="text-body pb-3">
              Fuel is often the single biggest operating expense. Sudden price
              spikes can shrink margins fast. Solution: Track real-time fuel
              prices with apps, plan routes for the best stops, and practice
              fuel-efficient driving—steady speeds, proper tire pressure, and
              reduced idling. Many carriers, including Delta Carrier Group,
              offer fuel card programs or discounts that can save you cents per
              gallon, which adds up over thousands of miles.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              2. Equipment Breakdowns
            </h4>
            <p className="text-body">
              Unexpected repairs mean lost time and expensive fixes. Solution:
              Stick to a strict preventive maintenance schedule, keep detailed
              service records, and address small issues before they grow.
              Setting aside a maintenance fund ensures you’re prepared for major
              repairs without derailing cash flow.
            </p>

            <Image
              src={blogImg1}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              3. Inconsistent Freight
            </h4>
            <p className="text-body">
              Slow seasons or market fluctuations can leave you with empty miles
              and lost income. Solution: Build strong relationships with
              reliable brokers and carriers to secure repeat freight.
              Diversifying the types of loads you haul—dry van, reefer, or
              specialized freight—also helps smooth out seasonal dips.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              4. Regulatory Compliance
            </h4>
            <p className="text-body">
              DOT inspections, hours-of-service rules, and state-specific
              permits can be overwhelming. Solution: Stay current on
              regulations, use electronic logging devices (ELDs) that simplify
              record-keeping, and keep all paperwork organized. A clean safety
              record reduces fines and boosts your reputation with shippers.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              5. Cash Flow Gaps
            </h4>
            <p className="text-body">
              Invoices can take weeks to pay, leaving you short on fuel or
              repair funds. Solution: Maintain a reserve account for emergencies
              and consider quick-pay or factoring options when cash is tight.
              Careful budgeting—tracking every expense—protects your business
              during lean periods.
            </p>

            <Image
              src={blogImg2}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              6. Work-Life Balance
            </h4>
            <p className="text-body">
              Long stretches on the road can strain relationships and personal
              health. Solution: Set boundaries by scheduling regular home time
              and sticking to it. Use technology to stay connected with family,
              and prioritize rest, exercise, and balanced meals to keep your
              health—and your career—on track.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              7. Market Competition
            </h4>
            <p className="text-body">
              The trucking industry is competitive, with rates often under
              pressure. Solution: Differentiate yourself by offering reliable
              service, excellent communication, and on-time deliveries.
              Investing in customer relationships and maintaining a spotless
              safety record can win you premium loads and repeat business.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              The Bottom Line
            </h4>
            <p className="text-body">
              Owner-operators who treat trucking as a business—not just a
              Owner-operators face demanding conditions, but preparation and
              smart management make all the difference. By controlling costs,
              keeping equipment in top shape, and partnering with trusted
              carriers like Delta Carrier Group, you can navigate these
              challenges and build a resilient, profitable business.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              Share
            </h4>
            <div className="grid grid-cols-5 gap-3 sm:max-w-[288px]">
              <Link
                href="/"
                target="_blank"
                className="bg-light flex items-center justify-center aspect-square rounded-sm hover:bg-accent-light transition-colors duration-300 ease-in-out group"
              >
                <RiInstagramFill className="text-body group-hover:text-white transition-colors duration-300 ease-in-out text-xl" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="bg-light flex items-center justify-center aspect-square rounded-sm hover:bg-accent-light transition-colors duration-300 ease-in-out group"
              >
                <FaFacebook className="text-body group-hover:text-white transition-colors duration-300 ease-in-out text-xl" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="bg-light flex items-center justify-center aspect-square rounded-sm hover:bg-accent-light transition-colors duration-300 ease-in-out group"
              >
                <FaLinkedinIn className="text-body group-hover:text-white transition-colors duration-300 ease-in-out text-xl" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="bg-light flex items-center justify-center aspect-square rounded-sm hover:bg-accent-light transition-colors duration-300 ease-in-out group"
              >
                <IoLogoYoutube className="text-body group-hover:text-white transition-colors duration-300 ease-in-out text-xl" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="bg-light flex items-center justify-center aspect-square rounded-sm hover:bg-accent-light transition-colors duration-300 ease-in-out group"
              >
                <FaXTwitter className="text-body group-hover:text-white transition-colors duration-300 ease-in-out text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
