'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CopyrightDocument: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>('');

    const copyrightPolicies = useMemo(() => [
        {
            id: 'our-property',
            title: "Our Intellectual Property",
            icon: "©️",
            description: "Bemaxo's brand and platform assets, including all official text, graphics, user interfaces, and proprietary code, are the exclusive property of Bemaxo and its licensors, protected by copyright and other intellectual property laws.",
            points: [
                "Our logo, branding, and trade dress.",
                "The unique design, layout, and code of our website and applications.",
                "All official text, graphics, and user interface elements created by us.",
                "Proprietary features and functionality developed for the platform."
            ]
        },
        {
            id: 'user-responsibility',
            title: "Your Content, Your Responsibility",
            icon: "🧑‍⚖️",
            description: "As a user of our platform, you are solely responsible for the content you create, upload, and share. You must ensure you have the necessary rights to all content you post.",
            points: [
                "You must only upload content that you have created or have explicit permission to use.",
                "Do not post copyrighted material belonging to others without legal consent or license.",
                "By posting content, you grant Bemaxo a non-exclusive, worldwide, royalty-free license to display and distribute it on our platform.",
                "You agree to respect the intellectual property rights of all third parties."
            ]
        },
        {
            id: 'platform-notice',
            title: "Important Notice",
            icon: "ℹ️",
            description: "This section clarifies the roles and liabilities concerning content on the Bemaxo platform. Our goal is to foster a creative environment while respecting the rights of copyright holders.",
            points: [
                "Users are solely and entirely responsible for the content they upload and share.",
                "Bemaxo does not pre-screen content and, as a service provider, assumes no liability for user-posted material.",
                "We are unequivocally committed to supporting original creators by promptly and thoroughly reviewing all valid infringement claims.",
                "Our platform provides the necessary tools and procedures for copyright holders to protect their work.",
                "Your use of the Bemaxo platform constitutes your agreement to these terms and your acceptance of full responsibility for your content."
            ]
        },
        {
            id: 'reporting-infringement',
            title: "Reporting Copyright Infringement",
            icon: "📢",
            description: "We adhere to the procedures outlined in the Digital Millennium Copyright Act (DMCA) for handling copyright complaints. To file a notice, you must provide a formal notification.",
            points: [
                "Sufficient evidence to prove you are the copyright owner or are legally authorized to act on their behalf.",
                "A specific and clear identification of the location of the allegedly infringing material on our service.",
                "Your complete and accurate contact information, including full name, mailing address, telephone number, and email address.",
                "A formal takedown notice submitted through the official form linked below."
            ]
        },
        {
            id: 'consequences',
            title: "Consequences of Infringement",
            icon: "⚖️",
            description: "We take all copyright violations seriously and will take action to enforce our policy and protect the rights of creators. Violations may result in the following actions:",
            points: [
                "The immediate removal or disabling of access to the infringing content upon receipt of a valid notice.",
                "A formal warning issued to the account holder responsible for the infringement.",
                "Temporary or permanent account suspension for repeat infringers, in accordance with our repeat infringer policy.",
                "Full compliance with all applicable legal requirements and court orders."
            ]
        }
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = copyrightPolicies.map(p => document.getElementById(p.id));
            let currentSectionId = '';

            for (const section of sections) {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSectionId = section.id;
                        break;
                    }
                }
            }
            if (currentSectionId) {
                setActiveSection(currentSectionId);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [copyrightPolicies]);

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
                <title>Copyright Policy - Bemaxo</title>
                <meta name="description" content="Understand our copyright policy and how to report infringement on Bemaxo." />
            </Head>

              <button
                onClick={() => router.back()}
                className="fixed top-4 left-4 z-50 px-2 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg transition-colors flex items-center shadow-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              
            </button>

            <div className="min-h-screen bg-white">
                <div className="relative bg-gray-900">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Copyright Policy</h1>

                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-12">

                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">On this page</h3>
                                <nav className="space-y-1">
                                    {copyrightPolicies.map((policy) => (
                                        <button
                                            key={policy.id}
                                            onClick={() => scrollToSection(policy.id)}
                                            className={`w-full px-3 py-2 text-left rounded-md text-sm font-medium transition-colors ${activeSection === policy.id
                                                ? 'bg-gray-100 text-black'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                                                }`}
                                        >
                                            {policy.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* --- Document Content with new styles --- */}
                        <div className="lg:col-span-3 mt-12 lg:mt-0">
                            {copyrightPolicies.map((policy) => (
                                <section
                                    key={policy.id}
                                    id={policy.id}
                                    className={`scroll-mt-20 mb-16 ${policy.id === 'platform-notice'
                                        ? 'bg-amber-50 border border-amber-200 rounded-xl p-8'
                                        : ''
                                        }`}
                                >
                                    {/* --- Stylized Heading --- */}
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6 flex items-center">
                                        <span className="text-2xl mr-4" aria-hidden="true">{policy.icon}</span>
                                        {policy.title}
                                    </h2>

                                    <p className="text-lg text-gray-600 mb-6">{policy.description}</p>

                                    {/* --- Stylized Points --- */}
                                    <ul className="space-y-4">
                                        {policy.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="flex-shrink-0 mt-1">
                                                    <svg className="h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <span className="ml-3 text-gray-700 text-base">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}

                            <div className="bg-gray-100 rounded-lg p-8 mt-16 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">File a DMCA Notice</h2>
                                <p className="text-gray-700 mb-6">
                                    If you believe your copyrighted work has been infringed upon, please use our official form to submit a takedown notice.
                                </p>
                                <Link
                                    href="/info/copyright/form"
                                    className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Go to Submission Form
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CopyrightDocument;