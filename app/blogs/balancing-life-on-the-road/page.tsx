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
        title="Balancing Life on the Road: Health, Family, and Finances"
        text="Owner-operators enjoy the freedom of running their own business, but long days behind the wheel can make balance feel out of reach. Health, relationships, and money management often compete with the demands of hauling freight. With planning and discipline, you can protect your well-being while keeping your business strong."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1134px] mx-auto">
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              1. Protect Your Health
            </h4>
            <p className="text-body pb-3">
              Spending hours in the driver’s seat can lead to fatigue, poor
              posture, and weight gain. Plan active breaks—a short walk,
              stretches, or body-weight exercises at rest stops keep circulation
              moving and reduce stiffness. Pack balanced meals and snacks like
              fruit, nuts, and lean proteins to avoid relying on fast food. Stay
              hydrated, and aim for consistent sleep by creating a bedtime
              routine, even when your schedule changes. Regular checkups and eye
              exams are critical for safe driving and early detection of health
              issues.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              2. Stay Connected with Family
            </h4>
            <p className="text-body">
              Life on the road doesn’t have to mean isolation. Use video calls,
              messaging apps, and shared calendars to keep up with loved ones’
              daily lives. Schedule home time as firmly as you would a delivery,
              and share those dates well in advance. Small gestures—a quick
              voice note before a shift or mailing postcards from each
              state—help maintain strong ties despite distance. When you are
              home, prioritize quality time and limit work distractions to make
              every moment count.
            </p>

            <Image
              src={blogImg1}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              3. Manage Finances Wisely
            </h4>
            <p className="text-body">
              Uneven income, delayed invoices, and unpredictable expenses can
              strain your budget. Track every dollar: fuel, maintenance,
              insurance, and personal costs. Build an emergency fund that covers
              at least a few months of expenses to weather slow seasons or
              surprise repairs. Use accounting software or a trucking-specific
              app to monitor cash flow, and set aside money for quarterly taxes
              so you’re never caught off guard.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              4. Set Boundaries and Routine
            </h4>
            <p className="text-body">
              Running your own operation means the work never truly ends.
              Establish a clear schedule for driving, rest, and personal calls.
              Protect downtime for exercise, hobbies, or simply recharging. A
              stable routine reduces stress and keeps both your health and
              finances on track.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              5. Lean on Trusted Partners
            </h4>
            <p className="text-body">
              A dependable carrier or logistics partner, such as Delta Carrier
              Group, can smooth out freight schedules and provide resources like
              fuel discounts or maintenance networks. Reliable support reduces
              financial pressure and gives you more freedom to focus on family
              and self-care.
            </p>

            <Image
              src={blogImg2}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              The Bottom Line
            </h4>
            <p className="text-body">
              A successful owner-operator isn’t just someone who delivers loads
              on time—they also safeguard their body, relationships, and money.
              By building healthy habits, nurturing family connections, and
              planning finances carefully, you can create a career that supports
              your life, not one that takes it over.
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
