'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  return (
    <main className="max-w-md mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Login to SkillStack</h1>

      <label className="block text-gray-700 font-medium mb-2">Email Address</label>
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        onClick={() => alert(`Logging in with: ${email}`)}
      >
        Continue
      </button>
    </main>
  );
}