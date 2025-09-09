"use client";

import BannerComponent from "@/components/BannerComponent";
import FaqSection from "@/components/FaqSection";
import JobApplicationForm from "@/components/JobApplicationForm";
import JobsSection from "@/components/JobsSection";
import TestimonialsSectionDark from "@/components/TestimonialsSectionDark";

export default function page() {
  return (
    <main>
      <BannerComponent
        title="In-Office Jobs That We Offer"
        text="At Delta Carrier Group, we offer owner-operators the freedom to choose their routes, run their own schedule, and drive with confidence. Our nationwide network and dedicated support team ensure you're never alone on the road."
      />
      <JobsSection type="in-office" />
      <TestimonialsSectionDark />
      <FaqSection />
      <JobApplicationForm type="in-office" />
    </main>
  );
}
