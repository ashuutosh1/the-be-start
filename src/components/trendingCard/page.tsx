'use client';

import { useState } from 'react';
import { HiChevronDown, HiDotsHorizontal, HiTrendingUp, HiGlobeAlt } from 'react-icons/hi';

// Define the types for the component's props
interface Trend {
  rank: number;
  tag: string;
  posts: string;
}

interface TrendingCardProps {
  trendingData: Trend[];
  countries: string[];
  languages: string[];
  onHashtagClick?: (hashtag: string) => void;
}

export default function TrendingCard({ trendingData, countries, languages, onHashtagClick }: TrendingCardProps) {
  const [selectedCountry, setSelectedCountry] = useState('Worldwide');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleTrendClick = (hashtag: string) => {
    if (onHashtagClick) {
      onHashtagClick(hashtag);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl mb-4 transition-colors">
      {/* Add the style block here */}
      <style jsx>{`
        /* Main content scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin; /* For Firefox */
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 10px;
          border: 3px solid transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.8);
        }
        /* Dark mode for main scrollbar */
        .dark .custom-scrollbar {
          scrollbar-color: rgba(75, 85, 99, 0.6) transparent;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(75, 85, 99, 0.6);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(75, 85, 99, 0.9);
        }

        /* Dropdown scrollbar */
        .dropdown-scrollbar {
          scrollbar-width: thin; /* For Firefox */
          scrollbar-color: rgba(156, 163, 175, 0.4) transparent;
        }
        .dropdown-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .dropdown-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .dropdown-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.4);
          border-radius: 8px;
        }
        .dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.7);
        }
        /* Dark mode for dropdown scrollbar */
        .dark .dropdown-scrollbar {
          scrollbar-color: rgba(75, 85, 99, 0.5) transparent;
        }
        .dark .dropdown-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(75, 85, 99, 0.5);
        }
        .dark .dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(75, 85, 99, 0.8);
        }
      `}</style>

      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <HiTrendingUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            Trending
          </h2>
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <HiDotsHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {/* Country Filter */}
          <div className="relative flex-1">
            <button
              onClick={() => {
                setShowCountryDropdown(!showCountryDropdown);
                setShowLanguageDropdown(false);
              }}
              className="w-full flex items-center justify-between px-2 py-2 text-sm bg-white dark:bg-black rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-w-0"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <HiGlobeAlt className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 truncate text-sm">
                  {selectedCountry}
                </span>
              </div>
              <HiChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0 ml-1" />
            </button>
            {showCountryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto dropdown-scrollbar">
                {countries.map(country => (
                  <button
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCountryDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Filter */}
          <div className="relative flex-1">
            <button
              onClick={() => {
                setShowLanguageDropdown(!showLanguageDropdown);
                setShowCountryDropdown(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm bg-white dark:bg-black rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-gray-700 dark:text-gray-300 truncate">{selectedLanguage}</span>
              <HiChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            {showLanguageDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto dropdown-scrollbar">
                {languages.map(language => (
                  <button
                    key={language}
                    onClick={() => {
                      setSelectedLanguage(language);
                      setShowLanguageDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {language}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trending Items */}
      <div className="p-2 max-h-80 overflow-y-auto custom-scrollbar">
        <div className="space-y-1 pr-2">
          {trendingData.map((trend) => (
            <div
              key={`${trend.tag}-${trend.rank}`}
              onClick={() => handleTrendClick(trend.tag)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors group"
            >
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 w-4 transition-colors">
                {trend.rank}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {trend.tag}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
                  {trend.posts} trends
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}