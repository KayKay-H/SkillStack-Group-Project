'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [message] = useState('Welcome to SkillStack!');

  return (
    <main className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-white via-sky-50 to-blue-100 min-h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
        {message}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        SkillStack helps you build a stunning developer portfolio — no coding required. Just log in, add your projects, and launch your site.
      </p>
      <Link
        href="/dashboard"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
      >
        Get Started
      </Link>
    </main>
  );
}