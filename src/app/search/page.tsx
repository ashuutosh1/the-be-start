'use client';
import Sidebar from '@/components/sidebar/page';
import RightPanel from '@/components/rightpanel/page';
import SearchBar from '@/components/searchbar/page';


export default function Search() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto]">
                    <Sidebar />
                    <main className="border-x border-gray-200 dark:border-black">
                        <div className="sticky top-0 bg-white/80 dark:bg-black backdrop-blur-md p-4">
                         < SearchBar/>
                        </div>

                    </main>
                    <RightPanel />
                </div>
            </div>
        </div>
    );
}
