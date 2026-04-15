"use client";

import Image from "next/image";
import { useState } from "react";
import BannerComponent from "@/components/BannerComponent";
import TitleComponent from "@/components/TitleComponent";
import { contactDetails } from "@/ts/data";
import type { ContactDetailProps } from "@/ts/types";
import contactImage from "../../public/assets/pohots/contact/1.jpg";

const jobDropdown = [
  { id: 1, title: "Recruiting" },
  { id: 2, title: "Safety" },
  { id: 3, title: "Load Offerings" },
  { id: 4, title: "Operations" },
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
                  Have questions about partnering with Delta Carrier Group? Want
                  to learn more about our lanes, pay, or support programs? Send
                  us a message and our team will connect with you to help you
                  find the freedom you're looking for.
                </p>
              </div>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus({ type: null, message: "" });

                  const form = e.currentTarget;
                  const formData = {
                    firstName: (
                      form.elements.namedItem("firstName") as HTMLInputElement
                    ).value,
                    lastName: (
                      form.elements.namedItem("lastName") as HTMLInputElement
                    ).value,
                    phone: (
                      form.elements.namedItem("phone") as HTMLInputElement
                    ).value,
                    email: (
                      form.elements.namedItem("email") as HTMLInputElement
                    ).value,
                    department: (
                      form.elements.namedItem("department") as HTMLSelectElement
                    ).value,
                    message: (
                      form.elements.namedItem("message") as HTMLTextAreaElement
                    ).value,
                  };

                  try {
                    const res = await fetch(
                      "https://deltacarriergroup.com/contact-form.php",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                      }
                    );
                    // Log raw response first
                    const rawText = await res.text();
                    // Try to parse JSON
                    let data;
                    try {
                      data = JSON.parse(rawText);
                    } catch (err) {
                      console.error("Failed to parse JSON:", err);
                      setSubmitStatus({
                        type: "error",
                        message: "Server returned invalid JSON. Check console.",
                      });
                      return;
                    }

                    if (data.success) {
                      setSubmitStatus({
                        type: "success",
                        message:
                          "Message sent successfully! We'll get back to you soon.",
                      });
                      form.reset();
                      setTimeout(
                        () => setSubmitStatus({ type: null, message: "" }),
                        5000
                      );
                    } else {
                      setSubmitStatus({
                        type: "error",
                        message:
                          data.message ||
                          "Failed to send message. Check console.",
                      });
                    }
                  } catch (error) {
                    console.error("Fetch error:", error);
                    setSubmitStatus({
                      type: "error",
                      message: "An error occurred. Check console for details.",
                    });
                  } finally {
                    setIsSubmitting(false);
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
                    required
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
                    required
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
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="eg. (555) 123-4567"
                    required
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
                    required
                    className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 py-3"
                  />
                </div>
                <div className="max-[500px]:col-span-1 col-span-2 flex flex-col gap-3">
                  <label
                    htmlFor="department"
                    className="text-dark text-lg font-semibold"
                  >
                    Which department are you trying to reach?
                  </label>
                  <div className="text-body border border-[#C4C5C8] rounded-sm px-4 py-3 w-full">
                    <select
                      name="department"
                      id="department"
                      required
                      className="w-full focus:outline-none"
                    >
                      <option value="">Select a position</option>
                      {jobDropdown.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    required
                    rows={8}
                    className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 py-3 resize-none"
                  ></textarea>
                </div>

                {submitStatus.type && (
                  <div className="max-[500px]:col-span-1 col-span-2">
                    <div
                      className={`p-4 rounded-lg border ${
                        submitStatus.type === "success"
                          ? "bg-green-50 border-green-300 text-green-800"
                          : "bg-red-50 border-red-300 text-red-800"
                      }`}
                    >
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <div className="w-full sm:w-fit">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden flex items-center justify-center w-full px-6 py-3 rounded-lg bg-accent-light border border-accent-dark group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out"></div>
                    <span className="relative z-10 text-white text-lg font-semibold group-hover:text-accent-light transition-colors duration-300 ease-in-out">
                      {isSubmitting ? "Sending..." : "Send Message"}
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
