// Caleb's contribution: TabGroup logic, state management
// Kayle's contribution: Passing index prop to children
// Mauwanu's contribution: Styling wrapper div with Tailwind

'use client';
import React, { useState, createContext, ReactNode, useContext } from 'react';

interface TabContextType {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabGroupProps {
  children: ReactNode;
}

export default function TabGroup({ children }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Inject index prop into each Tab and TabPanel child
  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child as React.ReactElement<any>, { index });
  });

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tab-group flex flex-col">{children}</div>
    </TabContext.Provider>
  );
}

interface TabProps {
  label: string;
  index: number;
}

export function Tab({ label, index }: TabProps) {
  const context = useContext(TabContext);
  if (!context) throw new Error('Tab must be used within a TabGroup');

  const { activeTab, setActiveTab } = context;

  return (
    <button
      onClick={() => setActiveTab(index)}
      className={`px-4 py-2 border-b-2 transition-colors ${
        activeTab === index
          ? 'border-indigo-600 text-indigo-600 font-semibold'
          : 'border-transparent text-gray-600 hover:text-indigo-600'
      }`}
    >
      {label}
    </button>
  );
}

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
}

export function TabPanel({ children, index }: TabPanelProps) {
  const context = useContext(TabContext);
  if (!context) throw new Error('TabPanel must be used within a TabGroup');

  const { activeTab } = context;

  return activeTab === index ? (
    <div className="p-4 border rounded bg-white shadow-sm mt-2">{children}</div>
  ) : null;
}