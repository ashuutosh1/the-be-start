'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Importing React Icon

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const filters = ['User', 'Hashtags'];
    const [activeFilter, setActiveFilter] = useState('Top');

    return (
        <div className="space-y-6 max-w-xl mx-auto p-4">
            {/* Search Input */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 dark:bg-black text-gray-900 dark:text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <FiSearch className="absolute left-4 top-3.5 text-gray-500 dark:text-gray-300 text-xl" />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 ">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeFilter === filter
                            ? 'bg-purple-600 text-white shadow'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
