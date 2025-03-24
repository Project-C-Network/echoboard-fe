'use client';
import React, { Suspense, lazy } from 'react';
import useSmoothScroll from './common/hooks/useSmoothScroll';

const EBBanner = lazy(() => import('./common/components/EBBanner'));
const EBNavigationPanel = lazy(() => import('./common/components/EBNavigationPanel'));
const EBChatInterface = lazy(() => import('./common/components/EBChatInterface'));
const EBUserProfileCard = lazy(() => import('./common/components/EBUserProfileCard'));

const GRID_LAYOUT =
  'grid grid-cols-1 md:grid-cols-[1.2fr_2.25fr_0.5fr] h-full flex-1 overflow-hidden';

const LiveBlogPage = () => {
  useSmoothScroll();

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='max-w-7xl mx-auto h-screen flex flex-col overflow-hidden p-4'>
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
