'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [name, setName] = useState('');

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="mt-4">Hello, {name || 'Guest'}!</p>
    </main>
  );
}
