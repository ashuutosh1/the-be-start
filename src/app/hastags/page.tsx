'use client';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/page';
import ChatArea from '@/components/chatArea/page';
import { useHashtag } from '@/contexts/HashtagContext';
import {
  HiSearch,
} from 'react-icons/hi';

export default function HashTagPage() {
  // --- STATE MANAGEMENT ---
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { followedHashtags, allHashtagChats, unfollowHashtag } = useHashtag();

  // --- DERIVED STATE & HANDLERS ---
  const hashtagChats = allHashtagChats.filter(chat =>
    followedHashtags.includes(chat.hashtag)
  );

  const filteredChats = hashtagChats.filter(chat =>
    chat.hashtag.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedChatData = hashtagChats.find(chat => chat.id === selectedChat);

  const handleUnfollowHashtag = (hashtag: string) => {
    unfollowHashtag(hashtag);
    // If the currently selected chat is unfollowed, close it
    if (selectedChatData && selectedChatData.hashtag === hashtag) {
      setSelectedChat(null);
    }
  };

  // Reusable component for displaying the list of hashtag chats
  const ChatList = () => (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Followed Hashtags</h2>
        <div className="relative">
          <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search followed hashtags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {filteredChats.length === 0 ? (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
            {searchTerm ? 'No hashtags found' : 'No followed hashtags yet'}
          </div>
        ) : (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors ${selectedChat === chat.id ? 'bg-purple-50 dark:bg-purple-900/20 border-l-2 border-l-purple-500' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{chat.hashtag}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{chat.lastMessageTime}</span>
                  {chat.unreadCount > 0 && (
                    <div className="bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                      {chat.unreadCount}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500">{chat.memberCount.toLocaleString()} members</p>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(156, 163, 175, 0.5) transparent; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.6); }
        .dark .custom-scrollbar { scrollbar-color: rgba(75, 85, 99, 0.6) transparent; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(75, 85, 99, 0.4); }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(75, 85, 99, 0.7); }
      `}</style>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto] min-h-screen">

            {/* --- 1. SIDEBAR --- */}
            <Sidebar />

            {/* --- 2. MAIN CONTENT (CHAT) --- */}
            <main className="flex flex-col min-h-screen border-l border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black">

              {/* Chat List (Visible on < lg screens, hidden when a chat is selected) */}
              <div className={`p-2 block lg:hidden ${selectedChat ? 'hidden' : 'flex'}`}>
                <ChatList />
              </div>

              {/* Chat Area */}
              <div className={`flex-1 flex flex-col ${!selectedChat ? 'hidden lg:flex' : 'flex'}`}>
                <ChatArea
                  selectedChatData={selectedChatData}
                  onClose={() => setSelectedChat(null)}
                  showCloseButton={true}
                  isFollowed={true}
                  onFollowToggle={() => {
                    if (selectedChatData) {
                      handleUnfollowHashtag(selectedChatData.hashtag);
                    }
                  }}
                />
              </div>
            </main>

            {/* --- 3. RIGHT PANEL (TRENDS & CHAT LIST) --- */}
            <aside className="hidden lg:block w-[350px] sticky top-0 h-screen p-4 overflow-y-auto custom-scrollbar space-y-4 bg-white dark:bg-black">
              {/* Hashtag Chat List (Desktop) */}
              <ChatList />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}