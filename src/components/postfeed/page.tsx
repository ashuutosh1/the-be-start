'use client';
import { useState } from 'react';
import Postcard from '../postcard/page'; // Update this path as needed

// Feed Component: The main container for all posts
export default function Feed() {
  // Track interaction states for each post
  const [postStates, setPostStates] = useState<{
    [key: string]: {
      isLiked: boolean;
      isBookmarked: boolean;
      isReposted: boolean;
      stats: {
        views: number;
        likes: number;
        comments: number;
        reposts: number;
      };
    }
  }>({});

  // Sample data updated to match the new Postcard component interface
  const posts = [
    {
      id: '2',
      user: {
        id: 'karan_dev',
        name: 'Nitesh',
        username: 'nitesh_dev',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        verified: true,
      },
      content: `Finally finished my project! 🎉 Time to relax and enjoy the monsoon weather. 🌧️`,
      media: [
        {
          id: 'media2',
          type: 'image' as const,
          url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
          alt: 'Coding setup in the rain',
        },
        {
          id: 'media3',
          type: 'image' as const,
          url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
          alt: 'Project dashboard',
        }
      ],
      stats: {
        views: 2500,
        likes: 115,
        comments: 16,
        reposts: 12,
      },
      timestamp: '4h',
    },
    {
      id: '4',
      user: {
        id: 'karan_dev',
        name: 'Nitesh',
        username: 'nitesh_dev',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        verified: true,
      },
      content: `Finally finished my project! 🎉 Time to relax and enjoy the monsoon weather. 🌧️`,
      media: [
        {
          id: 'media2',
          type: 'image' as const,
          url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
          alt: 'Coding setup in the rain',
        },
        {
          id: 'media3',
          type: 'image' as const,
          url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
          alt: 'Project dashboard',
        }
      ],
      stats: {
        views: 2500,
        likes: 115,
        comments: 16,
        reposts: 12,
      },
      timestamp: '4h',
    },
  ];

  // Initialize post states
  const getPostState = (postId: string) => {
    if (!postStates[postId]) {
      const post = posts.find(p => p.id === postId);
      return {
        isLiked: false,
        isBookmarked: false,
        isReposted: false,
        stats: post?.stats || { views: 0, likes: 0, comments: 0, reposts: 0 }
      };
    }
    return postStates[postId];
  };

  // Update post state
  const updatePostState = (postId: string, updates: Partial<typeof postStates[string]>) => {
    setPostStates(prev => ({
      ...prev,
      [postId]: {
        ...getPostState(postId),
        ...updates
      }
    }));
  };

  // Handle interactions
  const handleLike = (postId: string) => {
    const currentState = getPostState(postId);
    const newLikedState = !currentState.isLiked;

    updatePostState(postId, {
      isLiked: newLikedState,
      stats: {
        ...currentState.stats,
        likes: currentState.stats.likes + (newLikedState ? 1 : -1)
      }
    });
  };

  const handleBookmark = (postId: string) => {
    const currentState = getPostState(postId);
    updatePostState(postId, {
      isBookmarked: !currentState.isBookmarked
    });
  };

  const handleRepost = (postId: string) => {
    const currentState = getPostState(postId);
    const newRepostState = !currentState.isReposted;

    updatePostState(postId, {
      isReposted: newRepostState,
      stats: {
        ...currentState.stats,
        reposts: currentState.stats.reposts + (newRepostState ? 1 : -1)
      }
    });
  };

  const handleComment = (postId: string) => {
    // You can implement comment functionality here
    console.log('Comment clicked for post:', postId);
    // For now, just increment the comment count
    const currentState = getPostState(postId);
    updatePostState(postId, {
      stats: {
        ...currentState.stats,
        comments: currentState.stats.comments + 1
      }
    });
  };

  const handleShare = (postId: string) => {
    // Implement share functionality
    console.log('Share clicked for post:', postId);
    // You could open a share dialog, copy link to clipboard, etc.
    if (navigator.share) {
      navigator.share({
        title: 'Check out this post',
        url: `${window.location.origin}/post/${postId}`,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/post/${postId}`);
      // You could show a toast notification here
    }
  };

  const handleUserClick = (userId: string) => {
    // Navigate to user profile
    console.log('User clicked:', userId);
    // You could use Next.js router here: router.push(`/profile/${userId}`)
  };

  return (
    <main className="bg-gray-50 dark:bg-black min-h-screen py-4">
      <div className="max-w-2xl mx-auto space-y-6 px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Your Feed
          </h1>
        </div>

        {/* Posts */}
        {posts.map(post => {
          const state = getPostState(post.id);
          return (
            <Postcard
              key={post.id}
              id={post.id}
              user={post.user}
              content={post.content}
              media={post.media}
              stats={state.stats}
              timestamp={post.timestamp}
              isLiked={state.isLiked}
              isBookmarked={state.isBookmarked}
              isReposted={state.isReposted}
              onLike={() => handleLike(post.id)}
              onComment={() => handleComment(post.id)}
              onRepost={() => handleRepost(post.id)}
              onShare={() => handleShare(post.id)}
              onBookmark={() => handleBookmark(post.id)}
              onUserClick={handleUserClick}
            />
          );
        })}

      </div>
    </main>
  );
}