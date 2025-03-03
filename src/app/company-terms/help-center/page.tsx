"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "../../../../public/Landing-assets/term-logo-light.png";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { FaQuestionCircle } from "react-icons/fa";

function HelpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Clear form fields after submission
    setTimeout(() => {
      setIssueType("");
      setDescription("");
    }, 500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 max-lg:px-0 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-lg:p-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="bemaxo-logo" className="max-w-40 h-auto my-4" />
            <Link href="/">
              <span className="text-black font-bold underline flex items-center gap-2">
                <IoIosArrowBack /> Home
              </span>
            </Link>
          </div>

          {/* Help Center Title */}
          <div className="p-4 mx-auto md:pt-10 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FaQuestionCircle className="text-blue-600" />
              Help Center
            </h1>
            <p className="text-gray-600">
              Need assistance? Select your issue below and submit a request. Our team will get back to you as soon as possible.
            </p>

            {/* Help Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Issue Type Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-800">Select Issue Type</label>
                <select
                  className=" p-3 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  required
                >
                  <option value="">-- Select an issue --</option>
                  <option value="login">Login Issue</option>
                  <option value="hacked">Account Hacked</option>
                  <option value="deletion">Account Deletion</option>
                </select>
              </div>

              {/* Issue Description */}
              <div>
                <label className="block text-lg font-semibold text-gray-800">Describe Your Issue</label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-500 transition-all"
                disabled={!issueType || !description}
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Back to Home */}
          <Link href="/">
            <div className="text-white font-bold flex items-center gap-2 mt-6 justify-center border-2 border-purple-600 p-2 rounded-full bg-purple-400 hover:bg-purple-500 transition-all">
              <IoIosArrowBack /> Home
            </div>
          </Link>
        </div>
      </div>

      {/* Success Popup Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-2xl font-bold text-green-600">Request Submitted!</h2>
            <p className="text-gray-700 mt-2">Your request has been submitted successfully.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpPage;
