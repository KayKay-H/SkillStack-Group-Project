'use client';
import { useState } from 'react';

export default function EditorPage() {
  const [projectTitle, setProjectTitle] = useState('');

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editor</h1>
      <input
        type="text"
        placeholder="Project Title"
        className="border p-2"
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />
      <p className="mt-4">Preview: {projectTitle || 'No title yet'}</p>
    </main>
  );
}
