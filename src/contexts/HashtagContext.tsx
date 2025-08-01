'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

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

interface HashtagChat {
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

interface HashtagContextType {
    followedHashtags: string[];
    allHashtagChats: HashtagChat[];
    popularHashtags: PopularHashtag[]; // Add this
    followHashtag: (hashtag: string) => void;
    unfollowHashtag: (hashtag: string) => void;
    isFollowed: (hashtag: string) => boolean;
    getHashtagByName: (hashtag: string) => HashtagChat | undefined; // Add this helper
}

// Add this interface
interface PopularHashtag {
    hashtag: string;
    memberCount: number;
    description: string;
}

const HashtagContext = createContext<HashtagContextType | undefined>(undefined);

export const useHashtag = () => {
    const context = useContext(HashtagContext);
    if (!context) {
        throw new Error('useHashtag must be used within a HashtagProvider');
    }
    return context;
};

export const HashtagProvider = ({ children }: { children: ReactNode }) => {
    const [followedHashtags, setFollowedHashtags] = useState<string[]>([
        '#ReactJS', '#NextJS', '#WebDev' // Initially followed hashtags
    ]);

    // All available hashtag data
    const allHashtagChats: HashtagChat[] = [
        {
            id: '1',
            hashtag: '#ReactJS',
            description: 'React developers community',
            memberCount: 15420,
            lastMessage: 'Check out this new React 18 feature!',
            lastMessageTime: '2m ago',
            unreadCount: 3,
            isActive: true,
            messages: [{ id: 1, userId: 'user1', username: 'alex_dev', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', content: 'Just discovered this amazing React hook pattern! 🚀', timestamp: '10:30 AM', likes: 12 }]
        },
        {
            id: '2',
            hashtag: '#NextJS',
            description: 'Next.js developers community',
            memberCount: 12500,
            lastMessage: 'App Router is amazing!',
            lastMessageTime: '5m ago',
            unreadCount: 1,
            isActive: true,
            messages: [{ id: 1, userId: 'user2', username: 'next_dev', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', content: 'App Router is revolutionizing how we build React apps! 🔥', timestamp: '11:15 AM', likes: 8 }]
        },
        {
            id: '3',
            hashtag: '#WebDev',
            description: 'Web development community',
            memberCount: 25000,
            lastMessage: 'CSS Grid vs Flexbox discussion',
            lastMessageTime: '8m ago',
            unreadCount: 2,
            isActive: true,
            messages: [{ id: 1, userId: 'user3', username: 'css_master', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face', content: 'Still debating CSS Grid vs Flexbox? Use both! They complement each other perfectly 💪', timestamp: '10:45 AM', likes: 18 }]
        },
        {
            id: '4',
            hashtag: '#OpenAI',
            description: 'AI and OpenAI community',
            memberCount: 45000,
            lastMessage: 'GPT-4 is incredible for coding!',
            lastMessageTime: '3m ago',
            unreadCount: 5,
            isActive: true,
            messages: [{ id: 1, userId: 'user4', username: 'ai_enthusiast', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=40&h=40&fit=crop&crop=face', content: 'Just used GPT-4 to help debug my code. The future is here! 🤖', timestamp: '9:30 AM', likes: 25 }]
        },
        {
            id: '5',
            hashtag: '#JavaScript',
            description: 'JavaScript developers community',
            memberCount: 89000,
            lastMessage: 'ES2024 features are amazing!',
            lastMessageTime: '12m ago',
            unreadCount: 7,
            isActive: true,
            messages: [{ id: 1, userId: 'user5', username: 'js_ninja', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face', content: 'The new ES2024 features are going to change how we write JavaScript! 🚀', timestamp: '8:45 AM', likes: 32 }]
        },
        {
            id: '6',
            hashtag: '#TypeScript',
            description: 'TypeScript developers community',
            memberCount: 34000,
            lastMessage: 'Type safety saves the day again!',
            lastMessageTime: '18m ago',
            unreadCount: 4,
            isActive: true,
            messages: [{ id: 1, userId: 'user6', username: 'ts_guru', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face', content: 'TypeScript caught 10 potential bugs before runtime. Love the type safety! 💙', timestamp: '7:20 AM', likes: 19 }]
        },
        {
            id: '7',
            hashtag: '#TailwindCSS',
            description: 'Tailwind CSS community',
            memberCount: 28000,
            lastMessage: 'Utility-first CSS is the way!',
            lastMessageTime: '25m ago',
            unreadCount: 2,
            isActive: true,
            messages: [{ id: 1, userId: 'user7', username: 'tailwind_fan', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', content: 'Built an entire landing page in 30 minutes with Tailwind. Productivity through the roof! ⚡', timestamp: '6:50 AM', likes: 14 }]
        },
        {
            id: '8',
            hashtag: '#AI',
            description: 'Artificial Intelligence community',
            memberCount: 67000,
            lastMessage: 'Machine learning breakthroughs!',
            lastMessageTime: '30m ago',
            unreadCount: 9,
            isActive: true,
            messages: [{ id: 1, userId: 'user8', username: 'ml_researcher', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face', content: 'The latest advances in transformer models are absolutely mind-blowing! 🧠', timestamp: '6:15 AM', likes: 41 }]
        },
        {
            id: '9',
            hashtag: '#Docker',
            description: 'Docker and containerization community',
            memberCount: 23000,
            lastMessage: 'Containerization best practices',
            lastMessageTime: '45m ago',
            unreadCount: 3,
            isActive: true,
            messages: [{ id: 1, userId: 'user9', username: 'docker_expert', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', content: 'Multi-stage Docker builds reduced our image size by 80%! 🐳', timestamp: '5:30 AM', likes: 16 }]
        },
        {
            id: '10',
            hashtag: '#GitHub',
            description: 'GitHub and version control community',
            memberCount: 56000,
            lastMessage: 'GitHub Actions workflows',
            lastMessageTime: '1h ago',
            unreadCount: 6,
            isActive: true,
            messages: [{ id: 1, userId: 'user10', username: 'git_master', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', content: 'Set up automated testing with GitHub Actions. CI/CD has never been easier! 🔄', timestamp: '4:45 AM', likes: 22 }]
        },
        {
            id: '11',
            hashtag: '#funny',
            description: 'Funny memes and jokes community',
            memberCount: 78000,
            lastMessage: 'This meme made my day! 😂',
            lastMessageTime: '1m ago',
            unreadCount: 12,
            isActive: true,
            messages: [{ id: 1, userId: 'user11', username: 'nunu_lord', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face', content: 'Pata hai nitesh bhai ne aaj muthi maari 😂', timestamp: '12:30 PM', likes: 45, }, { id: 2, userId: 'user11', username: 'boob_lord', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face', content: 'sahi main kya 😂', timestamp: '12:30 PM', likes: 5 }]
        }
    ];

    // Add popular hashtags data
    const popularHashtags: PopularHashtag[] = [
        { hashtag: '#JavaScript', memberCount: 89000, description: 'JavaScript developers community' },
        { hashtag: '#funny', memberCount: 78000, description: 'Funny memes and jokes community' },
        { hashtag: '#AI', memberCount: 67000, description: 'Artificial Intelligence community' },
        { hashtag: '#GitHub', memberCount: 56000, description: 'GitHub and version control community' },
        { hashtag: '#OpenAI', memberCount: 45000, description: 'AI and OpenAI community' },
        { hashtag: '#TypeScript', memberCount: 34000, description: 'TypeScript developers community' },
        { hashtag: '#TailwindCSS', memberCount: 28000, description: 'Tailwind CSS community' },
        { hashtag: '#WebDev', memberCount: 25000, description: 'Web development community' },
        { hashtag: '#Docker', memberCount: 23000, description: 'Docker and containerization community' },
        { hashtag: '#ReactJS', memberCount: 15420, description: 'React developers community' },
        { hashtag: '#NextJS', memberCount: 12500, description: 'Next.js developers community' }
    ];

    const followHashtag = (hashtag: string) => {
        if (!followedHashtags.includes(hashtag)) {
            setFollowedHashtags(prev => [...prev, hashtag]);
        }
    };

    const unfollowHashtag = (hashtag: string) => {
        setFollowedHashtags(prev => prev.filter(tag => tag !== hashtag));
    };

    const isFollowed = (hashtag: string) => {
        return followedHashtags.includes(hashtag);
    };

    const getHashtagByName = (hashtag: string) => {
        return allHashtagChats.find(chat => chat.hashtag === hashtag);
    };

    return (
        <HashtagContext.Provider value={{
            followedHashtags,
            allHashtagChats,
            popularHashtags, // Add this
            followHashtag,
            unfollowHashtag,
            isFollowed,
            getHashtagByName // Add this
        }}>
            {children}
        </HashtagContext.Provider>
    );
};
