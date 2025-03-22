'use client';
import React, { useEffect } from 'react';
import EBBanner from './common/components/EBBanner';
import EBNavigationPanel from './common/components/EBNavigationPanel';
import EBChatInterface from './common/components/EBChatInterface';
import EBUserProfileCard from './common/components/EBUserProfileCard';

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
        <div className='grid grid-cols-1 md:grid-cols-[1.2fr_2.25fr_0.5fr]'>
          <EBNavigationPanel />
          <EBChatInterface />
          <EBUserProfileCard />
        </div>
      </div>
    </div>
  );
};

export default LiveBlogPage;
