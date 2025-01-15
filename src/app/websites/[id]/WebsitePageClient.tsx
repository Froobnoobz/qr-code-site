'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Website } from '../../types/website';
import WebsitePreview from '../../WebsiteGenerator/WebsitePreview';
import Link from 'next/link';

export default function WebsitePageClient() {
  const params = useParams();
  const router = useRouter();
  const [website, setWebsite] = useState<Website | null>(null);

  useEffect(() => {
    const savedWebsites = JSON.parse(localStorage.getItem('websites') || '[]');
    const websiteIndex = parseInt(params.id as string);
    
    if (isNaN(websiteIndex) || websiteIndex >= savedWebsites.length) {
      router.push('/websites');
      return;
    }
    
    setWebsite(savedWebsites[websiteIndex]);
  }, [params.id, router]);

  if (!website) {
    return <div className="min-h-screen p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link 
              href="/websites"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Websites
            </Link>
            <h1 className="text-xl font-semibold">
              {website.header?.title || 'Untitled Website'}
            </h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </nav>
      
      <WebsitePreview website={website} />
    </div>
  );
} 