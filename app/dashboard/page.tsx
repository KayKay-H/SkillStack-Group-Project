'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [name, setName] = useState('');

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Welcome to your Dashboard</h1>

      <label className="block text-gray-700 font-medium mb-2">Enter your name:</label>
      <input
        type="text"
        placeholder="John Doe"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p className="mt-6 text-lg text-gray-600">Hello, <span className="font-semibold">{name || 'Guest'}</span> 👋</p>
    </main>
  );
}