import React from "react";
import BannerComponent from "@/components/BannerComponent";
import JobApplicationForm from "@/components/JobApplicationForm";

const page = () => {
  return (
    <main>
      <BannerComponent
        title="Apply for a Job"
        text="Take the first step toward joining our team by filling out the application form below. Share your details and experience, and we’ll get in touch with you soon."
      />
      <JobApplicationForm type="in-office" />
    </main>
  );
};

export default page;
