"use client"

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const CommunityGuidelines: React.FC = () => {
    const router = useRouter();

    const guidelines = [
        {
            title: "Respect & Inclusivity",
            icon: "🤝",
            description: "Our community thrives on mutual respect. We celebrate diversity and expect members to embrace inclusive behavior, fostering an environment where everyone feels valued and heard.",
            points: [
                "Treat all members with dignity and courtesy",
                "Embrace diverse perspectives and backgrounds",
                "Use appropriate and professional language",
                "Consider cultural differences in communications"
            ]
        },
        {
            title: "Safety & Privacy",
            icon: "🛡️",
            description: "Member safety is paramount. We maintain strict policies to protect personal information and ensure a secure environment for all interactions.",
            points: [
                "Never share personal information publicly",
                "Report suspicious behavior immediately",
                "Respect privacy boundaries",
                "Verify your identity responsibly"
            ]
        },
        {
            title: "Content Standards",
            icon: "📝",
            description: "Quality content builds meaningful connections. Share authentic, relevant, and constructive content that adds value to our community.",
            points: [
                "Share accurate and truthful information",
                "Create original and engaging content",
                "Respect intellectual property rights",
                "Maintain professional presentation"
            ]
        },
        {
            title: "Communication Ethics",
            icon: "💬",
            description: "Clear, honest, and respectful communication forms the foundation of our community. Practice thoughtful engagement that promotes constructive dialogue.",
            points: [
                "Be clear and concise in messages",
                "Listen actively to others' viewpoints",
                "Avoid confrontational language",
                "Respond thoughtfully to disagreements"
            ]
        },
        {
            title: "Professional Conduct",
            icon: "👔",
            description: "Maintain high standards of professional behavior. Your conduct should reflect integrity and commitment to community values.",
            points: [
                "Honor commitments and agreements",
                "Practice ethical networking",
                "Represent yourself honestly",
                "Support community growth"
            ]
        }
    ];

    return (
        <>
            <Head>
                <title>Community Guidelines - Bemaxo</title>
                <meta name="description" content="Our community guidelines for maintaining a professional, respectful, and enriching environment." />
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
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Community Guidelines
                            </h1>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                                Building a professional community through respect, integrity, and meaningful connections
                            </p>
                        </div>
                    </div>
                </div>

                {/* Introduction Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Bemaxo, we believe in fostering a community that empowers professional growth, encourages meaningful connections, and maintains the highest standards of integrity. These guidelines are designed to ensure our platform remains a trusted space for valuable interactions and opportunities.
                        </p>
                    </div>

                    {/* Guidelines Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {guidelines.map((guideline, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="p-8">
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl mr-4">{guideline.icon}</span>
                                        <h3 className="text-xl font-bold text-gray-900">{guideline.title}</h3>
                                    </div>
                                    <p className="text-gray-700 mb-6">{guideline.description}</p>
                                    <ul className="space-y-3">
                                        {guideline.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-gray-900 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enforcement Section */}
                    <div className="bg-gray-50 rounded-2xl p-8 mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Guidelines Enforcement</h2>
                        <p className="text-gray-700 mb-6">
                            We actively monitor and enforce these guidelines to maintain our community standards. Violations may result in: Permanent Deletion of Account
                        </p>
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommunityGuidelines;
