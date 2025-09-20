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
        title="Maximizing Profit as an Owner-Operator: Smart Strategies for Success"
        text="Running your own truck is rewarding—but profit doesn’t happen by chance. As an owner-operator, you wear every hat: driver, dispatcher, bookkeeper, and strategist. Balancing all these roles can feel like a lot, but a clear plan turns long miles into real income. Below are proven ways to strengthen your bottom line and keep your business thriving."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1134px] mx-auto">
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              1. Know Your True Costs
            </h4>
            <p className="text-body pb-3">
              Fuel, maintenance, insurance, permits, and depreciation add up
              quickly. Track every expense to the penny so you can set rates
              that cover your costs and provide a healthy margin. Many
              profitable operators use accounting software or trucking-specific
              apps to stay on top of numbers, identify where money leaks out,
              and make confident pricing decisions.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              2. Plan Routes with Precision
            </h4>
            <p className="text-body">
              Empty miles eat directly into earnings. Use reputable load boards,
              trusted brokers, and smart routing tools to find backhauls and
              create the most efficient paths. Planning ahead reduces fuel
              consumption, lowers equipment wear, and ensures you spend more
              time moving freight and less time sitting idle.
            </p>

            <Image
              src={blogImg1}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              3. Maintain Your Equipment
            </h4>
            <p className="text-body">
              Preventive maintenance is always cheaper than a roadside repair.
              Create a service schedule—oil changes, tire rotations, brake
              inspections—and follow it without fail. A well-maintained truck
              not only avoids costly downtime but also helps keep insurance
              premiums low and protects your reputation for reliability.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              4. Build Strong Relationships
            </h4>
            <p className="text-body">
              Consistent freight from trusted shippers or carriers like Delta
              Carrier Group provides steady income and reduces time spent
              chasing loads. Professional communication, on-time deliveries, and
              reliability build partnerships that lead to repeat business and
              better rates. Relationships are your safety net during slow
              freight seasons.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              5. Manage Cash Flow Wisely
            </h4>
            <p className="text-body">
              Freight invoices can take weeks to pay. Keep an emergency fund and
              consider quick-pay or factoring options when needed. A detailed
              budget—covering fuel, repairs, and personal expenses—ensures you
              can handle unexpected costs without stress or debt.
            </p>

            <Image
              src={blogImg2}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              6. Prioritize Compliance and Safety
            </h4>
            <p className="text-body">
              Fines and violations drain profits and can put your operating
              authority at risk. Stay current with DOT regulations, logbook
              requirements, and safety checks. A clean record protects your
              business, boosts your credibility with brokers, and often
              qualifies you for better insurance rates.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              7. Invest in Yourself and Your Business
            </h4>
            <p className="text-body">
              Profitable owner-operators never stop learning. Whether it’s
              fuel-efficient driving techniques, new technologies, or changing
              market trends, continuous education keeps you competitive.
              Consider business courses, networking events, or mentorship
              programs to sharpen both driving and management skills.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              The Bottom Line
            </h4>
            <p className="text-body">
              Owner-operators who treat trucking as a business—not just a
              job—see the best results. By understanding costs, maintaining
              equipment, and partnering with dependable carriers like Delta
              Carrier Group, you’ll keep more of what you earn and set yourself
              up for long-term success. The road to higher profit isn’t about
              driving more miles—it’s about making every mile count.
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
