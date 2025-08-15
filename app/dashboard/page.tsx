'use client';

import { useState, useContext } from 'react';
import TabGroup from '@/components/Tabs/TabGroup';
import Tab from '@/components/Tabs/Tab';
import TabPanel from '@/components/Tabs/TabPanel';
import { ProjectsContext } from '@/context/ProjectsContext';
import { SkillsContext } from '@/context/SkillsContext';

export default function Dashboard() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('');
  const projectsContext = useContext(ProjectsContext);
  const skillsContext = useContext(SkillsContext);

  if (!projectsContext || !skillsContext) throw new Error('Contexts must be used within providers');

  const { projects } = projectsContext;
  const { skills } = skillsContext;

  const handleSaveProfile = () => {
    alert('Profile saved!');
    // You can add context update logic here if needed
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">Welcome to your Dashboard</h1>

        {/* Name input section */}
        <label className="block text-gray-700 font-medium mb-2">Enter your name:</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-6"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p className="mt-2 text-lg text-gray-600">
          Hello, <span className="font-semibold">{name || 'Guest'}</span> 👋
        </p>

        {/* Tabs section */}
        <TabGroup>
          <Tab index={0} label="Projects" />
          <Tab index={1} label="Skills" />
          <Tab index={2} label="Profile Info" />

          {/* Projects Tab */}
          <TabPanel index={0}>
            {projects.length === 0 ? (
              <p className="text-gray-500">No projects yet. Start adding projects in the Editor!</p>
            ) : (
              <ul className="space-y-4">
                {projects.map((project, i) => (
                  <li key={i} className="p-4 border rounded shadow-sm bg-white">
                    <h3 className="font-semibold text-indigo-600">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </TabPanel>

          {/* Skills Tab */}
          <TabPanel index={1}>
            {skills.length === 0 ? (
              <p className="text-gray-500">No skills yet. Start adding skills in the Editor!</p>
            ) : (
              <ul className="space-y-2">
                {skills.map((skill, i) => (
                  <li key={i} className="p-2 border rounded bg-white text-gray-700 font-medium">
                    {skill.name}
                  </li>
                ))}
              </ul>
            )}
          </TabPanel>

          {/* Profile Info Tab */}
          <TabPanel index={2}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                className="mt-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                onClick={handleSaveProfile}
              >
                Save
              </button>
            </div>
          </TabPanel>
        </TabGroup>
      </div>
    </main>
  );
}
