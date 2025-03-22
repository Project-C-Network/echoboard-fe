import React from 'react';
import Image from 'next/image';

const EBUserProfileCard = () => {
  return (
    <div className='bg-EBPrimary-100 shadow-md p-4'>
      {/* Outer Card Content */}
      <div className='flex flex-col items-center'>
        {/* Inner Card for Image, Email, and Points */}
        <div className='rounded-2xl p-4 w-full max-w-xs bg-EBLight'>
          {/* Profile Image with Edit Icon */}
          <div className='w-24 h-24 relative mx-auto mb-4'>
            {/* Circular mask using clip-path */}
            <div className='w-full h-full rounded-full overflow-hidden'>
              <Image
                src='https://i.pravatar.cc/150?img=1'
                alt='Profile Picture'
                width={96}
                height={96}
                className='w-full h-full object-cover'
              />
            </div>
            <button className='absolute top-[-5px] right-[-5px] text-EBAmber rounded-full p-1 shadow-sm'>
              <i className='ri-pencil-fill text-2xl'></i>
            </button>
          </div>
          {/* User Details */}
          <p className='text-EBPrimary-100 font-medium text-center text-sm mb-2'>darkknight777</p>
          <p className='text-EBPrimary-100 italic underline text-center text-xs mb-3'>
            darkknight777@gmail.com
          </p>
          <div className='text-center text-EBPrimary-100'>
            <p className='text-1xl underline mb-1'>Points</p>
            <p className='text-3xl font-semibold'>457</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBUserProfileCard;
