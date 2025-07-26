import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/editor">Editor</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
