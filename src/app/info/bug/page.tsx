"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

interface BugReport {
  title: string;
  description: string;
  category: string;
  priority: string;
  device: string;
  os: string;
  appVersion: string;
  stepsToReproduce: string;
  expectedBehavior: string;
  actualBehavior: string;
  additionalInfo: string;
  userEmail: string;
}

const ReportBug: React.FC = () => {

  const router = useRouter();
  const [formData, setFormData] = useState<BugReport>({
    title: '',
    description: '',
    category: '',
    priority: '',
    device: '',
    os: '',
    appVersion: '',
    stepsToReproduce: '',
    expectedBehavior: '',
    actualBehavior: '',
    additionalInfo: '',
    userEmail: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'App Crashes',
    'Login Issues',
    'Profile Problems',
    'Messaging',
    'Notifications',
    'Performance',
    'UI/UX Issues',
    'Privacy/Security',
    'Other'
  ];

  const priorities = [
    { value: 'low', label: 'Low - Minor inconvenience', color: 'text-green-600' },
    { value: 'medium', label: 'Medium - Affects functionality', color: 'text-yellow-600' },
    { value: 'high', label: 'High - Major issue', color: 'text-orange-600' },
    { value: 'critical', label: 'Critical - App unusable', color: 'text-red-600' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Head>
          <title>Bug Report Submitted - Bemaxo</title>
        </Head>

        {/* Floating Back Button */}
        <button
          onClick={() => router.back()}
          className="fixed top-4 left-4 z-50 px-2 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg transition-colors flex items-center shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>

        </button>

        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-700 mb-6">
                Your bug report has been submitted successfully. Our team will review it and get back to you within 24-48 hours.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-orange-700">
                  <strong>Ticket ID:</strong> BUG-{Date.now().toString().slice(-6)}
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Report a Bug - Bemaxo</title>
        <meta name="description" content="Help us improve Bemaxo by reporting bugs and technical issues." />
      </Head>

      {/* Floating Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 z-50 px-2 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg transition-colors flex items-center shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>

      </button>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Report a Bug
              </h1>

            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl  overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bug Report Form</h2>
              <p className="text-gray-700">
                Please provide as much detail as possible to help us reproduce and fix the issue quickly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                    Bug Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Brief description of the issue"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="userEmail" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    required
                    value={formData.userEmail}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category and Priority */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-semibold text-gray-900 mb-2">
                    Priority *
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                    <option value="">Select priority</option>
                    {priorities.map((priority) => (
                      <option key={priority.value} value={priority.value}>
                        {priority.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Device Information */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="device" className="block text-sm font-semibold text-gray-900 mb-2">
                    Device
                  </label>
                  <input
                    type="text"
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    placeholder="e.g., iPhone 14, Samsung Galaxy S23"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="os" className="block text-sm font-semibold text-gray-900 mb-2">
                    Operating System
                  </label>
                  <input
                    type="text"
                    id="os"
                    name="os"
                    value={formData.os}
                    onChange={handleInputChange}
                    placeholder="e.g., iOS 17.0, Android 13"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="appVersion" className="block text-sm font-semibold text-gray-900 mb-2">
                    App Version
                  </label>
                  <input
                    type="text"
                    id="appVersion"
                    name="appVersion"
                    value={formData.appVersion}
                    onChange={handleInputChange}
                    placeholder="e.g., 2.1.5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the bug in detail..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                />
              </div>

              {/* Steps to Reproduce */}
              <div>
                <label htmlFor="stepsToReproduce" className="block text-sm font-semibold text-gray-900 mb-2">
                  Steps to Reproduce *
                </label>
                <textarea
                  id="stepsToReproduce"
                  name="stepsToReproduce"
                  required
                  rows={4}
                  value={formData.stepsToReproduce}
                  onChange={handleInputChange}
                  placeholder="1. Go to...&#10;2. Click on...&#10;3. Enter...&#10;4. Observe..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                />
              </div>

              {/* Expected vs Actual Behavior */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expectedBehavior" className="block text-sm font-semibold text-gray-900 mb-2">
                    Expected Behavior *
                  </label>
                  <textarea
                    id="expectedBehavior"
                    name="expectedBehavior"
                    required
                    rows={3}
                    value={formData.expectedBehavior}
                    onChange={handleInputChange}
                    placeholder="What should happen?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                  />
                </div>

                <div>
                  <label htmlFor="actualBehavior" className="block text-sm font-semibold text-gray-900 mb-2">
                    Actual Behavior *
                  </label>
                  <textarea
                    id="actualBehavior"
                    name="actualBehavior"
                    required
                    rows={3}
                    value={formData.actualBehavior}
                    onChange={handleInputChange}
                    placeholder="What actually happens?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Any additional context, screenshots descriptions, or relevant information..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                />
              </div>

              {/* Priority Information Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <div className="text-sm text-blue-700">
                    <p className="font-semibold mb-1">Tips for better bug reports:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Be specific and detailed in your descriptions</li>
                      <li>Include screenshots if possible (describe them in additional info)</li>
                      <li>Test if the issue happens consistently</li>
                      <li>Check if the issue occurs on different devices/networks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Bug Report'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default ReportBug;