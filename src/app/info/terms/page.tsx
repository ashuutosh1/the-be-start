'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

// 1. Define the static 'sections' array outside the component.
// This ensures it is created only once.
const sections = [
    {
        id: 'acceptance',
        title: '1. Acceptance of Terms',
        content: [
            "By accessing or using Bemaxo ('the Service,' 'our Service,' or 'Bemaxo'), you agree to be bound by these Terms and Conditions ('Terms'). If you disagree with any part of these terms, then you may not access the Service.",
            "These Terms apply to all visitors, users, and others who access or use the Service. By using our Service, you represent that you have read, understood, and agree to be bound by these Terms."
        ]
    },
    {
        id: 'eligibility',
        title: '2. Eligibility',
        content: ["You must be at least 18 years old to use Bemaxo. By using our Service, you represent and warrant that:"],
        points: [
            "You are at least 18 years of age.",
            "You have the legal capacity to enter into these Terms.",
            "You are not prohibited from using the Service under applicable law.",
            "You have not been previously suspended or removed from the Service."
        ]
    },
    {
        id: 'account',
        title: '3. User Accounts',
        content: ["To access certain features of the Service, you must create an account. You are responsible for all activities that occur under your account."],
        points: [
            "Provide accurate, current, and complete information during registration.",
            "Maintain and promptly update your information to keep it accurate.",
            "Keep your login credentials secure and confidential.",
            "Notify us immediately of any unauthorized use or security breach."
        ]
    },
    {
        id: 'conduct',
        title: '4. User Conduct',
        content: ["You agree to use Bemaxo in a respectful and lawful manner. You will not post or transmit any content that is illegal, harmful, offensive, or violates the rights of others."]
    },
    {
        id: 'content',
        title: '5. Content and Intellectual Property',
        content: [
            "You retain ownership of the content you post on Bemaxo. By posting, you grant us a non-exclusive, worldwide license to use, display, and distribute your content in connection with the Service.",
            "All content, features, and functionality of Bemaxo are owned by us and are protected by intellectual property laws. You may not copy or distribute our content without permission."
        ]
    },
    {
        id: 'privacy',
        title: '6. Privacy and Data Protection',
        content: ["Your privacy is important to us. Our Privacy Policy, which is part of these Terms, explains how we collect, use, and protect your information. By using Bemaxo, you consent to our data practices."]
    },
    {
        id: 'termination',
        title: '9. Termination',
        content: ["We reserve the right to terminate or suspend your account and access to Bemaxo at our sole discretion, without notice, for any reason, including any violation of these Terms."]
    },
    {
        id: 'disclaimers',
        title: '10. Disclaimers',
        content: ["Bemaxo is provided 'as is' and 'as available' without warranties of any kind. We do not guarantee that the service will be error-free, secure, or uninterrupted."]
    },
    {
        id: 'limitation',
        title: '11. Limitation of Liability',
        content: ["To the maximum extent permitted by law, Bemaxo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service."]
    },
    {
        id: 'changes',
        title: '13. Changes to Terms',
        content: ["We may modify these Terms at any time. We will provide notice of significant changes. Your continued use of Bemaxo after such changes constitutes your acceptance of the new Terms."]
    },
    {
        id: 'contact',
        title: '14. Contact Information',
        content: ["For questions about these Terms, please contact us at support@bemaxo.com."]
    }
];

const TermsAndConditions: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sectionsInView = sections
                .map(s => document.getElementById(s.id))
                .filter(el => el)
                .map(el => ({
                    id: el!.id,
                    top: el!.getBoundingClientRect().top
                }));

            const current = sectionsInView.find(s => s.top > 0 && s.top < 150);
            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // 2. The dependency array is now stable. The effect will run only once on mount.
    }, []); // You can now use an empty array, as `sections` is a stable constant defined outside the render scope.

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
        }
    };

    return (
        <>
            <Head>
                <title>Terms & Conditions - Bemaxo</title>
                <meta name="description" content="Read Bemaxo's terms and conditions governing the use of our platform and services." />
            </Head>

             <button
                onClick={() => router.back()}
                className="fixed top-4 left-4 z-50 px-2 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg transition-colors flex items-center shadow-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              
            </button>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                <div className="relativeoverflow-hidden bg-gradient-to-r from-gray-900 to-black">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Services</h1>

                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-12">

                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">On this page</h3>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full px-3 py-2 text-left rounded-md text-sm font-medium transition-colors ${activeSection === section.id
                                                ? 'bg-gray-100 text-black'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                                                }`}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Document Content */}
                        <div className="lg:col-span-3 mt-12 lg:mt-0">
                            {sections.map((section) => (
                                <section key={section.id} id={section.id} className="scroll-mt-20 mb-12">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-base">
                                        {Array.isArray(section.content) ? section.content.map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        )) : <p>{section.content}</p>}
                                        {section.points && (
                                            <ul className="space-y-3 pt-2">
                                                {section.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <div className="flex-shrink-0 mt-1">
                                                            <svg className="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="ml-3">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;