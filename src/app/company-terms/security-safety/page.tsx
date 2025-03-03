"use client";

import Image from 'next/image';
import React from 'react';
import Logo from "../../../../public/Landing-assets/term-logo-light.png";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import {FaLock, FaUserShield, FaDatabase, FaBug, FaUserSecret } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function SafetySecurity() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 max-lg:px-0 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-lg:p-4">
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='bemaxo-logo' className='max-w-40 h-auto my-4' />
            <Link href={'/'}>
              <span className='text-black font-bold underline flex items-center gap-2'>
                <IoIosArrowBack /> Home
              </span>
            </Link>
          </div>

          <div className="p-4 mx-auto md:pt-10 space-y-8">
            <span className="max-md:flex-col max-md:text-xl max-md:text-center text-3xl font-bold text-gray-900 flex items-center gap-2">
              <MdOutlineSecurity className="text-red-600 max-md:text-3xl" />
              <span>Safety & Security Policy</span>
            </span>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaUserShield className="text-purple-600" /> Our Commitment
              </span>
              <p className="text-gray-600">At Bemaxo.com, we prioritize the safety and security of our users. We implement advanced security protocols to protect your data, maintain platform integrity, and ensure a safe user experience.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaLock className="text-purple-600" /> Data Protection
              </span>
              <p className="text-gray-600">We use encryption, secure servers, and multi-factor authentication (MFA) to safeguard your personal information against unauthorized access, misuse, and loss.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaDatabase className="text-purple-600" /> Secure Storage
              </span>
              <p className="text-gray-600">All sensitive user data is securely stored in compliance with industry standards, ensuring that your information remains confidential and protected.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaBug className="text-purple-600" /> Threat Monitoring
              </span>
              <p className="text-gray-600">We actively monitor and mitigate security threats using AI-driven detection mechanisms, regular audits, and penetration testing.</p>
            </section>

            <section>
              <span className="text-xl font-semibold text-gray-800 flex items-center gap-2 bg-gray-50 p-2 rounded-xl my-2">
                <FaUserSecret className="text-purple-600" /> User Responsibility
              </span>
              <p className='text-gray-600'>We encourage users to maintain strong passwords, enable MFA, and report suspicious activities to ensure a safe digital environment for everyone.</p>
            </section>

          </div>

          <section>
            <span className="text-xl font-semibold text-gray-800 mb-4">Contact Us</span>
            <div className="bg-gray-50 rounded-lg p-6 flex max-md:flex-col items-center justify-between">
              <p className="text-gray-600">For security concerns, contact us at:</p>
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

export default SafetySecurity;
