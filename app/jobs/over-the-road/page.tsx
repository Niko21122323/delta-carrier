"use client";

import BannerComponent from "@/components/BannerComponent";
import FaqSection from "@/components/FaqSection";
import JobsSection from "@/components/JobsSection";
import TestimonialsSectionDark from "@/components/TestimonialsSectionDark";

export default function page() {
  return (
    <main>
      <BannerComponent
        title="Over-the-Road Opportunities"
        text="Experience the open road with Delta Carrier Group. As an over-the-road driver, you’ll enjoy the independence of long-haul routes, reliable freight, and the support of a team that keeps you moving forward every mile."
      />
      <JobsSection type="over-the-road" />
      <TestimonialsSectionDark />
      <FaqSection />
    </main>
  );
}
