import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { services } from "@/ts/data";
import mailIcon from "../public/assets/icons/mail-stroke.svg";
import phoneIcon from "../public/assets/icons/phone-stroke.svg";

const AsideService = () => {
  return (
    <aside className="flex flex-col gap-6 sticky top-32">
      <div className="bg-light p-3 xl:p-4 2xl:p-5 rounded-xl border border-dark/15">
        <h4 className="text-dark text-3xl font-semibold pb-3">
          Other Services
        </h4>
        <p className="text-body pb-5">
          Lorem ipsum dolor sit amet consectetur. Vitae vestibulum nec nec erat.
          Eget et diam etiam.
        </p>
        <div className="flex flex-col gap-2 pt-5 border-t border-[#E1E1E1]">
          {services.map((data) => (
            <div
              key={data.id}
              className="flex items-center gap-3 bg-white rounded-md p-3 overflow-hidden group"
            >
              <div className="flex items-center justify-center size-10 bg-light border border-black/15 rounded-sm">
                <data.icon color="fill-body group-hover:fill-accent-light transition-colors duration-300 ease-in-out" />
              </div>
              <div className="">
                <div className="text-base translate-y-1/2 text-body group-hover:translate-y-0 group-hover:text-dark group-hover:font-medium transition-all duration-300 ease-in-out">
                  {data.title}
                </div>
                <Link
                  href={data.link}
                  className="flex items-center gap-2 translate-y-[150%] group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                >
                  <span className="text-accent-light">View Service</span>
                  <GoArrowRight className="text-accent-light" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-light p-3 xl:p-4 2xl:p-5  rounded-xl border border-dark/15">
        <h4 className="text-dark text-3xl font-semibold pb-3">
          Ask Me a Question
        </h4>
        <p className="text-body pb-5">
          Let’s start the conversation. I’ll get back to you within 1–2 business
          days.
        </p>
        <form action="" className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <label htmlFor="phone" className="text-dark text-lg font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="eg. (000) 000-0000"
              className="bg-white px-4 py-3 rounded-sm outline-none text-body placeholder:text-body border border-black/15"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-dark text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="eg. email@example.com"
              className="bg-white px-4 py-3 rounded-sm outline-none text-body placeholder:text-body border border-black/15"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-dark text-lg font-semibold"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Write your message here..."
              className="bg-white px-4 py-3 rounded-sm outline-none text-body placeholder:text-body border border-black/15"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-accent-light px-6 py-3 text-white font-semibold text-lg hover:bg-white hover:text-accent-light border border-accent-light rounded-lg cursor-pointer transition-all duration-300 ease-in-out mt-3"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="p-3 xl:p-4 2xl:p-5  rounded-xl bg-accent-light">
        <h4 className="text-white text-3xl font-semibold pb-3">
          Reach Out Anytime
        </h4>
        <p className="text-white/70 pb-5">
          Have questions or not sure where to start? I’m here to help—no
          pressure, no commitment.
        </p>

        <div className="flex items-center gap-4 pt-6">
          <div className="flex items-center justify-center bg-white size-10 rounded-md">
            <Image src={phoneIcon} alt="icon" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold">Vall Or Text:</span>
            <Link
              href="tel:8134210172"
              className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out"
            >
              (813) 421-0172
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <div className="flex items-center justify-center bg-white size-10 rounded-md">
            <Image src={mailIcon} alt="icon" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold">Email Me At:</span>
            <Link
              href="mailto:drmann@drbeatrizmanntherapy.com"
              className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out"
            >
              drmann@drbeatrizmanntherapy.com
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideService;
