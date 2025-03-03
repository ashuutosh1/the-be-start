"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../../../public/Landing-assets/term-logo-light.png";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { FaBullhorn, FaGoogle, FaAd, FaShieldAlt } from "react-icons/fa";

function MarketingAdsPolicies() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-md:p-4">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="bemaxo-logo" className="max-w-40 h-auto my-4" />
            <Link href={"/"}>
              <span className="text-black font-bold underline flex items-center gap-2">
                <IoIosArrowBack /> Home
              </span>
            </Link>
          </div>

          <div className="p-4 mx-auto md:pt-10 space-y-8">
            <span className="max-md:flex-col max-md:text-xl max-md:text-center text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FaBullhorn className="text-green-600" />
              <span> Marketing &amp; Ads Policies</span>
            </span>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaGoogle className="text-purple-600" /> Google Ads Only
              </span>
              <p className="text-gray-600">
                Bemaxo.com exclusively displays advertisements through Google Ads. We do not allow third-party ad networks, direct marketing, or external ad placements on our platform. Our advertising system follows Google&apos;s policies to ensure quality and compliance.
              </p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaAd className="text-purple-600" /> Ad Content Standards
              </span>
              <p className="text-gray-600">
                All advertisements displayed on Bemaxo.com comply with Google Ads policies. We strictly prohibit deceptive, harmful, or inappropriate ads, including those promoting restricted content, false claims, or violating community standards.
              </p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaShieldAlt className="text-purple-600" /> User Privacy &amp; Compliance
              </span>
              <p className="text-gray-600">
                We respect user privacy and ensure that all ads comply with Google&rsquo;s data protection and transparency policies. Any cookies or tracking mechanisms used align with GDPR, CCPA, and other relevant regulations.
              </p>
            </section>
          </div>

          <section>
            <span className="text-xl font-semibold text-gray-800 mb-4">Contact Us</span>
            <div className="bg-gray-50 rounded-lg p-6 flex max-md:flex-col items-center justify-between">
              <p className="text-gray-600">For advertising-related inquiries, contact us at:</p>
              <a href="mailto:support@bemaxo.com" className="inline-flex items-center text-blue-600 hover:text-blue-500">
                support@bemaxo.com
              </a>
            </div>
            <Link href={"/"}>
              <div className="text-white font-bold underline flex items-center gap-2 mt-4 justify-center border-2 border-purple-600 p-2 rounded-full bg-purple-400">
                <IoIosArrowBack /> Home
              </div>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MarketingAdsPolicies;
