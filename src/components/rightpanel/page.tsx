'use client';

import { useState } from 'react';
import { HiTrendingUp } from 'react-icons/hi';
import CreateTrendsPopup from '../createTrendsPopup/page'; // Adjust path as needed
import PopularCard from '../popularCard/page';
import TrendingCard from '../trendingCard/page'; // Import the new component

interface Trend {
  rank: number;
  tag: string;
  posts: string;
}

interface RightPanelProps {
  onHashtagClick?: (hashtag: string) => void;
}

export default function RightPanel({ onHashtagClick }: RightPanelProps) {
  const [showCreateTrendsPopup, setShowCreateTrendsPopup] = useState(false);

  const [trendingData, setTrendingData] = useState<Trend[]>([
    { rank: 1, tag: '#ReactJS', posts: '245K' },
    { rank: 2, tag: '#NextJS', posts: '189K' },
    { rank: 3, tag: '#WebDev', posts: '567K' },
    { rank: 4, tag: '#OpenAI', posts: '892K' },
    { rank: 5, tag: '#JavaScript', posts: '1.2M' },
    { rank: 6, tag: '#TypeScript', posts: '456K' },
    { rank: 7, tag: '#TailwindCSS', posts: '234K' },
    { rank: 8, tag: '#AI', posts: '2.1M' },
    { rank: 9, tag: '#Docker', posts: '178K' },
    { rank: 10, tag: '#GitHub', posts: '345K' },
  ]);

  const countries = ['Worldwide', 'United States', 'United Kingdom', 'Canada', 'Australia', 'India', 'Germany', 'France', 'Japan', 'Brazil'];
  const languages = ['All Languages', 'English', 'Spanish', 'French', 'German', 'Portuguese', 'Japanese', 'Korean', 'Hindi', 'Arabic'];

  const handleCreateTrend = (data: { hashtag: string; country: string; language: string }) => {
    const postCounts = ['1.2K', '5.7K', '12K', '45K', '89K', '156K', '234K'];
    const randomPosts = postCounts[Math.floor(Math.random() * postCounts.length)];

    const newTrend: Trend = {
      rank: 1,
      tag: data.hashtag,
      posts: randomPosts,
    };

    setTrendingData(prev => [
      newTrend,
      ...prev.map(trend => ({ ...trend, rank: trend.rank + 1 })).slice(0, 9),
    ]);
  };

  return (
    <>
      {/* Changed className: removed h-screen, overflow-y-auto, and custom-scrollbar */}
      <aside className="hidden lg:block w-80 sticky top-0 p-4 bg-white dark:bg-black transition-colors">
        {/* Render the new TrendingCard component */}
        <TrendingCard
          trendingData={trendingData}
          countries={countries}
          languages={languages}
          onHashtagClick={onHashtagClick}
        />

        {/* Create Trends Button */}
        <div className="mb-4">
          <button
            onClick={() => setShowCreateTrendsPopup(true)}
            className="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black font-semibold py-3 px-4 rounded-2xl text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <HiTrendingUp className="w-5 h-5 flex-shrink-0" />
            Create Trends
          </button>
        </div>

        {/* Create Trends Popup */}
        <CreateTrendsPopup
          isOpen={showCreateTrendsPopup}
          onClose={() => setShowCreateTrendsPopup(false)}
          onSubmit={handleCreateTrend}
        />

        {/* Popular Card Component */}
        <PopularCard onHashtagClick={onHashtagClick} />
      </aside>
    </>
  );
}