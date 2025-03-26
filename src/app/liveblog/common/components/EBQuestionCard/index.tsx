import Image from 'next/image';
import React, { Suspense, useCallback } from 'react';
import { Question } from '../../utils/types';

const EBInteractionButtons = React.lazy(() => import('../EBInteractionButtons'));

type EBQuestionCardProps = { question: Question };

const EBQuestionCard = ({ question }: EBQuestionCardProps) => {
  const handleButtonClick = useCallback((action: 'like' | 'dislike' | 'comments') => {
    alert(action);
  }, []);

  return (
    <div className='flex justify-start'>
      <div className='bg-EBPrimary-100 border-2 border-EBMaroon p-3 rounded-lg max-w-lg'>
        <div className='flex items-start gap-2'>
          <div className='w-8 h-8 rounded-full overflow-hidden'>
            <Image
              src={question.avatar}
              alt={`${question.name}'s avatar`}
              width={32}
              height={32}
              className='w-full h-full object-cover'
              priority
            />
          </div>
          <div className='flex-1'>
            <p className='text-EBLight font-semibold'>{question.name}</p>
            <p className='text-EBLight'>{question.message}</p>
          </div>
        </div>
        <Suspense fallback={<div>Loading buttons...</div>}>
          <EBInteractionButtons data={question} onButtonClick={handleButtonClick} />
        </Suspense>
      </div>
    </div>
  );
};

export default EBQuestionCard;
