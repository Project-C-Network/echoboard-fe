'use client';
import React from 'react';

interface EBStarRatingProps {
  rating: number;
  className?: string;
}

const EBStarRating: React.FC<EBStarRatingProps> = ({ rating, className = '' }) => {
  return (
    <div className={`flex justify-center space-x-1 ${className}`}>
      {[...Array(rating)].map((_, index) => (
        <i key={`star-${index + 1}`} className='ri-star-fill text-2xl text-EBAmber'></i>
      ))}
    </div>
  );
};

export default React.memo(EBStarRating);
