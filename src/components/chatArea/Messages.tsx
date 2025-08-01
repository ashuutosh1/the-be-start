'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
    HiPaperAirplane,
    HiEmojiHappy,
    HiPaperClip,
    HiHeart,
    HiReply,
} from 'react-icons/hi';

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

interface MessagesProps {
    messages: Message[];
    hashtag: string;
}

export default function Messages({ messages, hashtag }: MessagesProps) {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    return (
        <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-black transition-colors custom-scrollbar">
                {messages.map((message) => (
                    <div key={message.id} className="flex gap-3">
                        <Image
                            src={message.avatar}
                            alt={message.username}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900 dark:text-white">{message.username}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{message.timestamp}</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 mb-2">{message.content}</p>
                            <div className="flex items-center gap-4 text-sm">
                                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
                                    <HiHeart className="w-4 h-4" /> <span>{message.likes}</span>
                                </button>
                                <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
                                    <HiReply className="w-4 h-4" /> <span>Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors">
                <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <HiPaperClip className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder={`Message ${hashtag}...`}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="w-full px-4 py-2 pr-10 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full">
                            <HiEmojiHappy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="p-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 rounded-full transition-colors"
                    >
                        <HiPaperAirplane className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgb(196 181 253 / 0.5) transparent;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgb(196 181 253 / 0.5);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgb(196 181 253 / 0.8);
                }
                :global(.dark) .custom-scrollbar {
                    scrollbar-color: rgb(147 51 234 / 0.6) transparent;
                }
                :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgb(147 51 234 / 0.6);
                }
                :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgb(147 51 234 / 0.9);
                }
            `}</style>
        </>
    );
}
