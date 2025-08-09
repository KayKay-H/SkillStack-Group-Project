'use client';

// Caleb's contribution: TabPanel display logic
// Kayle's contribution: Added index prop and TS typing
// Mauwanu's contribution: Tailwind styling for panel container

import React, { useContext } from 'react';
import { TabContext } from './TabGroup';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
}

export default function TabPanel({ children, index }: TabPanelProps) {
  const context = useContext(TabContext);
  if (!context) throw new Error('TabPanel must be used within a TabGroup');

  const { activeTab } = context;

  return activeTab === index ? (
    <div className="p-4 border rounded bg-white shadow-sm mt-2">{children}</div>
  ) : null;
}
