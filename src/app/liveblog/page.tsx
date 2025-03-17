'use client';
import React from 'react';
import EBBanner from './common/components/EBBanner';
import EBBlogTiles from './common/components/EBBlogTiles';
import EBPairTiles from './common/components/EBPairTiles';
import EBToggleButtons from './common/components/EBToggleButtons';

const LiveBlogPage = () => {
  // const { close, isOpen, toggle } = useToggle();

  return (
    <div>
      <EBBanner />
      <section className='flex'>
        <section className='w-3/5 bg-orange'>
          <div className='flex flex-col items-center p-4'>
            <EBToggleButtons />
            <EBBlogTiles />
          </div>
        </section>
        <section className='w-2/5 bg-pink'>
          <EBPairTiles />
        </section>
      </section>
    </div>
  );
};

export default LiveBlogPage;
