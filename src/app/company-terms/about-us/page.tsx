"use client";

import Image from 'next/image';
import React from 'react';
import Logo from "../../../../public/Landing-assets/term-logo-light.png";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { FaEnvelope, FaUsers } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function AboutUs() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-md:p-4">
                    <div className='flex items-center justify-between'>
                        <Image src={Logo} alt='bemaxo-logo' className='max-w-40 h-auto my-4' />
                        <Link href={'/'}>
                            <span className='text-black font-bold underline flex items-center gap-2'>
                                <IoIosArrowBack /> Home
                            </span>
                        </Link>
                    </div>

                    <div className="p-4 mx-auto md:pt-10 space-y-8">
                        <span className="max-md:flex-col max-md:text-xl max-md:text-center text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <FaUsers className="text-yellow-400" />
                            <span> About Us</span>
                        </span>

                        <section>
                            <p className="text-gray-600">
                                Bemaxo is a next-generation social media platform that connects people worldwide. We provide innovative features, including real-time messaging, content sharing, and community engagement, ensuring an immersive social experience for users. Our goal is to create a dynamic and interactive digital space where individuals and businesses can connect, share, and grow.
                            </p>
                        </section>
                    </div>

                    <section>
                        <span className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</span>
                        <div className="bg-gray-50 rounded-lg p-6 flex flex-col space-y-4 items-center">
                            <a href="https://x.com/bemaxo_" target="_blank" className="flex items-center gap-2 text-black hover:text-white bg-purple-100 hover:bg-purple-600 px-4 py-2 rounded-lg transition-all duration-300 shadow-md">
                                <FaXTwitter />{" X (formerly Twitter)"}
                            </a>
                            <a href="mailto:support@bemaxo.com" className="flex items-center gap-2 text-black hover:text-white bg-purple-100 hover:bg-purple-600 px-4 py-2 rounded-lg transition-all duration-300 shadow-md">
                                <FaEnvelope /> Email Us
                            </a>
                        </div>
                    </section>

                    <Link href={'/'}>
                        <div className='text-white font-bold underline flex items-center gap-2 mt-4 justify-center border-2 border-purple-600 p-2 rounded-full bg-purple-400'>
                            <IoIosArrowBack /> Home
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
