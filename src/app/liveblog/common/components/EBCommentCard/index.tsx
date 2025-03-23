import Image from 'next/image';
import React, { Suspense, useCallback } from 'react';
import { Comment } from '../../utils/types';

const EBInteractionButtons = React.lazy(() => import('../EBInteractionButtons'));
const EBExpandButton = React.lazy(() => import('../EBExpandButton'));
const EBReplies = React.lazy(() => import('../EBReplies'));

type EBCommentCardProps = {
  comment: Comment;
  isExpanded: boolean;
  toggleExpand: (commentId: string) => void;
};

const EBCommentCard = ({ comment, isExpanded, toggleExpand }: EBCommentCardProps) => {
  const handleButtonClick = useCallback((action: 'like' | 'dislike' | 'comments') => {
    alert(action);
  }, []);

  return (
    <div className='flex justify-end'>
      <div className='bg-EBPrimary-100/50 border-2 border-EBSecondary p-3 rounded-lg max-w-lg w-full'>
        <div className='flex items-start gap-2'>
          <div className='w-8 h-8 rounded-full overflow-hidden'>
            <Image
              src={comment.avatar}
              alt={`${comment.name}'s avatar`}
              width={32}
              height={32}
              className='w-full h-full object-cover'
              priority
            />
          </div>
          <div className='flex-1'>
            <p className='text-EBLight font-semibold'>{comment.name}</p>
            <p className='text-EBLight'>{comment.message}</p>
          </div>
        </div>
        <Suspense fallback={<div>Loading buttons...</div>}>
          <EBInteractionButtons data={comment} onButtonClick={handleButtonClick} />
        </Suspense>
        {comment.replies && comment.replies.length > 0 && (
          <Suspense fallback={<div>Loading replies...</div>}>
            {isExpanded && <EBReplies replies={comment.replies} />}
            <EBExpandButton isExpanded={isExpanded} toggleExpand={() => toggleExpand(comment.id)} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default React.memo(EBCommentCard);
