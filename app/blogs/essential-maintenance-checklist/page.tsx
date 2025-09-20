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
        title="Essential Maintenance Checklist for Owner-Operator Trucks"
        text="Your truck is your business. Keeping it in top condition not only prevents costly breakdowns but also protects your safety, fuel efficiency, and reputation with shippers. A consistent maintenance routine is the best way to avoid downtime and unexpected expenses. Use this checklist to stay ahead of problems and keep every mile profitable."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1134px] mx-auto">
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              1. Daily Pre-Trip and Post-Trip Checks
            </h4>
            <ul className="pb-3 pl-6 list-disc flex flex-col gap-1">
              <li className="text-body">
                Fluids: Check engine oil, coolant, power steering, brake, and
                windshield washer levels.
              </li>
              <li className="text-body">
                Tires: Inspect pressure, tread depth, and look for cuts or
                uneven wear.
              </li>
              <li className="text-body">
                Lights & Signals: Confirm that headlights, taillights, and turn
                signals work properly.
              </li>
              <li className="text-body">
                Brakes: Listen for air leaks and test brake function before
                leaving the yard.
              </li>
              <li className="text-body">
                Leaks & Hoses: Walk around the truck to spot any fluid drips or
                cracked hoses.
              </li>
            </ul>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              2. Weekly Tasks
            </h4>
            <ul className="pb-3 pl-6 list-disc flex flex-col gap-1">
              <li className="text-body">
                Battery & Connections: Clean terminals and ensure a secure fit.
              </li>
              <li className="text-body">
                Belts & Pulleys: Look for frays, cracks, or tension issues.
              </li>
              <li className="text-body">
                Cabin Filters & HVAC: Check air filters and make sure the
                heating and cooling systems are working efficiently.
              </li>
            </ul>

            <Image
              src={blogImg1}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              3. Monthly Maintenance
            </h4>
            <ul className="pb-3 pl-6 list-disc flex flex-col gap-1">
              <li className="text-body">
                Engine & Transmission: Inspect for unusual noises or vibration.
              </li>
              <li className="text-body">
                Suspension Components: Check shocks, springs, and bushings for
                wear.
              </li>
              <li className="text-body">
                Exhaust System: Look for rust, loose fittings, or leaks that can
                affect emissions compliance.
              </li>
            </ul>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              4. Seasonal or Quarterly Service
            </h4>
            <ul className="pb-3 pl-6 list-disc flex flex-col gap-1">
              <li className="text-body">
                Oil & Filter Change: Follow manufacturer intervals or perform
                earlier if running heavy miles.
              </li>
              <li className="text-body">
                Fuel System: Replace fuel filters and use additives during cold
                months to prevent gelling.
              </li>
              <li className="text-body">
                Cooling System: Flush and replace coolant as recommended, paying
                attention before extreme summer or winter runs.
              </li>
              <li className="text-body">
                Alignment & Tires: Rotate or replace tires and verify alignment
                to reduce uneven wear and improve fuel economy.
              </li>
            </ul>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              5. Annual or High-Mileage Checks
            </h4>
            <ul className="pb-3 pl-6 list-disc flex flex-col gap-1">
              <li className="text-body">
                Transmission & Differential Fluids: Drain and replace according
                to service schedule.
              </li>
              <li className="text-body">
                Brake System Overhaul: Inspect drums, rotors, and pads; replace
                worn components.
              </li>
              <li className="text-body">
                Full DOT Inspection: Ensure all components meet federal safety
                standards to avoid fines or downtime.
              </li>
            </ul>

            <Image
              src={blogImg2}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              Pro Tips for Owner-Operators
            </h4>
            <ul className="pb-3 pl-6 list-disc flex flex-col gap-1">
              <li className="text-body">
                Keep Detailed Records: Log all maintenance and repairs.
                Documentation improves resale value and can reduce insurance
                premiums.
              </li>
              <li className="text-body">
                Use Quality Parts: Cutting corners with cheap filters or fluids
                often costs more in the long run.
              </li>
              <li className="text-body">
                Partner with a Reliable Carrier: Working with carriers like
                Delta Carrier Group can give you access to trusted maintenance
                networks and fuel discounts, helping keep your truck—and your
                business—on the road.
              </li>
            </ul>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              The Bottom Line
            </h4>
            <p className="text-body">
              Preventive maintenance is an investment, not an expense. By
              following a thorough checklist and addressing small issues early,
              you’ll minimize breakdowns, protect your profit margins, and
              ensure every haul is as smooth and safe as possible.
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
