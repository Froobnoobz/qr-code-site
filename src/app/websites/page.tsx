'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Website } from '../types/website';

export default function WebsitesList() {
  const [websites, setWebsites] = useState<Website[]>([]);

  useEffect(() => {
    const savedWebsites = JSON.parse(localStorage.getItem('websites') || '[]');
    setWebsites(savedWebsites);
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Your Websites</h1>
      
      {websites.length === 0 ? (
        <p className="text-gray-600">
          No websites created yet. 
          <Link href="/WebsiteGenerator" className="text-blue-600 hover:underline ml-2">
            Create your first website
          </Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((website, index) => (
            <Link 
              key={index}
              href={`/websites/${index}`}
              className="block group"
            >
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {website.heroSection?.image ? (
                  <div className="h-48 relative">
                    <img 
                      src={website.heroSection.image} 
                      alt="Website preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all" />
                  </div>
                ) : (
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">No preview image</span>
                  </div>
                )}
                
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {website.header?.title || 'Untitled Website'}
                  </h2>
                  <p className="text-gray-600">
                    Theme: {website.theme.charAt(0).toUpperCase() + website.theme.slice(1)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
} 