import React from "react";

import "../legal-styles.css";

import BannerComponent from "@/components/BannerComponent";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <BannerComponent
        title="Privacy Policy"
        text="At Delta Carrier Group, protecting your personal information is as important as keeping freight moving safely. We value your trust and are committed to transparency in how we collect, use, and safeguard your data."
      />
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-[1024px] mx-auto flex flex-col gap-6 xl:gap-8">
            <div className="">
              <h3>Introduction</h3>
              <p>
                Welcome to Delta Carrier (“we”, “us”, “our”). We operate the
                website at{" "}
                <Link
                  href="/"
                  className="text-dark underline hover:text-accent-light transition-colors duration-300 ease-in-out"
                >
                  delta-carrier.netlify.app
                </Link>
                . We respect your privacy and are committed to protecting the
                information you share with us. This Privacy Policy explains how
                we collect, use, disclose, and protect your personal
                information, and your rights in relation to it.
              </p>
              <p className="pt-2">
                By accessing or using the Site or otherwise providing
                information to us, you agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </div>
            <div className="">
              <h3>Information We Collect</h3>
              <p>We may collect the following categories of information:</p>
              <ul>
                <li>
                  <p>Personal Information You Provide</p>
                </li>
                <li>
                  <p>Name</p>
                </li>
                <li>
                  <p>Email address</p>
                </li>
                <li>
                  <p>Phone number</p>
                </li>
                <li>
                  <p>Postal address</p>
                </li>
                <li>
                  <p>Company name / business information</p>
                </li>
                <li>
                  <p>
                    Application / driver credentials (e.g. CDL experience,
                    driving record)
                  </p>
                </li>
                <li>
                  <p>
                    Any other information you provide via contact forms, job
                    applications, or registration
                  </p>
                </li>
                <li>
                  <p>Technical &amp; Usage Information</p>
                </li>
                <li>
                  <p>IP address</p>
                </li>
                <li>
                  <p>Browser type &amp; version</p>
                </li>
                <li>
                  <p>Device type</p>
                </li>
                <li>
                  <p>Operating system</p>
                </li>
                <li>
                  <p>Pages visited, time spent, referring/exit pages</p>
                </li>
                <li>
                  <p>Clickstream data</p>
                </li>
                <li>
                  <p>Cookies and similar tracking technologies</p>
                </li>
                <li>
                  <p>Third-Party / External Sources</p>
                </li>
                <li>
                  <p>Analytics services (e.g. Google Analytics)</p>
                </li>
                <li>
                  <p>
                    Public databases or motor vehicle records (as part of driver
                    screening)
                  </p>
                </li>
                <li>
                  <p>Payment processors (if payments are made)</p>
                </li>
              </ul>
            </div>
            <div className="">
              <h3>How We Use Your Information</h3>
              <p>We use collected information for purposes such as:</p>
              <ul>
                <li>
                  <p>Responding to your inquiries, requests, or applications</p>
                </li>
                <li>
                  <p>Verifying credentials, driver screening, and compliance</p>
                </li>
                <li>
                  <p>Operating, maintaining, and improving the Site</p>
                </li>
                <li>
                  <p>
                    Sending updates, newsletters, or marketing communications
                    (if you opt in)
                  </p>
                </li>
                <li>
                  <p>
                    Compliance with legal obligations (e.g. DOT and trucking
                    regulations)
                  </p>
                </li>
                <li>
                  <p>
                    Detecting, preventing, and responding to fraud or security
                    issues
                  </p>
                </li>
                <li>
                  <p>
                    Any other use disclosed to you at the time of collection
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <h3>Cookies & Tracking Technologies</h3>
              <p>
                We use cookies, web beacons, and similar technologies to collect
                information, improve user experience, and customize content. You
                may have the option to disable or block cookies via your browser
                settings, but that may affect how the Site functions.
              </p>
            </div>
            <div className="">
              <h3>Disclosure of Your Information</h3>
              <p className="">We may share your information with:</p>
              <ul>
                <li>
                  <p>Responding to your inquiries, requests, or applications</p>
                </li>
                <li>
                  <p>Verifying credentials, driver screening, and compliance</p>
                </li>
                <li>
                  <p>Operating, maintaining, and improving the Site</p>
                </li>
                <li>
                  <p>
                    Sending updates, newsletters, or marketing communications
                    (if you opt in)
                  </p>
                </li>
                <li>
                  <p>
                    Compliance with legal obligations (e.g. DOT and trucking
                    regulations)
                  </p>
                </li>
                <li>
                  <p>
                    Detecting, preventing, and responding to fraud or security
                    issues
                  </p>
                </li>
                <li>
                  <p>
                    Any other use disclosed to you at the time of collection
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <h3>Data Retention</h3>
              <p>
                We will retain your personal information for as long as
                necessary to fulfill the purposes in this Privacy Policy, comply
                with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </div>
            <div className="">
              <h3>Your Rights</h3>
              <p>
                Depending on your jurisdiction, you may have rights including:
              </p>
              <ul>
                <li>
                  <p>Access to your personal information</p>
                </li>
                <li>
                  <p>Correction or updating of inaccurate or incomplete data</p>
                </li>
                <li>
                  <p>Deletion of your personal data</p>
                </li>
                <li>
                  <p>Objection to or restriction of processing</p>
                </li>
                <li>
                  <p>Portability of your data</p>
                </li>
                <li>
                  <p>
                    Withdrawing consent where processing is based on consent
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <h3>Security</h3>
              <p>
                We implement reasonable technical and organizational measures to
                protect personal information from unauthorized access, loss,
                misuse, or alteration. However, no method of transmission or
                storage is 100% secure.
              </p>
            </div>
            <div className="">
              <h3>Children’s Privacy</h3>
              <p>
                The Site is not intended for users under the age of 13 (or the
                minimum age under your applicable jurisdiction). We do not
                knowingly collect personal information from minors. If you
                believe a child provided us with information, please contact us
                and we will delete it.
              </p>
            </div>
            <div className="">
              <h3>International Data Transfers</h3>
              <p>
                If you are located outside the U.S., your data may be
                transferred to, stored, or processed in the U.S. or other
                jurisdictions. By using the Site, you consent to such transfers
                under this Privacy Policy.
              </p>
            </div>
            <div className="">
              <h3>Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. The
                “Effective Date” above is the date of the latest revision. We
                will notify you of significant changes (e.g. via email or
                prominent notice on the Site).
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
