"use client";

import Image from 'next/image';
import React from 'react';
import Logo from "../../../../public/Landing-assets/term-logo-light.png";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { FaCopyright } from "react-icons/fa";

function CopyrightIssues() {
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

          <div className="p-4 mx-auto md:pt-10 space-y-8">
            <span className="max-md:flex-col max-md:text-xl max-md:text-center text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FaCopyright className="text-purple-600" />
              <span>Copyright Issues & Claims</span> 
            </span>

            <section>
              <p className='text-gray-600'>Bemaxo.com respects intellectual property rights and takes copyright infringement seriously. If you believe that your copyrighted work has been used in a way that constitutes copyright infringement, please contact us with the following details:</p>
              <ul className="list-disc ml-8 space-y-2 text-gray-600">
                <li>A description of the copyrighted work that you claim has been infringed.</li>
                <li>The URL or location of the allegedly infringing material.</li>
                <li>Your contact information (name, email, phone number).</li>
                <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner.</li>
                <li>A statement that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
              </ul>

              <section className="mb-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-700">Bemaxo.com is not responsible for any copyright content uploaded, shared, or distributed by users on the platform. Any liability for copyrighted material rests solely with the respective user who posted it.</p>
                </div>
              </section>
              <p className='text-gray-600'>Send copyright-related inquiries to: <a href="mailto:support@bemaxo.com" className="text-blue-600 hover:text-blue-500">support@bemaxo.com</a></p>
            </section>



            <Link href={'/'}>
              <div className='text-white font-bold underline flex items-center gap-2 mt-4 justify-center border-2 border-purple-600 p-2 rounded-full bg-purple-400'>
                <IoIosArrowBack /> Home
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyrightIssues;
