"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface HelpCategory {
  name: string;
  icon: string;
  description: string;
  articles: number;
}

const HelpCenter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const router = useRouter();

  const categories: HelpCategory[] = [
    {
      name: 'Getting Started',
      icon: '🚀',
      description: 'Learn the basics of using Bemaxo',
      articles: 12
    },
    {
      name: 'Account & Profile',
      icon: '👤',
      description: 'Manage your account and profile settings',
      articles: 8
    },
    {
      name: 'Privacy & Safety',
      icon: '🔒',
      description: 'Stay safe and protect your privacy',
      articles: 15
    },
    {
      name: 'Connections',
      icon: '🤝',
      description: 'Everything about making connections',
      articles: 10
    },
    {
      name: 'Technical Support',
      icon: '⚙️',
      description: 'Troubleshooting and technical issues',
      articles: 18
    },
    {
      name: 'Billing & Subscription',
      icon: '💳',
      description: 'Payment and subscription questions',
      articles: 7
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How do I create an account on Bemaxo?",
      answer: "Creating an account is simple! Download the app from the App Store or Google Play, tap 'Sign Up', and follow the prompts to enter your information. You can sign up with your email address or phone number.",
      category: "Getting Started"
    },
    {
      id: 2,
      question: "How do I update my profile information?",
      answer: "Go to your profile by tapping your photo in the top corner, then tap 'Edit Profile'. You can update your photos, bio, interests, and other information from there.",
      category: "Account & Profile"
    },
    {
      id: 3,
      question: "How does Bemaxo protect my privacy?",
      answer: "We take privacy seriously. Your personal information is encrypted, we never share your data with third parties without consent, and you have full control over who can see your profile and contact you.",
      category: "Privacy & Safety"
    },
    {
      id: 4,
      question: "How do I report inappropriate behavior?",
      answer: "If you encounter inappropriate behavior, tap the three dots menu on the user's profile or message, select 'Report', and choose the appropriate reason. Our team reviews all reports promptly.",
      category: "Privacy & Safety"
    },
    {
      id: 5,
      question: "Why can't I see my matches?",
      answer: "This could be due to several reasons: check your internet connection, ensure location services are enabled, or try refreshing the app. If the issue persists, contact our support team.",
      category: "Technical Support"
    },
    {
      id: 6,
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime through your device's app store settings. For iOS, go to Settings > Your Name > Subscriptions. For Android, go to Google Play Store > Subscriptions.",
      category: "Billing & Subscription"
    },
    {
      id: 7,
      question: "How does the matching algorithm work?",
      answer: "Our algorithm considers your preferences, interests, location, and activity patterns to suggest compatible matches. The more you use the app, the better it gets at understanding your preferences.",
      category: "Connections"
    },
    {
      id: 8,
      question: "How can I take a break from Bemaxo?",
      answer: "You can temporarily disable your account. This will hide your profile and matches from other users until you decide to log back in. To disable your account, navigate to Settings > Account > Disable Account.",
      category: "Account & Profile"
    },
    {
      id: 9,
      question: "How can I download a copy of my data?",
      answer: "You have the right to request a copy of your personal data. You can initiate this process by going to Settings > Privacy > Download My Data. We will compile your information and notify you when it's ready for download.",
      category: "Privacy & Safety"
    },
    {
      id: 10,
      question: "Can I delete my account permanently?",
      answer: "Yes, you can permanently delete your account by going to Settings > Account > Delete Account. Please be aware that this action is irreversible. All your matches, messages, and profile information will be permanently removed.",
      category: "Account & Profile"
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    return activeCategory === 'All' || faq.category === activeCategory;
  });

  return (
    <>
      <Head>
        <title>Help Center - Bemaxo</title>
        <meta name="description" content="Find answers to your questions and get help with using Bemaxo." />
      </Head>

      {/* Floating Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg transition-colors flex items-center shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How can we help you?
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Find answers to your questions or get in touch with our support team
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Report Issue</h3>
              <p className="text-gray-700 text-sm mb-4">Report bugs or technical problems</p>
              <button
                onClick={() => router.push('/info/bug')}
                className="text-gray-900 font-semibold hover:text-black"
              >
                Report →
              </button>
            </div>


            {/* Account Management Actions */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Account Management</h3>
              <div className="space-y-2">
                {/* Temporarily Disable Account */}
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="font-semibold text-gray-800">Disable Account</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Download Your Data */}
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    <span className="font-semibold text-gray-800">Download Data</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Permanently Delete Account */}
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    <span className="font-semibold text-red-600">Delete Account</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['All', ...categories.map(cat => cat.name)].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedFAQ === faq.id ? 'transform rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search or browse by category</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our support team is here to help you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;