"use client";

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="mt-24">
      <section className="pt-10 pb-0 md:-mt-28 bg-gradient-to-b from-[#728be6] to-white overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="pb-10 ml-10">
              <h1 className="text-5xl md:text-7xl font-bold pb-2 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Privacy Policy
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Learn how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-t from-[#b4d1f7] to-[#FFFFFF] flex justify-center items-center">
        <div className="container max-w-[800px] mx-auto px-6 bg-white shadow-xl rounded-xl p-10 border-gray-1000">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#001E80]">Privacy Policy</h2>
            <p className="text-gray-700">
              <strong>1. Introduction</strong>
              <br />
              SketchItUp values your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>
            <p className="text-gray-700">
              <strong>2. Data Collected</strong>
              <br />
              We collect the following data:
              <br />
              • Personal Information: Name, email, phone number, and company details.
              <br />
              • Payment Information: Processed securely via third-party payment gateways.
              <br />
              • Website Usage Data: Cookies, analytics, and tracking technologies.
            </p>
            <p className="text-gray-700">
              <strong>3. How Data is Used</strong>
              <br />
              We use collected data to:
              <br />
              • Deliver and improve our Services.
              <br />
              • Communicate with users regarding projects and inquiries.
              <br />
              • Send newsletters, promotional offers, and updates (users can opt out).
            </p>
            <p className="text-gray-700">
              <strong>4. Cookies & Tracking Technologies</strong>
              <br />
              • We use Google Analytics, Facebook Pixels, and other tracking tools for marketing insights.
            </p>
            <p className="text-gray-700">
              <strong>5. Data Sharing & Third-Party Services</strong>
              <br />
              • We do not sell user data.
              <br />
              • Data may be shared with partners such as payment processors, hosting providers, and marketing tools for service execution.
            </p>
            <p className="text-gray-700">
              <strong>6. Security Measures</strong>
              <br />
              • We use SSL encryption, secure servers, and restricted data access to protect user information.
            </p>
            <p className="text-gray-700">
              <strong>7. User Rights & Data Control</strong>
              <br />
              • Users can request data deletion, modification, or export by contacting SketchItUp.
            </p>
            <p className="text-gray-700">
              <strong>8. Data Retention Policy</strong>
              <br />
              • We retain data only for as long as necessary for business and legal purposes.
            </p>
            <p className="text-gray-700">
              <strong>9. Third-Party Links</strong>
              <br />
              • Our Website may contain external links. SketchItUp is not responsible for their privacy policies.
            </p>
            <p className="text-gray-700">
              <strong>10. Children’s Privacy</strong>
              <br />
              • We do not cater to users under 18 years old or knowingly collect their data.
            </p>
            <p className="text-gray-700">
              <strong>11. Privacy Policy Updates</strong>
              <br />
              • Any changes to this policy will be communicated via email or website notification.
            </p>
            <p className="text-gray-700">
              For further inquiries, please contact us at <a href="mailto:sketchitup.official@gmail.com" className="text-blue-500">sketchitup.official@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
