"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../../public/Landing-assets/term-logo-light.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaBug, FaPaperPlane } from "react-icons/fa";

function ReportBug() {
  const [bugReport, setBugReport] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              <FaBug className="text-red-600" /> 
              <span>Report a Bug</span>
            </span>
            <p className="text-gray-600">If you've encountered an issue while using Bemaxo.com, please let us know. Your feedback helps us improve our platform.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                placeholder="Describe the issue..."
                value={bugReport}
                onChange={(e) => setBugReport(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-500"
              >
                <FaPaperPlane /> Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {submitted && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-green-600">Thank you!</h2>
            <p className="text-gray-600">Your bug report has been submitted successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportBug;