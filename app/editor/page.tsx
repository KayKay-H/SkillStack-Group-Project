'use client';
import { useState } from 'react';

export default function EditorPage() {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Project Editor</h1>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Project Title</label>
        <input
          type="text"
          placeholder="My Awesome Project"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Project Description</label>
        <textarea
          placeholder="Tell us about this project..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Live Preview:</h2>
        <p className="font-bold text-indigo-600">{projectTitle || 'No title yet'}</p>
        <p className="text-gray-600">{description || 'No description yet'}</p>
      </div>
    </main>
  );
}