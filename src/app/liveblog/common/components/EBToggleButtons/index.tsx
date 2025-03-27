'use client';
import React, { useState, useCallback } from 'react';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'me', label: 'Me' },
];

const EBToggleButton: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = useCallback(
    (id: string) => () => {
      setActiveTab(id);
    },
    [],
  );

  return (
    <div className='flex space-x-4 mb-4 justify-center'>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const buttonClass = `w-1/2 sm:w-48 px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg font-bold transition-all ${
          isActive
            ? 'bg-EBLight text-EBPrimary-100 border-2 border-EBLight shadow-sm'
            : 'bg-EBPrimary-100 text-EBSecondary border-2 border-EBSecondary shadow-lg'
        }`;

        return (
          <button key={tab.id} className={buttonClass} onClick={handleTabClick(tab.id)}>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(EBToggleButton);
