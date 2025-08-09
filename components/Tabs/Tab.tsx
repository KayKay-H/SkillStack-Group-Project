'use client';

// Caleb's contribution: Tab button logic
// Kayle's contribution: Added index prop and TS typing
// Mauwanu's contribution: Tailwind styling for active/inactive states

import React, { useContext } from 'react';
import { TabContext } from './TabGroup';

interface TabProps {
  label: string;
  index: number;
}

export default function Tab({ label, index }: TabProps) {
  const context = useContext(TabContext);
  if (!context) throw new Error('Tab must be used within a TabGroup');

  const { activeTab, setActiveTab } = context;

  return (
    <button
      onClick={() => setActiveTab(index)}
      className={`px-4 py-2 border-b-2 transition-colors
        ${activeTab === index
          ? 'border-indigo-600 text-indigo-600 font-semibold'
          : 'border-transparent text-gray-600 hover:text-indigo-600'}
      `}
    >
      {label}
    </button>
  );
}
