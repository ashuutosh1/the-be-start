'use client';
import ProfilePage from '@/components/profile/page';
import Sidebar from '../../components/sidebar/page';
import RightPanel from '@/components/rightpanel/page';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto] min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main >

            <div className="p-4">
              <ProfilePage />
              {/* <PostFeed /> */}
            </div>
          </main>

          {/* Right Panel */}
          <RightPanel />
        </div>
      </div>
    </div>
  );
}