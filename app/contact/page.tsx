import Image from "next/image";
import BannerComponent from "@/components/BannerComponent";
import TitleComponent from "@/components/TitleComponent";
import { contactDetails } from "@/ts/data";
import type { ContactDetailProps } from "@/ts/types";
import contactImage from "../../public/assets/pohots/contact/1.jpg";

export default function page() {
  return (
    <main>
      <BannerComponent title="Divisions That Deliver" />
      <section className="py-12 sm:py-16 lg:py-20 xl:py-[100px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-10 2xl:gap-16">
            <div className="relative h-full w-full lg:rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src={contactImage}
                alt="contact image"
                className="h-full w-full object-cover max-lg:hidden"
              />

              <div className="absolute top-0 left-0 w-full h-full contact-gradient max-lg:hidden"></div>

              <div className="relative lg:absolute bottom-0 left-0 w-full z-20">
                <div className="grid max-[500px]:grid-cols-1 grid-cols-2 gap-2 2xl:gap-4 lg:p-4 2xl:p-7">
                  {contactDetails.map((detail: ContactDetailProps) => (
                    <div
                      key={detail.id}
                      className="flex flex-col gap-1 p-4 bg-light lg:bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-black/15 lg:border-white/30 max-[500px]:first:col-span-1 first:col-span-2"
                    >
                      <span className="text-dark lg:text-white text-xl font-semibold">
                        {detail.lagel}
                      </span>
                      <a
                        href={detail.link}
                        className="text-base text-body lg:text-white/80 hover:lg:text-white transition-colors duration-300 ease-in-out cursor-pointer"
                      >
                        {detail.info}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <TitleComponent title="Get In Touch" subtitle="Contact" />
              <div className="pb-7">
                <p className="text-body pt-3 lg:pt-6">
                  Lorem ipsum dolor sit amet consectetur. Tincidunt in enim eu
                  lacus sapien id nec dui. Vitae nunc sit dignissim condimentum
                  est risus.
                </p>
              </div>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());

                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    alert("✅ Message sent successfully!");
                    e.currentTarget.reset();
                  } else {
                    alert("❌ Failed to send message. Please try again.");
                  }
                }}
                className="grid max-[500px]:grid-cols-1 grid-cols-2 gap-5"
              >
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="firstName"
                    className="text-dark text-lg font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="eg. John"
                    className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 py-3"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="lastName"
                    className="text-dark text-lg font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="eg. Doe"
                    className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 py-3"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="phone"
                    className="text-dark text-lg font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="eg. (555) 123-4567"
                    className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 py-3"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="email"
                    className="text-dark text-lg font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="eg. email@example.com"
                    className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 py-3"
                  />
                </div>
                <div className="flex flex-col gap-3 max-[500px]:col-span-1 col-span-2">
                  <label
                    htmlFor="message"
                    className="text-dark text-lg font-semibold"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message here..."
                    className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 pt-3 pb-32 resize-none"
                  ></textarea>
                </div>
                <div className="w-full sm:w-fit">
                  <button
                    type="submit"
                    className="relative overflow-hidden flex items-center justify-center w-full px-6 py-3 rounded-lg bg-accent-light border border-accent-dark group cursor-pointer"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out"></div>
                    <span className="relative z-10 text-white text-lg font-semibold group-hover:text-accent-light transition-colors duration-300 ease-in-out">
                      Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
