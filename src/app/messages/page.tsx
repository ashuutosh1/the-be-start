'use client';
import Sidebar from '@/components/sidebar/page';


export default function MessagesPage() {

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[auto,300px,1fr]">
                    <Sidebar />
     
                </div>
            </div>
        </div>
    );
}
