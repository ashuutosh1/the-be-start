import React, { useState } from 'react';
import Image from 'next/image';
import {
  HiHeart,
  HiOutlineHeart,
  HiChatBubbleOvalLeft,
  HiArrowPathRoundedSquare,
  HiShare,
  HiBookmark,
  HiOutlineBookmark,
  HiEllipsisHorizontal,
  HiPlay,
  HiPause,
  HiSpeakerWave,
  HiSpeakerXMark,
} from 'react-icons/hi2';

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified?: boolean;
}

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string; // For videos
  alt?: string;
}

interface PostStats {
  views: number;
  likes: number;
  comments: number;
  reposts: number;
}

interface PostcardProps {
  id: string;
  user: User;
  content: string;
  media?: MediaItem[];
  stats: PostStats;
  timestamp: string;
  isLiked?: boolean;
  isBookmarked?: boolean;
  isReposted?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onRepost?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
  onUserClick?: (userId: string) => void;
}

export default function Postcard({
  id,
  user,
  content,
  media = [],
  stats,
  timestamp,
  isLiked = false,
  isBookmarked = false,
  isReposted = false,
  onLike,
  onComment,
  onRepost,
  onShare,
  onBookmark,
  onUserClick,
}: PostcardProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  // Format numbers (1000 -> 1k, 1000000 -> 1M, etc.)
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };

  // Parse content and convert URLs to clickable links
  const parseContent = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const handleVideoToggle = () => {
    const video = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleVideoMute = () => {
    const video = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (video) {
      video.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  return (
    <article className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors duration-200 cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUserClick?.(user.id);
            }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <Image
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

            </div>
          </button>

          <div className="flex-1 min-w-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUserClick?.(user.id);
              }}
              className="flex items-center space-x-2 hover:underline"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                {user.name}
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                @{user.username}
              </span>
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <time>{timestamp}</time>
              <span>•</span>
              <span>{formatNumber(stats.views)} views</span>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <HiEllipsisHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-900 dark:text-white whitespace-pre-wrap leading-relaxed">
          {parseContent(content)}
        </p>
      </div>

      {/* Media */}
      {media.length > 0 && (
        <div className="mb-4 relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          {media.length > 1 && (
            <>
              <div className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentMediaIndex + 1} / {media.length}
              </div>
              {currentMediaIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentMediaIndex(currentMediaIndex - 1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  ←
                </button>
              )}
              {currentMediaIndex < media.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentMediaIndex(currentMediaIndex + 1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  →
                </button>
              )}
            </>
          )}

          {media[currentMediaIndex]?.type === 'image' ? (
            <Image
              src={media[currentMediaIndex].url}
              alt={media[currentMediaIndex].alt || 'Post image'}
              width={600}
              height={400}
              className="w-full h-auto object-cover max-h-96"
            />
          ) : (
            <div className="relative">
              <video
                id={`video-${id}`}
                src={media[currentMediaIndex].url}
                poster={media[currentMediaIndex].thumbnail}
                className="w-full h-auto object-cover max-h-96"
                muted={isVideoMuted}
                loop
                onClick={(e) => {
                  e.stopPropagation();
                  handleVideoToggle();
                }}
              />

              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoToggle();
                  }}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  {isVideoPlaying ? (
                    <HiPause className="w-4 h-4" />
                  ) : (
                    <HiPlay className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoMute();
                  }}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  {isVideoMuted ? (
                    <HiSpeakerXMark className="w-4 h-4" />
                  ) : (
                    <HiSpeakerWave className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center space-x-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike?.();
            }}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all ${isLiked
                ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                : 'text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
              }`}
          >
            {isLiked ? (
              <HiHeart className="w-5 h-5 fill-current" />
            ) : (
              <HiOutlineHeart className="w-5 h-5" />
            )}
            <span className="text-sm font-medium">{formatNumber(stats.likes)}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onComment?.();
            }}
            className="flex items-center space-x-2 px-3 py-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
          >
            <HiChatBubbleOvalLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{formatNumber(stats.comments)}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onRepost?.();
            }}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all ${isReposted
                ? 'text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                : 'text-gray-500 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
              }`}
          >
            <HiArrowPathRoundedSquare className="w-5 h-5" />
            <span className="text-sm font-medium">{formatNumber(stats.reposts)}</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.();
            }}
            className={`p-2 rounded-full transition-all ${isBookmarked
                ? 'text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                : 'text-gray-500 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
              }`}
          >
            {isBookmarked ? (
              <HiBookmark className="w-5 h-5 fill-current" />
            ) : (
              <HiOutlineBookmark className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onShare?.();
            }}
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <HiShare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

// Example usage component
export function PostcardExample() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isReposted, setIsReposted] = useState(false);

  const samplePost = {
    id: '1',
    user: {
      id: 'user1',
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
    },
    content: `Just launched my new project! 🚀 

Check it out at https://myawesomeproject.com - would love to get your feedback.

#WebDev #React #NextJS`,
    media: [
      {
        id: '1',
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
        alt: 'Coding setup',
      },
      {
        id: '2',
        type: 'image' as const,
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        alt: 'Another coding image',
      },
    ],
    stats: {
      views: 12500,
      likes: 234,
      comments: 45,
      reposts: 12,
    },
    timestamp: '2h',
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <Postcard
        {...samplePost}
        isLiked={isLiked}
        isBookmarked={isBookmarked}
        isReposted={isReposted}
        onLike={() => setIsLiked(!isLiked)}
        onBookmark={() => setIsBookmarked(!isBookmarked)}
        onRepost={() => setIsReposted(!isReposted)}
        onComment={() => console.log('Comment clicked')}
        onShare={() => console.log('Share clicked')}
        onUserClick={(userId) => console.log('User clicked:', userId)}
      />
    </div>
  );
}