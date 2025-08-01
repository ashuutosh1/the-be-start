'use client';
import { useHashtag } from '@/contexts/HashtagContext';
import { HiPlus, HiCheck } from 'react-icons/hi';

interface PopularHashtag {
    hashtag: string;
    memberCount: number;
    description: string;
}

interface PopularCardProps {
    popularHashtags: PopularHashtag[];
    onHashtagClick: (hashtag: string) => void;
}

export default function PopularCard({ popularHashtags, onHashtagClick }: PopularCardProps) {
    const { isFollowed, followHashtag, unfollowHashtag } = useHashtag();

    const handleFollowToggle = (hashtag: string, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent triggering the hashtag click
        if (isFollowed(hashtag)) {
            unfollowHashtag(hashtag);
        } else {
            followHashtag(hashtag);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 transition-colors">
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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Hashtags</h3>
            <div className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 dark:scrollbar-thumb-purple-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 hover:scrollbar-thumb-purple-400 dark:hover:scrollbar-thumb-purple-500">
                <div className="space-y-3 pr-2">
                    {popularHashtags.map((item) => (
                        <div
                            key={item.hashtag}
                            onClick={() => onHashtagClick(item.hashtag)}
                            className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
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
        </div>
    );
}
