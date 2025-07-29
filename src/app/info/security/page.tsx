'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

// Define the security policy sections in a stable array outside the component.
const sections = [
    {
        id: 'commitment',
        title: '1. Our Commitment',
        content: [
            "At Bemaxo, the security of your data and the integrity of our platform are fundamental to our mission. This policy outlines the measures we take to protect our community and the infrastructure that supports it.",
            "We are dedicated to implementing robust security controls, defending against threats, and fostering a culture of security awareness."
        ]
    },
    {
        id: 'data-encryption',
        title: '2. Data Encryption',
        content: ["We employ enterprise-grade encryption to protect all data at rest and in transit, ensuring your information remains confidential and secure."],
        points: [
            "End-to-end encryption is utilized for all private messages.",
            "Secure Sockets Layer (SSL/TLS) protects data transferred between you and our servers.",
            "Stored data, including database records and backups, is fully encrypted.",
            "We conduct regular audits of our encryption protocols to ensure they meet industry best practices."
        ]
    },
    {
        id: 'account-protection',
        title: '3. Account Protection',
        content: ["Your account is secured with multiple layers of protection to prevent unauthorized access."],
        points: [
            "Two-factor authentication (2FA) is available to all users for an added layer of security.",
            "Login attempts are monitored for suspicious patterns, with automated alerts for unusual activity.",
            "We enforce strong password policies and provide guidance on creating secure credentials."
        ]
    },
    {
        id: 'privacy-controls',
        title: '4. Privacy Controls',
        content: ["We believe in empowering you with granular control over your personal information and how it's shared on our platform."],
        points: [
            "You can customize the visibility of your profile and personal details.",
            "Clear preferences are available for managing data sharing and third-party integrations.",
            "Activity visibility options allow you to control who sees your interactions and posts."
        ]
    },
    {
        id: 'threat-prevention',
        title: '5. Threat Prevention',
        content: ["Our infrastructure is designed to proactively identify, mitigate, and respond to security threats in real-time."],
        points: [
            "We operate continuous threat monitoring and automated suspicious behavior detection systems.",
            "Distributed Denial of Service (DDoS) protection is in place to ensure service availability.",
            "Regular internal and third-party vulnerability assessments are performed to identify and patch potential risks."
        ]
    },
    {
        id: 'user-responsibilities',
        title: '6. User Responsibilities',
        content: ["While we provide a secure platform, you also play a crucial role. We urge you to adopt the following security best practices:"],
        points: [
            "**Use Strong, Unique Passwords:** Create complex passwords that are not reused across other services.",
            "**Enable Two-Factor Authentication (2FA):** Always activate 2FA for the strongest possible account protection.",
            "**Beware of Phishing:** Be cautious of suspicious emails or messages asking for your login credentials.",
            "**Use Secure Networks:** Avoid accessing your account on untrusted public Wi-Fi networks."
        ]
    },
    {
        id: 'reporting',
        title: '7. Reporting Vulnerabilities',
        content: [
            "We are committed to working with security researchers and our community to address potential vulnerabilities. If you believe you have discovered a security issue, please notify us immediately so we can investigate and take appropriate action.",
            "Please send a detailed report to our security team at: security@bemaxo.com."
        ]
    }
];

const SecurityPolicy: React.FC = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const current = sections.find(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 150;
                }
                return false;
            });
            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
                <title>Security Policy - Bemaxo</title>
                <meta name="description" content="Learn about our comprehensive security measures and how we protect your data." />
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Security Policy</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Our commitment to protecting your data and privacy.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-12">

                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Policy Sections</h3>
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
                                    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                        {Array.isArray(section.content) ? section.content.map((paragraph, idx) => (
                                            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                                        )) : <p dangerouslySetInnerHTML={{ __html: section.content }}></p>}

                                        {section.points && (
                                            <ul className="space-y-3 pt-2">
                                                {section.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <div className="flex-shrink-0 mt-1.5">
                                                            <svg className="h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="ml-3" dangerouslySetInnerHTML={{ __html: point }}></span>
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

export default SecurityPolicy;