import React from 'react';

type EBExpandButtonProps = {
  isExpanded: boolean;
  toggleExpand: () => void;
};

const EBExpandButton = ({ isExpanded, toggleExpand }: EBExpandButtonProps) => {
  return (
    <div className='flex justify-center'>
      <button
        className='text-EBSecondary hover:text-EBSecondary/75 text-sm flex items-center justify-end mt-2'
        onClick={toggleExpand}
        aria-label={isExpanded ? 'Collapse replies' : 'Expand replies'}
      >
        <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line text-xl`}></i>
        <span className='ml-1'>{isExpanded ? 'View less' : 'View more'}</span>
      </button>
    </div>
  );
};

export default EBExpandButton;
