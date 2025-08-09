// Caleb's contribution: Tabs compound component logic (converted to TSX)
// Kayle's contribution: Integrating Tabs and state in Dashboard page
// Mauwanu's contribution: Tailwind styling and responsive UI

'use client';

import TabGroup from '@/components/Tabs/TabGroup';
import Tab from '@/components/Tabs/Tab';
import TabPanel from '@/components/Tabs/TabPanel';

export default function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <TabGroup>
          <Tab index={0} label="Projects" />
          <Tab index={1} label="Skills" />
          <Tab index={2} label="Profile Info" />

          <TabPanel index={0}>
            <p>Manage your projects here. Add, edit, and remove project entries.</p>
          </TabPanel>
          <TabPanel index={1}>
            <p>Update your skills list to showcase your expertise.</p>
          </TabPanel>
          <TabPanel index={2}>
            <p>Edit your personal bio and contact info.</p>
          </TabPanel>
        </TabGroup>
      </div>
    </main>
  );
}
