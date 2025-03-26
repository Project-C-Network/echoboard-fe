import Image from 'next/image';
import React from 'react';
import { profileData } from '../../utils/constants';

const EBUserProfileCard = () => {
  return (
    <div className='bg-EBPrimary-100 shadow-md p-4'>
      <div className='flex flex-col items-center'>
        <div className='rounded-2xl p-4 w-full max-w-xs bg-EBLight'>
          <div className='w-24 h-24 relative mx-auto mb-4'>
            <div className='w-full h-full rounded-full overflow-hidden'>
              <Image
                src={profileData.avatar}
                alt='Profile Picture'
                width={96}
                height={96}
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
            <button
              className='absolute top-[-5px] right-[-5px] text-EBAmber rounded-full p-1 shadow-sm'
              aria-label='Edit profile'
            >
              <i className='ri-pencil-fill text-2xl'></i>
            </button>
          </div>
          <p className='text-EBPrimary-100 font-medium text-center text-sm mb-2'>
            {profileData.username}
          </p>
          <p className='text-EBPrimary-100 italic underline text-center text-xs mb-3'>
            {profileData.email}
          </p>
          <div className='text-center text-EBPrimary-100'>
            <p className='text-1xl underline mb-1'>Points</p>
            <p className='text-3xl font-semibold'>{profileData.points}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EBUserProfileCard);
