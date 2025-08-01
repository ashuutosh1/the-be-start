'use client';
import { useState } from 'react';
import PostFeed from '@/components/postfeed/page';
import Sidebar from '../../components/sidebar/page';
import RightPanel from '@/components/rightpanel/page';
import ChatArea from '@/components/chatArea/page';
import { useHashtag } from '@/contexts/HashtagContext';

export default function HomePage() {
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
  const { allHashtagChats, isFollowed, followHashtag, unfollowHashtag } = useHashtag();

  const selectedChatData = allHashtagChats.find(chat => chat.hashtag === selectedHashtag);

  const handleHashtagClick = (hashtag: string) => {
    setSelectedHashtag(hashtag);
  };

  const handleFollowToggle = () => {
    if (selectedHashtag) {
      if (isFollowed(selectedHashtag)) {
        unfollowHashtag(selectedHashtag);
      } else {
        followHashtag(selectedHashtag);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto] min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex flex-col min-h-screen border-l border-r border-gray-200 dark:border-gray-800">
            {selectedHashtag ? (
              <ChatArea
                selectedChatData={selectedChatData}
                onClose={() => setSelectedHashtag(null)}
                showCloseButton={true}
                isFollowed={selectedHashtag ? isFollowed(selectedHashtag) : false}
                onFollowToggle={handleFollowToggle}
              />
            ) : (
              <div className="p-4 bg-white dark:bg-black">
                {/* <PostBox /> */}
                <PostFeed />
              </div>
            )}
          </main>

          {/* Right Panel */}
          <RightPanel onHashtagClick={handleHashtagClick} />
        </div>
      </div>
    </div>
  );
}