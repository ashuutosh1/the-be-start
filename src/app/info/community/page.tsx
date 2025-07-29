'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

// Define the community guideline sections in a stable array outside the component.
const sections = [
    {
        id: 'respect-inclusivity',
        title: '1. Respect & Inclusivity',
        content: ["Our community thrives on mutual respect. We celebrate diversity and expect members to embrace inclusive behavior, fostering an environment where everyone feels valued and heard."],
        points: [
            "Treat all members with dignity and courtesy.",
            "Embrace diverse perspectives and backgrounds.",
            "Use appropriate and professional language.",
            "Consider cultural differences in communications."
        ]
    },
    {
        id: 'safety-privacy',
        title: '2. Safety & Privacy',
        content: ["Member safety is paramount. We maintain strict policies to protect personal information and ensure a secure environment for all interactions."],
        points: [
            "Never share personal information publicly.",
            "Report suspicious behavior immediately.",
            "Respect privacy boundaries.",
            "Verify your identity responsibly."
        ]
    },
    {
        id: 'content-standards',
        title: '3. Content Standards',
        content: ["Quality content builds meaningful connections. Share authentic, relevant, and constructive content that adds value to our community."],
        points: [
            "Share accurate and truthful information.",
            "Create original and engaging content.",
            "Respect intellectual property rights.",
            "Maintain professional presentation."
        ]
    },
    {
        id: 'communication-ethics',
        title: '4. Communication Ethics',
        content: ["Clear, honest, and respectful communication forms the foundation of our community. Practice thoughtful engagement that promotes constructive dialogue."],
        points: [
            "Be clear and concise in messages.",
            "Listen actively to others' viewpoints.",
            "Avoid confrontational language.",
            "Respond thoughtfully to disagreements."
        ]
    },
    {
        id: 'professional-conduct',
        title: '5. Professional Conduct',
        content: ["Maintain high standards of professional behavior. Your conduct should reflect integrity and commitment to community values."],
        points: [
            "Honor commitments and agreements.",
            "Practice ethical networking.",
            "Represent yourself honestly.",
            "Support community growth."
        ]
    },
    {
        id: 'enforcement',
        title: '6. Guidelines Enforcement',
        content: ["We actively monitor and enforce these guidelines to maintain our community standards. Violations may result in the permanent deletion of your account."]
    }
];

const CommunityGuidelines: React.FC = () => {
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

            // Find the first section that is within the top 150px of the viewport
            const current = sectionsInView.find(s => s.top > 0 && s.top < 150);
            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array ensures this effect runs only once

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
                <title>Community Guidelines - Bemaxo</title>
                <meta name="description" content="Our community guidelines for maintaining a professional, respectful, and enriching environment." />
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
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Guidelines</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Building a professional community through respect, integrity, and meaningful connections.
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
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
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

export default CommunityGuidelines;