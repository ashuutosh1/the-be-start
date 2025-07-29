'use client';

// FIX: Imported useMemo from React
import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const CookiePolicy: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>('');

    // FIX: Wrapped the sections array in useMemo to prevent it from being recreated on every render.
    const sections = useMemo(() => [
        {
            id: 'what-are-cookies',
            title: 'What Are Cookies?',
            content: [
                {
                    subtitle: 'A Brief Overview',
                    details: 'Cookies are small text files that are downloaded to your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.',
                    examples: ['Help websites remember your preferences and login information', 'Enable essential features like shopping carts', 'Gather analytics data to understand how the site is used']
                },
                {
                    subtitle: 'Session vs. Persistent Cookies',
                    details: 'Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.',
                    examples: ['Session cookies are used for a single Browse session', 'Persistent cookies are used to remember your choices across multiple sessions']
                }
            ]
        },
        {
            id: 'how-we-use-cookies',
            title: 'How We Use Cookies',
            content: [
                {
                    subtitle: 'Essential Cookies',
                    details: 'These cookies are strictly necessary to provide you with services available through our platform and to use some of its features, such as access to secure areas.',
                    examples: ['To authenticate users and prevent fraudulent use of user accounts', 'To maintain your session as you navigate our platform', 'To enable core site functionality that cannot be turned off']
                },
                {
                    subtitle: 'Performance and Analytics Cookies',
                    details: 'These cookies are used to collect information about traffic to our services and how users use the services. The information gathered does not identify any individual visitor.',
                    examples: ['To understand which pages are popular and how visitors move around the site', 'To compile aggregated statistics about user engagement', 'To test new features and improve the platform’s performance']
                },
                {
                    subtitle: 'Functionality Cookies',
                    details: 'These cookies allow our services to remember choices you make when you use our site, such as remembering your language preferences or your login details.',
                    examples: ['To remember user-specific settings', 'To provide a more personal experience', 'To store your preferences for future visits']
                }
            ]
        },
        {
            id: 'managing-cookies',
            title: 'Managing Your Cookies',
            content: [
                {
                    subtitle: 'Your Control',
                    details: 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser.',
                    examples: ['Most browsers allow you to view, manage, delete, and block cookies for a website', 'You can set your browser to notify you when a cookie is being set', 'Browser settings for cookie management are usually found in the "options", "tools", or "preferences" menu']
                },
                {
                    subtitle: 'Impact of Disabling Cookies',
                    details: 'Please be aware that if you choose to disable cookies, some parts of our platform may not function correctly, and your experience may be impaired.',
                    examples: ['You may lose saved preferences and login information', 'Personalized features may not work', 'Core functionalities might be affected']
                }
            ]
        }
    ], []); // The empty array [] means this memoized value will never be recalculated.

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
    }, [sections]);

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
                <title>Cookie Policy - Bemaxo</title>
                <meta name="description" content="Learn about how we use cookies at Bemaxo to improve your experience." />
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
                                <p className="text-gray-700">
                                    If you have any questions or concerns about our use of cookies, please do not hesitate to contact us. You can reach our Data Protection Officer at <a href="mailto:support@bemaxo.com" className="text-gray-900 font-medium hover:underline">support@bemaxo.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CookiePolicy;