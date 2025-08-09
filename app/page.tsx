// Kayle's: Home page layout with Navbar and Footer
// Mauwanu's contribution: Styling with Tailwind for professional look

"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">Welcome to SkillStack</h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Build your developer portfolio without writing code. Manage projects, skills, and showcase your best work easily.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
