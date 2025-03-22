'use client';
import React, { useState } from 'react';

interface EBToggleButtonProps { }

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'me', label: 'Me' },
];

const EBToggleButton: React.FC<EBToggleButtonProps> = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className='flex space-x-4 mb-4'>

      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`w-1/2 px-6 py-2 rounded-full text-lg font-bold transition-all 
            ${activeTab === tab.id
              ? 'bg-EBLight text-EBPrimary-100 border-2 border-EBLight shadow-sm'
              : 'bg-EBPrimary-100 text-EBSecondary border-2 border-EBSecondary shadow-lg'
            }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default EBToggleButton;
