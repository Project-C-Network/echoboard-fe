'use client';
import React, { useId } from 'react';

interface EBStarRatingProps {
  rating: number;
  className?: string;
}

const EBStarRating: React.FC<EBStarRatingProps> = ({ rating, className = '' }) => {
  const id = useId();

  return (
    <div className={`flex justify-center space-x-1 ${className}`}>
      {[...Array(rating)].map((_, index) => (
        <i key={`${id}-${index}`} className='ri-star-fill text-2xl text-EBAmber'></i>
      ))}
    </div>
  );
};

export default EBStarRating;