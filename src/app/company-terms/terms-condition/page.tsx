"use client"

import Image from 'next/image';
import React from 'react';
import Logo from "../../../../public/Landing-assets/term-logo-light.png"
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';




function TermsPage() {


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 max-lg:px-0 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-lg:p-4">
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='bemaxo-logo' className='max-w-40 h-auto my-4' />
            <Link href={"/"}><span className='text-black font-bold underline flex items-center gap-2'><IoIosArrowBack />Home</span></Link>

          </div>


          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>


          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <div className="prose text-gray-600">
              <p>By accessing and using Bemaxo.com, you accept and agree to be bound by these terms. Continued use of the platform constitutes acceptance of all terms and policies, including our Privacy Policy.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. User Conduct</h2>
            <div className="prose text-gray-600">
              <p>Users must behave responsibly. Prohibited actions include, but are not limited to:</p>
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>Uploading or sharing copyrighted content without authorization.</li>
                <li>Posting adult, violent, misleading, or illegal content.</li>
                <li>Harassment, bullying, impersonation, or abusive behavior.</li>
                <li>Engaging in fraudulent activities, spamming, or phishing.</li>
                <li>Distributing misinformation or AI-generated misleading content.</li>
                <li>Violating any applicable laws or regulations.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. User Content & Intellectual Property</h2>
            <div className="prose text-gray-600">
              <p>Users retain ownership of their content but grant Bemaxo.com a license to display, distribute, and promote it. We may remove content violating our policies.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Privacy & Data Collection</h2>
            <div className="prose text-gray-600">
              <p>We collect user data in accordance with our Privacy Policy. Users should review our policy to understand how their information is stored, used, and shared.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Limitations of Liability</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-yellow-700">Bemaxo.com shall not be liable for any damages, including but not limited to data loss, revenue loss, or third-party interactions on the platform.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Account Security & Responsibilities</h2>
            <div className="prose text-gray-600">
              <p>Users are responsible for maintaining the security of their accounts. Sharing credentials or unauthorized access to another user’s account is strictly prohibited.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Age Restrictions</h2>
            <div className="prose text-gray-600">
              <p>Users must be at least 13 years old (or 16 in some jurisdictions) to access Bemaxo.com.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
            <div className="prose text-gray-600">
              <p>We may update these terms at any time. Continued use of the platform constitutes acceptance of the revised terms.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Contact</h2>
            <div className="bg-gray-50 rounded-lg p-6 flex max-md:flex-col items-center justify-between">
              <p className="text-gray-600">Questions about the Terms of Service?</p>
              <a href="mailto:support@bemaxo.com" className="inline-flex items-center text-blue-600 hover:text-blue-500">
                Contact Us
              </a>
            </div>
            <Link href={"/"}><div className='text-white font-bold underline flex items-center gap-2 mt-4 justify-center border-2 border-purple-600 p-2 rounded-full bg-purple-400'>
              <IoIosArrowBack />Home</div></Link>


          </section>


        </div>
      </div>
    </div>
  );
}

export default TermsPage;