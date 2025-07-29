'use client';

import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const AboutUs: React.FC = () => {
    const router = useRouter();
    return (
        <>
            {/* Metadata (like <title> and <meta>) in the Next.js App Router 
              * should be handled by exporting a 'metadata' object from a Server Component 
              * (e.g., your parent page.tsx or layout.tsx file), not by using the <Head> component here.
              * * Example for your page.tsx or layout.tsx:
              * * import { Metadata } from 'next';

              * export const metadata: Metadata = {
              * title: 'About Us - Bemaxo',
              * description: "Learn about Bemaxo's mission, vision, and the team behind our innovative platform.",
              * };
            */}

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
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                About Bemaxo
                            </h1>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                                Empowering connections and transforming experiences through innovative technology and minimalistic UI
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                At Bemaxo, we believe in the power of meaningful connections. Our mission is to create
                                a platform that brings people together, fostering genuine relationships and enabling
                                communities to thrive in the digital age.
                            </p>
                            <p className="text-lg text-gray-700">
                                {/* This is the corrected line */}
                                We&rsquo;re committed to building technology that enhances human interaction rather than
                                replacing it, ensuring every user feels valued, heard, and connected.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                         <Image
                                                          src="/Landing-assets/about-img.png"
                                                          alt="Company Logo"
                                                          fill
                                                          style={{ objectFit: 'contain' }}
                                                          priority
                                                          className="animate-float"
                                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold">Innovation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-gray-50/50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                These core values guide everything we do at Bemaxo
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Value Card: Authenticity */}
                            <div className="text-center p-8 bg-white rounded-2xl ">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h3>
                                <p className="text-gray-700">
                                    We believe in genuine connections and authentic interactions that create lasting relationships.
                                </p>
                            </div>
                            {/* Value Card: Trust & Safety */}
                            <div className="text-center p-8 bg-white rounded-2xl ">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Safety</h3>
                                <p className="text-gray-700">
                                    Your safety and privacy are our top priorities. We maintain the highest standards of security.
                                </p>
                            </div>
                            {/* Value Card: Innovation */}
                            <div className="text-center p-8 bg-white rounded-2xl ">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                                <p className="text-gray-700">
                                    We continuously evolve and improve our platform to meet the changing needs of our community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Be part of a community that values authentic connections and meaningful interactions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;