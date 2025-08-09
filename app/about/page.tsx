'use client';

import TabGroup from '@/components/Tabs/TabGroup';
import Tab from '@/components/Tabs/Tab';
import TabPanel from '@/components/Tabs/TabPanel';

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About SkillStack</h1>

        <TabGroup>
          <Tab index={0} label="Our Mission" />
          <Tab index={1} label="Our Team" />
          <Tab index={2} label="Contact" />

          <TabPanel index={0}>
            <p>We aim to empower developers by providing cutting-edge learning tools.</p>
          </TabPanel>
          <TabPanel index={1}>
            <p>Our team is made up of passionate engineers and designers.</p>
          </TabPanel>
          <TabPanel index={2}>
            <p>Contact us at: contact@skillstack.com</p>
          </TabPanel>
        </TabGroup>
      </div>
    </main>
  );
}
