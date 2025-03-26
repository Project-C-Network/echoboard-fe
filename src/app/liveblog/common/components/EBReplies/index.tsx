import Image from 'next/image';
import React from 'react';
import { formatTimestamp } from '../../utils';
import { Comment } from '../../utils/types';

type EBRepliesProps = { replies: Comment[] };

const EBReplies = ({ replies }: EBRepliesProps) => {
  return (
    <div className='mt-2 space-y-2 pl-10'>
      {replies.map((reply) => (
        <div key={reply.id} className='flex items-start gap-2'>
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <Image
              src={reply.avatar}
              alt={`${reply.name}'s avatar`}
              width={24}
              height={24}
              className='w-full h-full object-cover'
              onError={(e) => {
                e.currentTarget.src = '/default-avatar.png';
              }}
            />
          </div>
          <div className='flex-1'>
            <p className='text-EBLight text-sm'>{reply.message}</p>
            <p className='text-EBSecondary text-xs mt-1'>{formatTimestamp(reply.timestamp)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(EBReplies);
