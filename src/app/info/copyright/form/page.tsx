'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

// Icon component for section headers (color will be inherited)
const SectionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CopyrightClaimForm: React.FC = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        relationship: '',
        workDescription: '',
        workLink: '',
        infringingLinks: '',
        goodFaithBelief: false,
        accuracyStatement: false,
        authorityStatement: false,
        signature: '',
        date: new Date().toISOString().split('T')[0],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert('Claim submitted successfully!');
        router.push('/');
    };

    return (
        <>
            <Head>
                <title>Copyright Claim Submission - Bemaxo</title>
                <meta name="description" content="Submit a copyright infringement claim to Bemaxo." />
            </Head>

            {/* Back Button styled for the B&W theme */}
            <button
                onClick={() => router.back()}
                className="fixed top-4 left-4 z-50 px-4 py-2 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center shadow-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
            </button>

            <div className="min-h-screen bg-black text-black py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Copyright Claim
                        </h1>
                        <p className="mt-4 text-xl text-gray-400 font-mono">
                            DMCA Takedown Notice
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-10">
                            {/* Section 1: Your Information */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-black border-b border-gray-200 pb-3 font-mono tracking-wider"><SectionIcon />Claimant Identification</h2>
                                <div>
                                    <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} required className="font-mono bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-black focus:ring-2 focus:ring-black focus:border-black transition" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className="font-mono bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-black focus:ring-2 focus:ring-black focus:border-black transition" />
                                </div>
                                <div>
                                    <label htmlFor="relationship" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Relationship to Copyright Holder</label>
                                    <select name="relationship" id="relationship" value={formData.relationship} onChange={handleInputChange} required className="font-mono bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-black focus:ring-2 focus:ring-black focus:border-black transition">
                                        <option value="" disabled>Select one...</option>
                                        <option value="owner">I am the copyright owner</option>
                                        <option value="agent">I am an agent authorized to act on behalf of the owner</option>
                                    </select>
                                </div>
                            </div>

                            {/* Section 2: Copyrighted Work */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-black border-b border-gray-200 pb-3 font-mono tracking-wider"><SectionIcon />Copyrighted Work Details</h2>
                                <div>
                                    <label htmlFor="workDescription" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Description of the work</label>
                                    <textarea name="workDescription" id="workDescription" rows={4} value={formData.workDescription} onChange={handleInputChange} required className="font-mono bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-black focus:ring-2 focus:ring-black focus:border-black transition" placeholder="e.g., A photograph of a red barn..."></textarea>
                                </div>
                                <div>
                                    <label htmlFor="workLink" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Link to an authorized example</label>
                                    <input type="url" name="workLink" id="workLink" value={formData.workLink} onChange={handleInputChange} required className="font-mono bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-black focus:ring-2 focus:ring-black focus:border-black transition" placeholder="https://yourwebsite.com/my-photo.jpg" />
                                </div>
                            </div>

                            {/* Section 3: Infringing Material */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-black border-b border-gray-200 pb-3 font-mono tracking-wider"><SectionIcon />Infringing Material Location</h2>
                                <div>
                                    <label htmlFor="infringingLinks" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Link(s) to the infringing content on Bemaxo</label>
                                    <textarea name="infringingLinks" id="infringingLinks" rows={4} value={formData.infringingLinks} onChange={handleInputChange} required className="font-mono bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-black focus:ring-2 focus:ring-black focus:border-black transition" placeholder="Please list each URL on a new line."></textarea>
                                </div>
                            </div>

                            {/* Section 4: Legal Statements */}
                            <div className="space-y-5">
                                <h2 className="text-xl font-semibold text-black border-b border-gray-200 pb-3 font-mono tracking-wider"><SectionIcon />Legal Affirmation</h2>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5"><input id="goodFaithBelief" name="goodFaithBelief" type="checkbox" checked={formData.goodFaithBelief} onChange={handleCheckboxChange} required className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" /></div>
                                    <div className="ml-3 text-sm"><label htmlFor="goodFaithBelief" className="font-medium text-gray-700">I have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.</label></div>
                                </div>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5"><input id="accuracyStatement" name="accuracyStatement" type="checkbox" checked={formData.accuracyStatement} onChange={handleCheckboxChange} required className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" /></div>
                                    <div className="ml-3 text-sm"><label htmlFor="accuracyStatement" className="font-medium text-gray-700">I swear, under penalty of perjury, that the information in this notification is accurate.</label></div>
                                </div>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5"><input id="authorityStatement" name="authorityStatement" type="checkbox" checked={formData.authorityStatement} onChange={handleCheckboxChange} required className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" /></div>
                                    <div className="ml-3 text-sm"><label htmlFor="authorityStatement" className="font-medium text-gray-700">I am the copyright owner or am authorized to act on behalf of the owner.</label></div>
                                </div>
                            </div>

                            {/* Section 5: Signature */}
                            <div className="space-y-6 pt-4 border-t border-gray-200">
                                <h2 className="text-xl font-semibold text-black font-mono tracking-wider"><SectionIcon />Authentication</h2>
                                <div>
                                    <label htmlFor="signature" className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Electronic Signature (Type your full name)</label>
                                    <input type="text" name="signature" id="signature" value={formData.signature} onChange={handleInputChange} required className="font-mono bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-black focus:ring-2 focus:ring-black focus:border-black transition" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-6">
                                <button type="submit" className="w-full md:w-auto inline-flex justify-center py-3 px-12 border border-transparent shadow-lg text-md font-bold rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300">
                                    Submit Claim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CopyrightClaimForm;