'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useMemo, lazy, Suspense } from 'react';

const EBStarRating = lazy(() => import('../EBStarRating'));

const QuestionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  const bannerContent = useMemo(
    () => (
      <motion.section
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='bg-EBPrimary-100 text-center p-8 border-b-4 border-EBPrimary-200 relative'
      >
        <button
          className='absolute top-2 right-2 text-EBLight transition-all duration-200 hover:rotate-90'
          onClick={handleClose}
        >
          <i className='ri-close-line text-3xl'></i>
        </button>

        <div className='flex flex-col items-center justify-center'>
          <h5 className='font-semibold text-EBLight uppercase'>"Question of the Month"</h5>
          <div className='mt-2'>
            <Suspense fallback={<div>Loading rating...</div>}>
              <EBStarRating rating={5} />
            </Suspense>
          </div>
        </div>

        <div className='flex items-center justify-center mt-4'>
          <div className='w-24 h-px bg-EBLight'></div>
          <h6 className='text-EBLight mx-4'>What is the best morning diet?</h6>
          <div className='w-24 h-px bg-EBLight'></div>
        </div>

        <div className='flex justify-center mt-4'>
          <Image
            src='https://i.pravatar.cc/150?img=6'
            alt='Avatar'
            width={32}
            height={32}
            className='rounded-full'
            priority={false}
          />
        </div>
      </motion.section>
    ),
    [],
  );

  return <AnimatePresence>{isVisible && bannerContent}</AnimatePresence>;
};

export default React.memo(QuestionBanner);
