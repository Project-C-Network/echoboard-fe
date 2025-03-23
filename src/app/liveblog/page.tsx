'use client';
import React, { useEffect, Suspense, lazy } from 'react';

const EBBanner = lazy(() => import('./common/components/EBBanner'));
const EBNavigationPanel = lazy(() => import('./common/components/EBNavigationPanel'));
const EBChatInterface = lazy(() => import('./common/components/EBChatInterface'));
const EBUserProfileCard = lazy(() => import('./common/components/EBUserProfileCard'));

const GRID_LAYOUT = 'grid grid-cols-1 md:grid-cols-[1.2fr_2.25fr_0.5fr]';

const LiveBlogPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='max-w-7xl mx-auto'>
        <EBBanner />
        <div className={GRID_LAYOUT}>
          <Suspense fallback={<div>Loading...</div>}>
            <EBNavigationPanel />
            <EBChatInterface />
            <EBUserProfileCard />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LiveBlogPage;
