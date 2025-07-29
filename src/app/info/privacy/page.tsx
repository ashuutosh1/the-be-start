'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

// --- FIX: The static 'sections' array is defined outside the component ---
// This ensures it's created only once and has a stable reference across re-renders.
const sections = [
    {
        id: 'collection',
        title: 'Information We Collect',
        content: [
            {
                subtitle: 'Personal Information',
                details: 'We collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.',
                examples: ['Full name and contact details (email, phone number)', 'Profile information (username, profile picture)', 'Authentication data (passwords, security credentials)']
            },
            {
                subtitle: 'Usage Data',
                details: 'Information about how you interact with our platform is collected automatically. This data helps us understand user behavior and improve our services.',
                examples: ['IP address and browser type', 'Pages visited and access times', 'Features used and interaction patterns']
            },
            {
                subtitle: 'Device Information',
                details: 'We collect technical data about the devices you use to access Bemaxo to ensure compatibility and optimize performance.',
                examples: ['Device type and model', 'Operating system and version', 'Unique device identifiers']
            }
        ]
    },
    {
        id: 'usage',
        title: 'How We Use Your Data',
        content: [
            {
                subtitle: 'Service Delivery',
                details: 'Your information is essential for us to provide and maintain our platform\'s functionality.',
                examples: ['To create and manage your account', 'To provide access to platform features', 'To offer personalized customer support']
            },
            {
                subtitle: 'Platform Improvement',
                details: 'We analyze usage data to enhance, optimize, and develop new features for our services.',
                examples: ['For research and development', 'To improve user experience and interface design', 'To identify and fix bugs or technical issues']
            },
            {
                subtitle: 'Communication',
                details: 'We use your contact information to keep you informed about important updates regarding our services.',
                examples: ['To send administrative information like service updates or security alerts', 'To respond to your support requests and inquiries', 'To send marketing communications, with your consent']
            }
        ]
    },
    {
        id: 'protection',
        title: 'Data Protection',
        content: [
            {
                subtitle: 'Security Measures',
                details: 'We implement a variety of industry-standard security measures to maintain the safety of your personal information.',
                examples: ['Data encryption both in transit (SSL/TLS) and at rest', 'Strict access controls to limit who can view your data', 'Regular security audits and vulnerability assessments']
            },
            {
                subtitle: 'Data Retention',
                details: 'We retain your personal data only for as long as it is necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.',
                examples: ['For the duration of your active account', 'To comply with legal obligations and resolve disputes', 'For a limited period for backup and disaster recovery']
            }
        ]
    },
    {
        id: 'rights',
        title: 'Your Rights',
        content: [
            {
                subtitle: 'Access and Control',
                details: 'You have certain rights regarding the personal data we hold about you, subject to local data protection laws.',
                examples: ['The right to access your personal data', 'The right to request correction of inaccurate data', 'The right to request deletion of your data']
            },
            {
                subtitle: 'Data Portability',
                details: 'You have the right to request a copy of your data in a structured, commonly used, and machine-readable format.',
                examples: ['Options to export your profile data', 'Provision of data in standard formats like JSON or CSV', 'Procedures for transferring your data to another service']
            }
        ]
    }
];

const PrivacyPolicy: React.FC = () => {
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
        // Set the initial active section on load
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
        // The dependency array is now empty because `sections` is a stable constant.
        // This effect will only run once on mount and clean up on unmount.
    }, []);

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
                <title>Privacy Policy - Bemaxo</title>
                <meta name="description" content="Learn about how we protect and handle your data at Bemaxo." />
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
                <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>

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
                                <section key={section.id} id={section.id} className="scroll-mt-20 mb-16">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-8">
                                        {section.content.map((item, idx) => (
                                            <div key={idx}>
                                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.subtitle}</h3>
                                                <p className="text-gray-700 text-base mb-4">{item.details}</p>
                                                <ul className="space-y-3">
                                                    {item.examples.map((example, exIdx) => (
                                                        <li key={exIdx} className="flex items-start">
                                                            <div className="flex-shrink-0 mt-1">
                                                                <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </div>
                                                            <span className="ml-3 text-gray-600">{example}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}

                            <div className="bg-gray-100 rounded-lg p-8 mt-16">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
                                <p className="text-gray-700">
                                    If you have any questions or concerns about our privacy practices, please do not hesitate to contact us. You can reach our Data Protection Officer at <a href="mailto:support@bemaxo.com" className="text-gray-900 font-medium hover:underline">support@bemaxo.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;