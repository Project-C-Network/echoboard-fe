import React, { useState } from 'react';
import Image from 'next/image';
import EBToggleButton from '../EBToggleButtons';

const EBNavigationPanel = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className='bg-EBPrimary-100 shadow-md p-4'>
      {/* Center the toggle buttons */}
      <EBToggleButton />

      {/* List of users with questions */}
      <div className='space-y-4 mx-4'>
        {[1, 2, 3, 4, 5].map((item) => (
          // Card container (relative positioning for the invisible button)
          <div
            key={item}
            className={`relative w-full border-2 rounded-lg p-4 transition-all duration-200
        bg-EBLight hover:shadow-lg hover:scale-105
        ${selectedItem === item
                ? 'border-EBSecondary bg-EBLight/75' // Selected item styles
                : 'border-EBMaroon' // Default (non-selected) styles  
              }`}
          >
            {/* Card content */}
            <div className='flex items-start space-x-2'>
              {/* Avatar */}
              <div className='w-8 h-8 rounded-full overflow-hidden'>
                <Image
                  src={`https://i.pravatar.cc/150?img=${item}`}
                  alt={`User ${item}`}
                  width={32}
                  height={32}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* User details */}
              <div className='flex-1'>
                <p className='text-EBPrimary-100 font-semibold'>User {item}</p>
                <p className='text-EBPrimary-100'>What is the best morning diet?</p>
              </div>
            </div>

            {/* Like/Dislike buttons and timestamp */}
            <div className='flex justify-between items-center mt-2 pl-10'>
              {/* Like/Dislike buttons */}
              <div className='flex items-center space-x-4'>
                {/* Like Button */}
                <button
                  className='text-EBSuccess-100 flex items-center'
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent button's onClick from firing
                    console.log('Like clicked');
                  }}
                >
                  <i className='ri-thumb-up-line'></i>
                  <span className='ml-1 text-sm text-EBSuccess-100'>12</span>
                </button>

                {/* Dislike Button */}
                <button
                  className='text-EBDanger flex items-center'
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent button's onClick from firing
                    console.log('Dislike clicked');
                  }}
                >
                  <i className='ri-thumb-down-line'></i>
                  <span className='ml-1 text-sm text-EBDanger'>2</span>
                </button>

                {/* Comments Button */}
                <button
                  className='text-EBOliveGreen flex items-center'
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent button's onClick from firing
                    console.log('Comments clicked');
                  }}
                >
                  <i className='ri-chat-3-line'></i>
                  <span className='ml-1 text-sm text-EBOliveGreen'>5</span> {/* Comments count */}
                </button>
              </div>

              {/* Timestamp */}
              <p className='text-EBPrimary-100 text-sm'>4 hrs ago</p>
            </div>

            {/* Invisible button for card selection */}
            <button
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' // Covers the entire card
              onClick={() => setSelectedItem(item)} // Set the selected item on click
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedItem(item); // Handle keyboard interaction
                }
              }}
              aria-label={`Select card for User ${item}`} // Accessibility label
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EBNavigationPanel;
