import React from "react";

import "../legal-styles.css";

import BannerComponent from "@/components/BannerComponent";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <BannerComponent
        title="Terms and Conditions"
        text="At Delta Carrier Group, we are committed to providing a safe, reliable, and professional service. By using our site and services, you agree to comply with our policies and understand your responsibilities as a user, ensuring a trustworthy and transparent experience for everyone."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1024px] mx-auto flex flex-col gap-6 xl:gap-8">
            <p>
              <strong>Effective Date: October 01, 2025</strong>
            </p>
            <div className="">
              <h3>Acceptance of Terms</h3>
              <p>
                By accessing or using{" "}
                <Link
                  href="/"
                  className="text-dark underline hover:text-accent-light transition-colors duration-300 ease-in-out"
                >
                  delta-carrier.netlify.app
                </Link>
                , you agree to these Terms. If you do not agree, do not use the
                Site.
              </p>
            </div>
            <div className="">
              <h3>Services</h3>
              <p>
                We provide logistics, carrier, and driver‑related services. We
                may modify or discontinue any part of the Site without notice.
              </p>
            </div>
            <div className="">
              <h3>Eligibility</h3>
              <p>
                You must be at least 18 years old to use the Site and services.
              </p>
            </div>
            <div className="">
              <h3>Intellectual Property</h3>
              <p>
                All content is owned by Delta Carrier Group or its licensors.
                You may not reproduce or exploit without permission.
              </p>
            </div>
            <div className="">
              <h3>Applications & Driver Enrollment</h3>
              <ul>
                <li>
                  <p>You represent that your information is accurate.</p>
                </li>
                <li>
                  <p>You authorize background checks and verifications.</p>
                </li>
                <li>
                  <p>We may accept or reject applications at our discretion.</p>
                </li>
              </ul>
            </div>
            <div className="">
              <h3>Limitation of Liability</h3>
              <p>
                The Site is provided “as is.” We disclaim warranties and limit
                liability to amounts paid by you (if any) in the last 12 months.
              </p>
            </div>

            <div className="">
              <h3>Indemnification</h3>
              <p>
                You agree to indemnify and hold harmless Delta Carrier Group and
                affiliates from claims arising from your use of the Site.
              </p>
            </div>

            <div className="">
              <h3>Termination</h3>
              <p>
                We may suspend or terminate your access at any time without
                notice if you violate these Terms.
              </p>
            </div>

            <div className="">
              <h3>Governing Law</h3>
              <p>
                These Terms are governed by Illinois law, and disputes must be
                resolved in Illinois courts.
              </p>
            </div>

            <div className="">
              <h3>Changes to Terms</h3>
              <p>
                We may update these Terms and post them with a new Effective
                Date. Continued use means acceptance.
              </p>
            </div>

            <div className="">
              <h3>Contact Us</h3>
              <p>
                If you have questions, want to access or correct your data, or
                lodge a complaint, contact:
              </p>
              <p className="pt-4 pb-1">
                <strong>Delta Carrier</strong>
              </p>
              <p>
                <strong>Address:</strong> 1032 Moen Ave (2nd Floor) Suite #2,
                Rockdale, IL 60436
              </p>
              <p>
                <strong>Phone: </strong>
                <Link
                  href="tel:17087464448"
                  className="hover:text-accent-light transition-colors duration-300 ease-in-out"
                >
                  1-708-746-4448
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
