'use client';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const Security: React.FC = () => {
    const router = useRouter();

    const securityMeasures = [
        {
            title: "Data Encryption",
            icon: "🔐",
            description: "Enterprise-grade encryption for all data",
            points: [
                "End-to-end encryption for messages",
                "SSL/TLS secure data transfer",
                "Encrypted data storage",
                "Regular security audits"
            ]
        },
        {
            title: "Account Protection",
            icon: "🛡️",
            description: "Multi-layered account security features",
            points: [
                "Two-factor authentication",
                "Biometric login support",
                "Login attempt monitoring",
                "Suspicious activity detection"
            ]
        },
        {
            title: "Privacy Controls",
            icon: "👁️",
            description: "Granular privacy settings for users",
            points: [
                "Customizable visibility settings",
                "Profile privacy controls",
                "Data sharing preferences",
                "Activity visibility options"
            ]
        },
        {
            title: "Threat Prevention",
            icon: "🚫",
            description: "Proactive security measures",
            points: [
                "Real-time threat monitoring",
                "Automated suspicious behavior detection",
                "DDoS protection",
                "Regular vulnerability assessments"
            ]
        }
    ];

    const bestPractices = [
        {
            title: "Strong Passwords",
            description: "Use unique, complex passwords with a mix of characters"
        },
        {
            title: "Enable 2FA",
            description: "Add an extra layer of security to your account"
        },
        {
            title: "Regular Updates",
            description: "Keep your app and device updated"
        },
        {
            title: "Secure Networks",
            description: "Use trusted networks and avoid public WiFi"
        }
    ];

    return (
        <>
            <Head>
                <title>Security - Bemaxo</title>
                <meta name="description" content="Learn about our comprehensive security measures and how we protect your data." />
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
                                Security First
                            </h1>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                                Your security is our top priority. Learn about our comprehensive security measures.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Security Measures Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {securityMeasures.map((measure, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="p-8">
                                    <div className="flex items-center mb-6">
                                        <span className="text-4xl mr-4">{measure.icon}</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{measure.title}</h3>
                                            <p className="text-gray-600">{measure.description}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {measure.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                </div>

                {/* Best Practices Section */}
                <div className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Security Best Practices</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {bestPractices.map((practice, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                    <h3 className="font-semibold text-gray-900 mb-2">{practice.title}</h3>
                                    <p className="text-sm text-gray-700">{practice.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Report Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-black rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Found a Security Issue?</h2>
                        <p className="text-gray-300 mb-8">
                            We take security vulnerabilities seriously. If you&apos;ve discovered a security issue, please let us know immediately.
                        </p>
                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Report Vulnerability
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Security;