'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
    HiExternalLink,
    HiHeart,
    HiChatAlt2,
    HiShare,
    HiBookmark,
    HiPlay,
    HiPhotograph,

} from 'react-icons/hi';


export default function HashTag() {
    const [activeTab, setActiveTab] = useState('posts');

    const profileData = {
        coverImage: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=1200&h=350&fit=crop',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        username: 'sarah_design',
        name: 'Sarah Chen',
        bio: 'Digital artist & UI designer ✨ Coffee addict ☕ Dog mom 🐕 Living my best life in the city 🌆',
        location: 'New York, NY',
        website: 'sarahchen.art',
        joinDate: 'June 2021',
        following: 1420,
        followers: 12847,
        posts: 890,
        isVerified: true
    };

    const tabs = [
        { id: 'posts', label: 'Posts', count: 890 },
        { id: 'media', label: 'Media', count: 245 },
        { id: 'reels', label: 'Reels', count: 67 },
        { id: 'tagged', label: 'Tagged', count: 156 }
    ];

    const posts = [
        {
            id: 1,
            type: 'image',
            content: 'Just finished this new illustration! What do you think? 🎨',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
            likes: 234,
            comments: 18,
            shares: 12,
            time: '2h ago'
        },
        {
            id: 2,
            type: 'text',
            content: 'Monday motivation: Every expert was once a beginner. Every pro was once an amateur. Keep pushing forward! 💪✨',
            likes: 156,
            comments: 28,
            shares: 45,
            time: '5h ago'
        },
        {
            id: 3,
            type: 'video',
            content: 'Behind the scenes of my latest design process 🎬',
            thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
            likes: 432,
            comments: 67,
            shares: 89,
            time: '1d ago'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto]">

                    <main className=" min-h-screen">

                        {/* Profile Info */}
                        <div className="py-4">

                            {/* Cover Image */}
                            <div className="relative rounded-2xl h-36 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 overflow-hidden">
                                {profileData.coverImage && (
                                    <Image
                                        src={profileData.coverImage}
                                        alt="Cover"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>

                            {/* MODIFIED: Main container to space out details and photo */}
                            <div className="flex flex-col sm:flex-row sm:justify-between -mt-16 sm:-mt-20 relative z-10">


                                {/* Left Side: Details (Name, username, buttons) */}
                                <div className="flex flex-col items-center sm:items-start order-2 sm:order-1 mt-4 sm:mt-0">
                                    <div className="sm:pt-24 text-center sm:text-left">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {profileData.name}
                                        </h2>
                                        <p className="text-black dark:text-gray-400 font-medium">
                                            @{profileData.username}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center sm:justify-end gap-3 mt-4">
                                        <button className="text-white px-5 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>

                                {/* Right Side: Profile Photo */}
                                <div className="relative self-center sm:self-auto order-1 sm:order-2">
                                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl border-4 border-white dark:border-gray-900 overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
                                        {profileData.profileImage && (
                                            <Image
                                                src={profileData.profileImage}
                                                alt={profileData.name}
                                                width={144}
                                                height={144}
                                                className="object-cover"
                                                priority
                                            />
                                        )}
                                    </div>

                                </div>

                            </div>

                            {/* Content Section */}
                            <div className="mt-6 space-y-4">
                                {/* Follower stats */}
                                <div className="flex justify-center sm:justify-start gap-6 text-sm">
                                    <button className="hover:underline">
                                        <span className="font-bold text-gray-900 dark:text-white">
                                            {profileData.following.toLocaleString()}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 ml-1">Following</span>
                                    </button>
                                    <button className="hover:underline">
                                        <span className="font-bold text-gray-900 dark:text-white">
                                            {profileData.followers.toLocaleString()}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 ml-1">Followers</span>
                                    </button>
                                </div>

                                <p className="text-gray-900 dark:text-white leading-relaxed text-center sm:text-left">
                                    {profileData.bio}
                                </p>

                                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <HiExternalLink className="w-4 h-4" />
                                        <a href={`https://${profileData.website}`} className="text-purple-500 hover:underline">
                                            {profileData.website}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-gray-200 dark:border-gray-800 mt-6">
                            <div className="flex">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 px-4 py-4 text-sm font-medium text-center relative transition-colors ${activeTab === tab.id
                                            ? 'text-purple-500'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                            }`}
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{tab.label}</span>
                                            {tab.id === 'reels' && <HiPlay className="w-4 h-4" />}
                                            {tab.id === 'media' && <HiPhotograph className="w-4 h-4" />}
                                        </div>
                                        {activeTab === tab.id && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Posts */}
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                            {posts.map((post) => (
                                <div key={post.id} className="p-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            {profileData.profileImage && (
                                                <Image
                                                    src={profileData.profileImage}
                                                    alt={profileData.name}
                                                    width={40}
                                                    height={40}
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                    {profileData.name}
                                                </span>
                                                {profileData.isVerified && (
                                                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                                <span className="text-gray-500 dark:text-gray-400 text-sm">
                                                    @{profileData.username} · {post.time}
                                                </span>
                                            </div>

                                            <p className="text-gray-900 dark:text-white mb-3">
                                                {post.content}
                                            </p>

                                            {post.image && (
                                                <div className="mb-3 rounded-xl overflow-hidden">
                                                    <Image
                                                        src={post.image}
                                                        alt="Post image"
                                                        width={400}
                                                        height={256}
                                                        className="w-full object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            )}

                                            {post.type === 'video' && post.thumbnail && (
                                                <div className="mb-3 rounded-xl overflow-hidden relative">
                                                    <Image
                                                        src={post.thumbnail}
                                                        alt="Video thumbnail"
                                                        width={400}
                                                        height={256}
                                                        className="w-full object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                                                            <HiPlay className="w-6 h-6 text-gray-900 ml-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                                                    <HiHeart className="w-5 h-5" />
                                                    <span className="text-sm">{post.likes}</span>
                                                </button>
                                                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                                                    <HiChatAlt2 className="w-5 h-5" />
                                                    <span className="text-sm">{post.comments}</span>
                                                </button>
                                                <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                                                    <HiShare className="w-5 h-5" />
                                                    <span className="text-sm">{post.shares}</span>
                                                </button>
                                                <button className="hover:text-purple-500 transition-colors">
                                                    <HiBookmark className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
}