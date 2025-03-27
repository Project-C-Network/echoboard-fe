import React, { useCallback } from 'react';
import { formatTimestamp } from '../../utils';

type ButtonType = 'like' | 'dislike' | 'comments';

type EBInteractionButtonsProps = {
  data?: {
    likes: number;
    dislikes: number;
    comments: number;
    timestamp: string;
  };
  onButtonClick: (type: ButtonType) => void;
};

const DEFAULT_DATA = {
  likes: 0,
  dislikes: 0,
  comments: 0,
  timestamp: '',
};

const buttonConfigs: Record<ButtonType, { icon: string; colorClass: string }> = {
  like: { icon: 'ri-thumb-up-line', colorClass: 'text-EBSuccess-100' },
  dislike: { icon: 'ri-thumb-down-line', colorClass: 'text-EBDanger' },
  comments: { icon: 'ri-chat-3-line', colorClass: 'text-EBOliveGreen' },
};

const EBInteractionButtons = ({
  data = DEFAULT_DATA,
  onButtonClick,
}: EBInteractionButtonsProps) => {
  const { likes, dislikes, comments, timestamp } = data;

  const handleButtonClick = useCallback(
    (type: ButtonType) => (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onButtonClick(type);
    },
    [onButtonClick],
  );

  const renderButton = (type: ButtonType, count: number) => {
    let icon: string;
    let colorClass: string;

    switch (type) {
      case 'like':
        icon = buttonConfigs.like.icon;
        colorClass = buttonConfigs.like.colorClass;
        break;
      case 'dislike':
        icon = buttonConfigs.dislike.icon;
        colorClass = buttonConfigs.dislike.colorClass;
        break;
      case 'comments':
        icon = buttonConfigs.comments.icon;
        colorClass = buttonConfigs.comments.colorClass;
        break;
      default:
        throw new Error(`Invalid button type: ${type}`);
    }

    return (
      <button
        key={type}
        className={`flex items-center ${colorClass}`}
        onClick={handleButtonClick(type)}
      >
        <i className={icon}></i>
        <span className='ml-1 text-sm'>{count}</span>
      </button>
    );
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 pl-0 sm:pl-10 pointer-events-auto'>
      <div className='flex items-center space-x-4'>
        {renderButton('like', likes)}
        {renderButton('dislike', dislikes)}
        {renderButton('comments', comments)}
      </div>
      <p className='text-EBPrimary-100 text-sm mt-2 sm:mt-0'>{formatTimestamp(timestamp)}</p>
    </div>
  );
};

export default React.memo(EBInteractionButtons);
