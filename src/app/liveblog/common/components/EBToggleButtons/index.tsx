'use client';
import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex space-x-4 mb-4'>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleTabChange('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleTabChange('me')}
      >
        Me
      </button>
    </div>
  );
};

export default App;
