import Image from 'next/image';
import React, { useState, useCallback, Suspense, lazy } from 'react';

const EBToggleButton = lazy(() => import('../EBToggleButtons'));
const EBInteractionButtons = lazy(() => import('../EBInteractionButtons'));

const QUESTIONS = {
  likes: 10,
  dislikes: 2,
  comments: 5,
  timestamp: '2023-10-01T12:34:56Z',
};

const USERS = [1, 2, 3, 4, 5];

const EBNavigationPanel = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleCardClick = useCallback(
    (item: number) => (e: React.MouseEvent) => {
      e.preventDefault();
      setSelectedItem(item);
    },
    [],
  );

  const handleCardKeyDown = useCallback(
    (item: number) => (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item);
    },
    [],
  );

  const handleButtonClick = useCallback((type: 'like' | 'dislike' | 'comments') => {
    alert(type);
  }, []);

  return (
    <div className='bg-EBPrimary-100 shadow-md p-4'>
      <Suspense fallback={<div>Loading Toggle Button...</div>}>
        <EBToggleButton />
      </Suspense>
      <div className='space-y-4 mx-4'>
        {USERS.map((item) => (
          <a
            key={item}
            href='#'
            className={`relative w-full border-2 rounded-lg p-4 transition-all duration-200 bg-EBLight hover:shadow-lg hover:scale-105 text-left focus:outline-none block no-underline ${
              selectedItem === item ? 'border-EBSecondary bg-EBLight/75' : 'border-EBMaroon'
            }`}
            onClick={handleCardClick(item)}
            onKeyDown={handleCardKeyDown(item)}
            aria-label={`Select card for User ${item}`}
          >
            <div className='pointer-events-none'>
              <div className='flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-2'>
                <div className='w-8 h-8 rounded-full overflow-hidden'>
                  <Image
                    src={`https://i.pravatar.cc/150?img=${item}`}
                    alt={`User ${item}`}
                    width={32}
                    height={32}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex-1'>
                  <p className='text-EBPrimary-100 font-semibold'>User {item}</p>
                  <p className='text-EBPrimary-100'>What is the best morning diet?</p>
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading Interaction Buttons...</div>}>
              <EBInteractionButtons data={QUESTIONS} onButtonClick={handleButtonClick} />
            </Suspense>
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(EBNavigationPanel);
