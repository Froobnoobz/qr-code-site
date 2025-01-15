'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white p-4 mb-8">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
        <Link 
          href="/"
          className={`px-4 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/')}`}
        >
          Home
        </Link>
        <Link 
          href="/WebsiteGenerator"
          className={`px-4 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/WebsiteGenerator')}`}
        >
          Create Website
        </Link>
        <Link 
          href="/websites"
          className={`px-4 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/websites')}`}
        >
          My Websites
        </Link>
        <Link 
          href="/QRCodeGenerator"
          className={`px-4 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/QRCodeGenerator')}`}
        >
          QR Generator
        </Link>
      </div>
    </nav>
  );
} 