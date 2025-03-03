"use client";

import Image from 'next/image';
import React from 'react';
import Logo from "../../../../public/Landing-assets/term-logo-light.png";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { FaShieldAlt, FaUserSecret, FaShareAlt, FaLock, FaUserCheck, FaCookieBite, FaSyncAlt } from "react-icons/fa";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='bemaxo-logo' className='max-w-40 h-auto my-4' />
            <Link href={'/'}>
              <span className='text-black font-bold underline flex items-center gap-2'>
                <IoIosArrowBack /> Home
              </span>
            </Link>
          </div>

          <div className="p-4 mx-auto  md:pt-10 space-y-8">
            <span className="max-md:flex-col max-md:text-xl max-md:text-center text-3xl font-bold text-gray-900 flex items-center gap-2 ">
              <FaShieldAlt className="text-blue-600 " /> 
              <span>Privacy Policy</span>
            </span>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaUserSecret className="text-purple-600" /> Introduction
              </span>
              <p className="text-gray-600">Welcome to Bemaxo.com. Your privacy is of the utmost importance to us, and we are committed to safeguarding your personal information. This Privacy Policy explains in detail how we collect, use, store, and protect your data when you interact with our website, services, and features.

                We understand the importance of privacy in the digital age, and we aim to be as transparent as possible in explaining our data handling practices. By using Bemaxo.com, you consent to the collection and use of your personal data as outlined in this policy. If you do not agree with our policies or practices, we advise you to discontinue the use of our services.

                Our commitment to privacy goes beyond compliance with regulations; we strive to provide a secure and user-friendly experience. Whether you are simply browsing our platform or actively engaging with our features, your data is handled responsibly and with the highest level of security.

                If you have any concerns, questions, or require clarification regarding this Privacy Policy, we encourage you to reach out to us.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaSyncAlt className="text-purple-600" /> How We Use Your Information
              </span>
              <p className="text-gray-600">We collect and use your data for several purposes, all aimed at enhancing your experience and improving the quality of our services. The information we gather helps us understand user preferences, provide personalized recommendations, and develop new features.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaShareAlt className="text-purple-600" /> Sharing of Data
              </span>
              <p className="text-gray-600">At Bemaxo.com, we respect your privacy and do not sell, trade, or rent your personal data to third parties. However, there are certain circumstances in which we may share limited information with trusted partners or service providers to facilitate the smooth operation of our platform.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaLock className="text-purple-600" /> Data Security
              </span>
              <p className="text-gray-600">We take security seriously and implement robust measures to protect your data from unauthorized access, misuse, alteration, and loss. While we strive to use industry-standard security practices, it is important to acknowledge that no online platform can guarantee absolute security due to inherent risks associated with internet-based systems.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaUserCheck className="text-purple-600" /> Your Rights
              </span>
              <p className='text-gray-600'>As a user of Bemaxo.com, you have certain rights regarding your personal data. We are committed to providing you with control over your information and ensuring transparency in our data-handling practices.</p>
              <ul className="list-disc ml-8 space-y-2 text-gray-600">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of certain data collection practices.</li>
              </ul>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaCookieBite className="text-purple-600" /> Cookies & Tracking
              </span>
              <p className="text-gray-600">To enhance user experience, Bemaxo.com utilizes cookies and similar tracking technologies to analyze website traffic, personalize content, and optimize performance.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-purple-50 p-2 rounded-xl my-2">
                <FaSyncAlt className="text-purple-600" /> Policy Updates
              </span>
              <p className="text-gray-600">We may update this Privacy Policy periodically to reflect changes in our data practices, regulatory requirements, or advancements in security protocols. Any modifications will be posted on this page, and we encourage users to review the policy regularly to stay informed.</p>
            </section>
          </div>

          <section>
            <span className="text-xl font-semibold text-gray-800 mb-4">Contact Us</span>
            <div className="bg-gray-50 rounded-lg p-6 flex max-md:flex-col items-center justify-between">
              <p className="text-gray-600">For privacy-related inquiries, reach us at:</p>
              <a href="mailto:support@bemaxo.com" className="inline-flex items-center text-blue-600 hover:text-blue-500">
                support@bemaxo.com
              </a>
            </div>
            <Link href={'/'}>
              <div className='text-white font-bold underline flex items-center gap-2 mt-4 justify-center border-2 border-purple-600 p-2 rounded-full bg-purple-400'>
                <IoIosArrowBack /> Home
              </div>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
