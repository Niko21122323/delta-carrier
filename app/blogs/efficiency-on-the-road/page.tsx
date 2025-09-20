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
        title="Tips for Efficient Trucking Operations: Boost Productivity on the Road"
        text="Running your own trucking business efficiently is key to maximizing profit and minimizing stress. By adopting practical strategies for time management, load planning, and vehicle maintenance, you can operate smarter and achieve more every mile."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1134px] mx-auto">
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              1. Plan Your Routes Ahead
            </h4>
            <p className="text-body pb-3">
              Mapping your routes in advance helps reduce fuel costs, avoid
              traffic delays, and increase on-time deliveries. Incorporate rest
              stops, refueling points, and alternate paths to handle unexpected
              detours efficiently.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              2. Maintain Consistent Communication
            </h4>
            <p className="text-body">
              Keeping in touch with dispatch, brokers, and clients ensures
              smooth operations. Quick updates about delays or early arrivals
              help manage expectations and maintain trust. Use messaging apps or
              trucking platforms to streamline communications.
            </p>

            <Image
              src={blogImg1}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              3. Keep Your Truck in Top Shape
            </h4>
            <p className="text-body">
              Regular maintenance prevents breakdowns and costly repairs. Follow
              a schedule for oil changes, tire inspections, and brake checks. A
              well-maintained truck runs more efficiently and safely, saving
              time and money.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              4. Track Your Expenses
            </h4>
            <p className="text-body">
              Record all operating costs, including fuel, tolls, and repairs.
              Monitoring expenses allows you to identify areas to save and make
              informed financial decisions for your business.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              5. Optimize Load Management
            </h4>
            <p className="text-body">
              Efficiently planning loads and avoiding empty backhauls maximizes
              revenue per mile. Coordinate with trusted brokers or logistics
              partners to ensure steady work while reducing downtime between
              trips.
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
              Efficient trucking operations come from careful planning,
              consistent maintenance, and smart decision-making. By staying
              organized, tracking costs, and optimizing routes, owner-operators
              can boost productivity, reduce stress, and grow their business
              sustainably.
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
