'use client';
import { useState } from 'react';
import {
    HiX,
    HiChevronDown,
    HiGlobeAlt,
    HiHashtag,
    HiTrendingUp,
    HiSparkles
} from 'react-icons/hi';

interface CreateTrendsPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { hashtag: string; country: string; language: string }) => void;
}

export default function CreateTrendsPopup({ isOpen, onClose, onSubmit }: CreateTrendsPopupProps) {
    const [hashtag, setHashtag] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('Worldwide');
    const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const countries = [
        'Worldwide',
        'United States',
        'United Kingdom',
        'Canada',
        'Australia',
        'India',
        'Germany',
        'France',
        'Japan',
        'Brazil',
        'Mexico',
        'South Korea',
        'Italy',
        'Spain',
        'Netherlands'
    ];

    const languages = [
        'All Languages',
        'English',
        'Spanish',
        'French',
        'German',
        'Portuguese',
        'Japanese',
        'Korean',
        'Hindi',
        'Arabic',
        'Italian',
        'Dutch',
        'Chinese',
        'Russian'
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!hashtag.trim()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        onSubmit({
            hashtag: hashtag.startsWith('#') ? hashtag : `#${hashtag}`,
            country: selectedCountry,
            language: selectedLanguage
        });

        // Reset form
        setHashtag('');
        setSelectedCountry('Worldwide');
        setSelectedLanguage('All Languages');
        setIsSubmitting(false);
        onClose();
    };

    const handleHashtagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        // Remove any # at the beginning for clean input
        if (value.startsWith('#')) {
            value = value.slice(1);
        }
        setHashtag(value);
    };

    if (!isOpen) return null;

    return (
        <>
            <style jsx>{`
        .dropdown-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.4) transparent;
        }
        
        .dropdown-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .dropdown-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 6px;
        }
        
        .dropdown-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.4);
          border-radius: 6px;
          transition: background 0.2s ease;
        }
        
        .dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
        
        .dark .dropdown-scrollbar {
          scrollbar-color: rgba(75, 85, 99, 0.5) transparent;
        }
        
        .dark .dropdown-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.5);
        }
        
        .dark .dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.8);
        }

        .pulse-ring {
          animation: pulse-ring 1.5s infinite;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
      `}</style>

            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Modal */}
                <div
                    className="bg-white dark:bg-black border-2 border-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <HiSparkles className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Create Trend
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
                        >
                            <HiX className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">

                        {/* Country Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Target Country
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowCountryDropdown(!showCountryDropdown);
                                        setShowLanguageDropdown(false);
                                    }}
                                    className="w-full flex items-center justify-between px-4 py-3 bg-whitw dark:bg-black border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <HiGlobeAlt className="w-5 h-5 text-gray-500" />
                                        <span className="text-gray-900 dark:text-white">
                                            {selectedCountry}
                                        </span>
                                    </div>
                                    <HiChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showCountryDropdown && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg z-20 max-h-48 overflow-y-auto dropdown-scrollbar">
                                        {countries.map((country) => (
                                            <button
                                                key={country}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedCountry(country);
                                                    setShowCountryDropdown(false);
                                                }}
                                                className={`w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-xl last:rounded-b-xl ${selectedCountry === country ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : ''
                                                    }`}
                                            >
                                                {country}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Language Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Target Language
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowLanguageDropdown(!showLanguageDropdown);
                                        setShowCountryDropdown(false);
                                    }}
                                    className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                                >
                                    <span className="text-gray-900 dark:text-white">
                                        {selectedLanguage}
                                    </span>
                                    <HiChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showLanguageDropdown && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg z-20 max-h-48 overflow-y-auto dropdown-scrollbar">
                                        {languages.map((language) => (
                                            <button
                                                key={language}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedLanguage(language);
                                                    setShowLanguageDropdown(false);
                                                }}
                                                className={`w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors first:rounded-t-xl last:rounded-b-xl ${selectedLanguage === language ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : ''
                                                    }`}
                                            >
                                                {language}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Hashtag Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Hashtag
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <HiHashtag className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={hashtag}
                                    onChange={handleHashtagChange}
                                    placeholder="Enter hashtag (without #)"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                                    required
                                />
                            </div>
                            {hashtag && (
                                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Preview: <span className="font-semibold text-blue-600 dark:text-blue-400">#{hashtag}</span>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-semibold"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={!hashtag.trim() || isSubmitting}
                                className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${!hashtag.trim() || isSubmitting
                                    ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl pulse-ring'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Creating...
                                    </>
                                ) : (
                                    <>
                                        <HiTrendingUp className="w-5 h-5" />
                                        Create Trend
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}