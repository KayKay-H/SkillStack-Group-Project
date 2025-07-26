import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-lg font-semibold">
        <Link href="/">SkillStack</Link>
      </div>
      
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        <li><Link href="/"><span className="hover:text-gray-300">Home</span></Link></li>
        <li><Link href="/dashboard"><span className="hover:text-gray-300">Dashboard</span></Link></li>
        <li><Link href="/editor"><span className="hover:text-gray-300">Editor</span></Link></li>
        <li><Link href="/login"><span className="hover:text-gray-300">Login</span></Link></li>
      </ul>

      {/* Mobile menu placeholder */}
      <div className="md:hidden">
        {/*add hamburger menu here */}
      </div>
    </nav>
  );
}
