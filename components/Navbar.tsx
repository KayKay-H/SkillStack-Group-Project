"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-indigo-600 text-white px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" onClick={closeMenu}>SkillStack</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link href="/editor" className="hover:text-gray-300">Editor</Link></li>
          <li><Link href="/login" className="hover:text-gray-300">Login</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="mt-4 bg-indigo-700 px-4 py-4 rounded-lg shadow-md flex flex-col gap-4 text-sm font-medium md:hidden">
          <li><Link href="/" onClick={closeMenu} className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/dashboard" onClick={closeMenu} className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link href="/editor" onClick={closeMenu} className="hover:text-gray-300">Editor</Link></li>
          <li><Link href="/login" onClick={closeMenu} className="hover:tex
