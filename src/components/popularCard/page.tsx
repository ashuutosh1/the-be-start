'use client';

import { useHashtag } from '@/contexts/HashtagContext';
import { HiPlus, HiCheck } from 'react-icons/hi';

interface PopularCardProps {
  onHashtagClick?: (hashtag: string) => void;
}

export default function PopularCard({ onHashtagClick }: PopularCardProps) {
  const { popularHashtags, isFollowed, followHashtag, unfollowHashtag } = useHashtag();

  const handleFollowToggle = (hashtag: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering the hashtag click
    if (isFollowed(hashtag)) {
      unfollowHashtag(hashtag);
    } else {
      followHashtag(hashtag);
    }
  };

  const handleHashtagClick = (hashtag: string) => {
    if (onHashtagClick) {
      onHashtagClick(hashtag);
    }
  };

  return (

    <div className="bg-white dark:bg-black rounded-lg p-4 transition-colors border border-gray-200 dark:border-gray-800 max-h-80">

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Hashtags</h3>
      <div className="space-y-3 overflow-y-auto max-h-64 custom-scrollbar pr-2">
        {popularHashtags.slice(0, 6).map((item) => (
          <div
            key={item.hashtag}
            onClick={() => handleHashtagClick(item.hashtag)}
            className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          >
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 dark:text-white">{item.hashtag}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.memberCount.toLocaleString()} members</p>
            </div>
            <button
              onClick={(e) => handleFollowToggle(item.hashtag, e)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 ${isFollowed(item.hashtag)
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
            >
              {isFollowed(item.hashtag) ? (
                <>
                  <HiCheck className="w-3 h-3" />
                  Following
                </>
              ) : (
                <>
                  <HiPlus className="w-3 h-3" />
                  Follow
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}