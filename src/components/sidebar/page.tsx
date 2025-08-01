'use client';
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from 'react';
import {
  HiMagnifyingGlass,
  HiUsers,
  HiChatBubbleLeft,
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineChatBubbleLeft,
  HiPlusCircle,
  HiCog6Tooth,
  HiBars3,
  HiXMark
} from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function Sidebar({ isOpen = false, onToggle }: SidebarProps) {

  const pathname = usePathname();

  // Initialize state with saved preference or default values
  const [isCollapsed, setIsCollapsed] = useState(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') return false;

    const savedState = localStorage.getItem('sidebar-manually-collapsed');
    const isManuallyCollapsed = savedState ? JSON.parse(savedState) : false;

    // Apply responsive logic immediately
    if (window.innerWidth < 1280) {
      return !isManuallyCollapsed ? true : isManuallyCollapsed;
    } else {
      return isManuallyCollapsed;
    }
  });

  const [isManuallyCollapsed, setIsManuallyCollapsed] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedState = localStorage.getItem('sidebar-manually-collapsed');
    return savedState ? JSON.parse(savedState) : false;
  });

  // Handle responsive collapsing
  useEffect(() => {
    // Don't run until we've loaded the manual state
    if (isManuallyCollapsed === null) return;

    const handleResize = () => {
      // Use a common breakpoint (lg: 1024px)
      if (window.innerWidth < 1280) {
        // Only auto-collapse if user hasn't manually expanded it
        if (!isManuallyCollapsed) {
          setIsCollapsed(true);
        }
      } else {
        // On larger screens, respect manual collapse state
        setIsCollapsed(isManuallyCollapsed);
      }
    };

    // Set the initial state on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isManuallyCollapsed]); // Add isManuallyCollapsed as dependency

  const mainLinks = [
    {
      icon: HiOutlineHome,
      activeIcon: HiOutlineHome,
      label: 'Home',
      href: '/home'
    },
    {
      icon: HiMagnifyingGlass,
      activeIcon: HiMagnifyingGlass,
      label: 'Search',
      href: '/search'
    },
    {
      icon: HiOutlineChatBubbleLeft,
      activeIcon: HiChatBubbleLeft,
      label: 'Inbox',
      href: '/messages'
    },
    {
      icon: HiOutlineUsers,
      activeIcon: HiUsers,
      label: 'Hashtags',
      href: '/hastags'
    },
    {
      icon: HiOutlineUsers,
      activeIcon: HiUsers,
      label: 'Profile',
      href: '/profile'
    },
    {
      icon: HiCog6Tooth,
      activeIcon: HiCog6Tooth,
      label: 'Settings',
      href: '/settings'
    },
  ];

  const handleLinkClick = () => {
    // Close mobile menu when link is clicked
    if (onToggle && window.innerWidth < 768) {
      onToggle();
    }
  };

  // Handle manual collapse/expand
  const handleManualCollapse = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    setIsManuallyCollapsed(newCollapsedState);
    // Persist the manual state to localStorage
    localStorage.setItem('sidebar-manually-collapsed', JSON.stringify(newCollapsedState));
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-50 h-screen bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800
        transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        ${isCollapsed ? 'w-20' : 'w-72'}
        flex flex-col
      `}>
        <div className="flex flex-col h-full p-4 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            {/* Logo/Brand */}
            <Link
              href="/home"
              className={`flex items-center gap-3 transition-opacity ${isCollapsed ? 'justify-center w-full' : ''}`}
              onClick={handleLinkClick}
            >
              <div className="relative w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/Landing-assets/logo-b-w.png"
                  alt="Bemaxo Logo"
                  width={32}
                  height={32}
                  style={{ objectFit: "contain" }}
                  priority
                  className="w-8 h-8"
                />
              </div>
              {!isCollapsed && (
                <div>
                  <span className="text-2xl font-bold font-sans text-gray-900 dark:text-white block">
                    Bemaxo
                  </span>
                </div>
              )}
            </Link>

            {/* Mobile close button */}
            <button
              onClick={onToggle}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <HiXMark className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Desktop collapse button - positioned on border */}
          <div className="hidden md:block absolute -right-3 top-20 z-10">
            <button
              onClick={handleManualCollapse}
              className="w-6 h-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 flex items-center justify-center shadow-sm"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <HiBars3 className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isCollapsed ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1">
            <div className="mb-6">
              <ul className="space-y-2">
                {mainLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const IconComponent = isActive ? link.activeIcon : link.icon;

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`
                          flex items-center gap-3 px-3 py-3 rounded-xl group hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200
                          ${isCollapsed ? 'justify-center' : ''}
                          ${isActive ? 'bg-gray-50 dark:bg-gray-900' : ''}
                        `}
                        title={isCollapsed ? link.label : undefined}
                      >
                        <div className={`p-1.5 rounded-lg transition-all duration-200 ${isActive
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                          : 'bg-white dark:bg-black text-black dark:text-white group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                          }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {!isCollapsed && (
                          <div className="flex-1 flex items-center justify-between">
                            <span className={`text-sm transition-colors ${isActive
                              ? 'text-gray-900 dark:text-white font-bold'
                              : 'text-gray-700 dark:text-gray-300'
                              }`}>
                              {link.label}
                            </span>
                            {isActive && (
                              <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white"></div>
                            )}
                          </div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Create Post Button */}
          <div className="mb-4">
            <button className={`
              w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 
              text-white dark:text-black font-semibold py-3 px-4 rounded-2xl text-base 
              transition-all duration-200 shadow-lg hover:shadow-xl 
              flex items-center justify-center gap-2
              ${isCollapsed ? 'px-3' : ''}
            `}>
              <HiPlusCircle className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>Create a Post</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}