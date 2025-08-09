// Caleb's contribution: TabGroup logic, state management
// Kayle's contribution: Passing index prop to children
// Mauwanu's contribution: Styling wrapper div with Tailwind

'use client';

import React, { useState, createContext, ReactNode } from 'react';

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
      <div className="tab-group flex flex-col">
        {items}
      </div>
    </TabContext.Provider>
  );
}
