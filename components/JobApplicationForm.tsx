"use client";

import React, { useState } from "react";
import Image from "next/image";
import TitleComponent from "@/components/TitleComponent";
import { contactDetails, jobs } from "@/ts/data";
import type { ContactDetailProps } from "@/ts/types";
import contactImage from "../public/assets/pohots/contact/1.jpg";
import type { JobProps } from "@/ts/types";

interface JobsSectionProps {
  type?: "in-office" | "other";
}

const JobApplicationForm = ({ type = "in-office" }: JobsSectionProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    position: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Replace this URL with your Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz1f3viGajxmNx9UOMUYu9h9j4HOr0VKVPv1MGnscyNCxC5N-VE2hXftZqDHZ6nvdU/exec";

  const filteredJobs = jobs.filter((job: JobProps) => {
    if (type === "in-office") {
      return job.variant === "in-office";
    } else {
      return job.variant !== "in-office";
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For now, just note the resume filename (skip Cloudinary to avoid errors)
      let resumeInfo = "";
      if (resumeFile) {
        resumeInfo = `Resume file: ${resumeFile.name} (${(
          resumeFile.size / 1024
        ).toFixed(1)}KB)`;
      }

      // Prepare data for Google Sheets
      const submissionData = {
        ...formData,
        resumeUrl: resumeInfo,
      };

      // Create a hidden iframe to submit the form without page redirect
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.name = "hidden_iframe";
      document.body.appendChild(iframe);

      // Use form submission method to avoid CORS issues
      const form = document.createElement("form");
      form.method = "POST";
      form.action = GOOGLE_SCRIPT_URL;
      form.target = "hidden_iframe"; // Submit to hidden iframe
      form.style.display = "none";

      // Add form data as hidden inputs
      Object.entries(submissionData).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      });

      // Add to page, submit, then remove
      document.body.appendChild(form);
      form.submit();

      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      // Show success message
      setSubmitStatus({
        type: "success",
        message: "Application submitted successfully! We'll be in touch soon.",
      });

      // Reset form after a short delay
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          position: "",
          message: "",
        });
        setResumeFile(null);

        // Reset file input
        const fileInput = document.getElementById("resume") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      }, 1000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 xl:py-[100px]"
      id="application-form"
    >
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
            <TitleComponent title="Join Our Team" subtitle="Apply" />
            <div className="pb-7">
              <p className="text-body pt-3 lg:pt-6">
                Complete this form to be considered for current and future
                opportunities.
              </p>
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
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
                  value={formData.firstName}
                  onChange={handleInputChange}
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
                  value={formData.lastName}
                  onChange={handleInputChange}
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
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="eg. (555) 123-4567"
                  autoComplete="tel"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="eg. email@example.com"
                  required
                  className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 py-3"
                />
              </div>

              <div className="max-[500px]:col-span-1 col-span-2 flex flex-col gap-3">
                <label
                  htmlFor="position"
                  className="text-dark text-lg font-semibold"
                >
                  Position Applied For
                </label>
                <div className="text-body border border-[#C4C5C8] rounded-sm px-4 py-3 w-full">
                  <select
                    name="position"
                    id="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full focus:outline-none"
                  >
                    <option value="">Select a position</option>
                    {filteredJobs.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 max-[500px]:col-span-1 col-span-2">
                <label
                  htmlFor="resume"
                  className="text-dark text-lg font-semibold"
                >
                  Upload Your Resume
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="block w-full text-sm text-body file:text-dark file:mr-4 file:py-3 file:px-6 file:rounded-md file:border-dark/10 file:border file:text-sm file:font-semibold file:bg-light hover:file:bg-white hover:file:text-accent-light cursor-pointer file:cursor-pointer file:transition-colors file:duration-300 file:ease-in-out"
                />
                {resumeFile && (
                  <p className="text-sm text-gray-600">
                    Selected: {resumeFile.name} (
                    {(resumeFile.size / 1024).toFixed(1)}KB)
                  </p>
                )}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  className="text-body placeholder:text-body outline-accent-light focus:outline-1 border border-[#C4C5C8] rounded-sm px-4 pt-3 pb-32 resize-none"
                ></textarea>
              </div>

              <div className="w-full sm:w-fit">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative overflow-hidden flex items-center justify-center w-full px-6 py-3 rounded-lg bg-accent-light border border-accent-dark group cursor-pointer ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out"></div>
                  <span className="relative z-10 text-white text-lg font-semibold group-hover:text-accent-light transition-colors duration-300 ease-in-out">
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobApplicationForm;
