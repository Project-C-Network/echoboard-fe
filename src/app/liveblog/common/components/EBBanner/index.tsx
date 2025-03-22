'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import EBStarRating from '../EBStarRating';

const QuestionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-EBPrimary-100 text-center p-8 border-b-4 border-EBPrimary-200 relative'
        >
          {/* Close Icon */}
          <button
            className='absolute top-2 right-2 text-EBLight transition-all duration-200 hover:rotate-90'
            onClick={handleClose}
          >
            <i className='ri-close-line text-3xl'></i>
          </button>

          {/* Label and Rating */}
          <div className='flex flex-col items-center justify-center'>
            {/* Label */}
            <h5 className='font-semibold text-EBLight uppercase'>"Question of the Month"</h5>

            {/* Rating Component */}
            <div className='mt-2'>
              <EBStarRating rating={5} />
            </div>
          </div>

          {/* Lines and <h6> Text */}
          <div className='flex items-center justify-center mt-4'>
            {/* Left Line */}
            <div className='w-24 h-px bg-EBLight'></div> {/* Fixed width */}

            {/* <h6> Text */}
            <h6 className='text-EBLight mx-4'>What is the best morning diet?</h6>

            {/* Right Line */}
            <div className='w-24 h-px bg-EBLight'></div> {/* Fixed width */}
          </div>

          {/* Avatar */}
          <div className='flex justify-center mt-4'>
            <Image
              src='https://i.pravatar.cc/150?img=6' // Path to your avatar image
              alt='Avatar'
              width={32} // Set the width of the avatar
              height={32} // Set the height of the avatar
              className='rounded-full' // Make the avatar circular
            />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default QuestionBanner;