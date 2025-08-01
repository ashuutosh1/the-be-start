'use client';
import Sidebar from '@/components/sidebar/page';

// In a real app, you'd import icons from a library like heroicons
import {
    UserCircleIcon,
    ShieldCheckIcon,
    BellIcon,
    SunIcon,
    AtSymbolIcon
} from '@heroicons/react/24/outline';

export default function SettingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto pr-72">
                <div className="grid grid-cols-1 md:grid-cols-[auto,1fr]">
                    {/* Sidebar for navigation */}
                    <Sidebar />

                    {/* Main content area */}
                    <main className="border-x border-gray-200 dark:border-gray-800">
                        {/* Sticky Header */}
                        <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md p-4 border-b border-gray-200 dark:border-gray-800">
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Settings</h1>
                        </div>

                        {/* Settings Content Container with reduced width */}
                        <div className="max-w-4xl mx-auto p-6 space-y-10">

                            {/* Section: Account Information */}
                            <section className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                    <UserCircleIcon className="w-6 h-6 mr-3 text-gray-500" />
                                    Account Information
                                </h2>
                                <div className="space-y-5 pl-9">
                                    {/* Username Input */}
                                    <div className=''>
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-6">Username</label>
                                        <span className="mt-1 relative rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <AtSymbolIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                className="block w-full max-w-md p-2 rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-gray-900 dark:text-gray-100"
                                                placeholder="your_username"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-gray-200 dark:border-gray-800" />

                            {/* Section: Display */}
                            <section className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                    <SunIcon className="w-6 h-6 mr-3 text-gray-500" />
                                    Display
                                </h2>
                                <div className="space-y-5 pl-9">
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-gray-100">Theme</h3>
                                        <div className="mt-3 flex flex-wrap gap-3">
                                            <button className="px-4 py-2 rounded-lg border border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-sm font-semibold">Light</button>
                                            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold">Dark</button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Privacy & Safety */}
                            <section className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                    <ShieldCheckIcon className="w-6 h-6 mr-3 text-gray-500" />
                                    Privacy and Safety
                                </h2>
                                <div className="space-y-5 pl-9">

                                    {/* Muted and Blocked Accounts Links */}
                                    <div className="flex space-x-6">
                                        <a href="#" className="text-sm text-purple-600 hover:underline dark:text-purple-400">Manage Muted Accounts</a>
                                        <a href="#" className="text-sm text-purple-600 hover:underline dark:text-purple-400">Manage Blocked Accounts</a>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-gray-200 dark:border-gray-800" />

                            {/* Section: Notifications */}
                            <section className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                                    <BellIcon className="w-6 h-6 mr-3 text-gray-500" />
                                    Notifications
                                </h2>
                                <div className="space-y-5 pl-9">
                                    {/* Email Notification Checkboxes */}
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-gray-100">Email Notifications</h3>
                                        <fieldset className="mt-3 space-y-3">
                                            <div className="relative flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input id="comments" name="notifications" type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-blue-600 focus:ring-blue-500" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700 dark:text-gray-300">New Comments</label>
                                                </div>
                                            </div>
                                            <div className="relative flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input id="likes" name="notifications" type="checkbox" className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-blue-600 focus:ring-blue-500" defaultChecked />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="likes" className="font-medium text-gray-700 dark:text-gray-300">New Likes & Reactions</label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-gray-200 dark:border-gray-800" />


                            <hr className="border-gray-200 dark:border-gray-800" />

                            {/* Section: Danger Zone */}
                            <section className="space-y-6">
                                <h2 className="text-lg font-semibold text-red-600 dark:text-red-500">Danger Zone</h2>
                                <div className="space-y-5 pl-9">
                                    {/* Deactivate Account */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-red-500/30 rounded-lg">
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-gray-100">Deactivate Account</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your profile will be hidden until you reactivate.</p>
                                        </div>
                                        <button className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-red-600 dark:text-red-500 shadow-sm ring-1 ring-inset ring-red-500/50 hover:bg-red-50 dark:hover:bg-red-900/20 whitespace-nowrap">Deactivate</button>
                                    </div>
                                    {/* Delete Account */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-red-500/30 rounded-lg">
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-gray-100">Delete Account</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">This is permanent. All your data will be removed.</p>
                                        </div>
                                        <button className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 whitespace-nowrap">Delete Permanently</button>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}