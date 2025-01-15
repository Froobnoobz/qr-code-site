'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700' : '';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/WebsiteGenerator', label: 'Create Website' },
    { path: '/websites', label: 'My Websites' },
    { path: '/QRCodeGenerator', label: 'QR Generator' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path}
              className={`px-4 py-2 rounded hover:bg-blue-700 transition-colors ${isActive(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Website Builder
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="pt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded hover:bg-blue-700 transition-colors ${isActive(link.path)}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 