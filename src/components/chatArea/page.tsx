'use client';
import { useState, useEffect } from 'react';
import {
    HiDotsVertical,
    HiX,
    HiPlus,
    HiCheck,
} from 'react-icons/hi';
import Messages from './Messages';

// --- INTERFACES ---
interface Message {
    id: number;
    userId: string;
    username: string;
    avatar: string;
    content: string;
    timestamp: string;
    likes: number;
    replies?: Message[];
}

interface ChatData {
    id: string;
    hashtag: string;
    description: string;
    memberCount: number;
    lastMessage: string;
    lastMessageTime: string;
    unreadCount: number;
    isActive: boolean;
    messages: Message[];
}

interface ChatAreaProps {
    selectedChatData: ChatData | undefined;
    onClose: () => void;
    showCloseButton?: boolean;
    isFollowed?: boolean;
    onFollowToggle?: () => void;
}

export default function ChatArea({
    selectedChatData,
    onClose,
    showCloseButton = true,
    isFollowed = false,
    onFollowToggle,
}: ChatAreaProps) {
    const [activeView, setActiveView] = useState<'chats' | 'posts'>('chats');

    // Reset the view to 'chats' whenever the selected chat changes
    useEffect(() => {
        setActiveView('chats');
    }, [selectedChatData]);

    if (!selectedChatData) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-black transition-colors">
                <div className="text-center p-4">
                    <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                        <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">#</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">Welcome to Hashtag Chats</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-sm transition-colors">Select a hashtag from the list to start chatting with the community. On smaller screens, the list is in this column.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col bg-white dark:bg-black transition-colors">
            {/* Chat Header */}
            <div className="p-4 pb-0 border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors">
                {/* Top part of header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {showCloseButton && (
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                <HiX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </button>
                        )}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedChatData.hashtag}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{selectedChatData.memberCount.toLocaleString()} members</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Follow/Unfollow Button */}
                        {onFollowToggle && (
                            <button
                                onClick={onFollowToggle}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isFollowed
                                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                                    }`}
                            >
                                {isFollowed ? (
                                    <>
                                        <HiCheck className="w-4 h-4" />
                                        Following
                                    </>
                                ) : (
                                    <>
                                        <HiPlus className="w-4 h-4" />
                                        Follow
                                    </>
                                )}
                            </button>
                        )}
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                            <HiDotsVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* View Toggle: Chats / Posts */}
                <div className="mt-4 flex border-b border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => setActiveView('posts')}
                        className={`flex-1 pb-2 text-sm font-medium text-center transition-colors ${activeView === 'posts'
                            ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-500'
                            : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                            }`}
                    >
                        Posts
                    </button>
                    <button
                        onClick={() => setActiveView('chats')}
                        className={`flex-1 pb-2 text-sm font-medium text-center transition-colors ${activeView === 'chats'
                            ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-500'
                            : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                            }`}
                    >
                        Chats
                    </button>

                </div>
            </div>

            {/* Conditional Content: Render based on activeView */}
            {activeView === 'chats' ? (
                <Messages
                    messages={selectedChatData.messages}
                    hashtag={selectedChatData.hashtag}
                />
            ) : (
                // Posts View Placeholder
                <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-gray-50 dark:bg-black transition-colors">
                    <div className="text-center p-8">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">Posts for {selectedChatData.hashtag}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors">All public posts for {selectedChatData.hashtag} will appear here.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
