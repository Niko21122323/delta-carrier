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
        title="Mastering Marketing in the Digital Age"
        text="At Delta Carrier Group, every division is tailored to handle a specific kind of freight with precision, care, and efficiency. From dry vans to Conestogas, we're structured for performance."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1134px] mx-auto">
            <h3 className="text-3xl md:text-5xl text-dark font-semibold pb-4 md:pb-6">
              Introduction
            </h3>
            <p className="text-body pb-3">
              Let's be real—marketing today looks nothing like it did a decade
              ago. The game has completely changed, and if you're not evolving
              with it, you're getting left behind. The digital age has flipped
              traditional marketing on its head, giving brands (and creators!)
              more tools, platforms, and opportunities than ever. But with so
              many choices, how do you even know where to start?
            </p>
            <p className="text-body">
              Don't worry—we got you. Here's your quick guide to mastering
              marketing in the digital era.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              Know Your Audience Like They're Your BFF
            </h4>
            <p className="text-body">
              Gone are the days of one-size-fits-all campaigns. Today,
              successful marketing is all about hyper-targeting. Use tools like
              Google Analytics, Meta Insights, or even TikTok analytics to get
              into your audience's head—what they love, what they scroll past,
              and what makes them click.
            </p>

            <Image
              src={blogImg1}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              Pick Your Platforms (And Slay Them)
            </h4>
            <p className="text-body">
              Not every brand needs to be everywhere. If your people are on
              Instagram and TikTok, focus there. B2B brand? LinkedIn and email
              are probably your power moves. Go deep instead of wide—create
              platform-specific content that actually vibes with your audience.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              Content is King—But Authenticity is Queen
            </h4>
            <p className="text-body">
              Forget the hard sell. People are tired of being sold to. Instead,
              build trust with real, valuable content that actually resonates.
              Whether it's behind-the-scenes videos, relatable memes that hit,
              or helpful how-tos—show up as a real human behind the brand, not
              just another logo in their feed.
            </p>

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              Learn to Love the Data
            </h4>
            <p className="text-body">
              We know, analytics can feel like a snoozefest. But the numbers
              tell a story. Track what's working (and what flops), then adjust.
              A/B test your headlines, play with post timing, and tweak your
              strategy based on real results—not vibes alone.
            </p>

            <Image
              src={blogImg2}
              alt="blog image"
              className="h-full w-full object-cover max-h-[400px] my-6 md:my-8 rounded-lg sm:rounded-xl md:rounded-2xl"
            />

            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pb-4">
              Use the Tools, Don't Let Them Use You
            </h4>
            <p className="text-body">
              From email automation to AI-powered copywriting, there are tools
              that can save you hours and seriously level up your workflow. Just
              don't let automation strip the soul from your marketing. Use tech
              to boost creativity, streamline the boring stuff, and scale
              smarter—not to replace the human connection.
            </p>
            <h4 className="text-xl md:text-2xl text-dark/80 font-semibold pt-6 pb-4">
              Final Thoughts
            </h4>
            <p className="text-body">
              Mastering digital marketing isn't about doing everything—it's
              about doing the right things for your audience, with authenticity,
              intention, and a solid strategy. Stay curious, test often, learn
              from the data, and don't be afraid to pivot. At the end of the
              day, it's all about creating real value, not just adding to the
              noise.
            </p>
            <p className="text-body pt-1">You've got this.</p>

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
