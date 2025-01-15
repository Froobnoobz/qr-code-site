'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Website } from '../types/website';
import { useRouter } from 'next/navigation';

export default function WebsitesList() {
  const router = useRouter();
  const [websites, setWebsites] = useState<Website[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);

  useEffect(() => {
    const savedWebsites = JSON.parse(localStorage.getItem('websites') || '[]');
    setWebsites(savedWebsites);
  }, []);

  const handleDelete = (index: number) => {
    const newWebsites = websites.filter((_, i) => i !== index);
    localStorage.setItem('websites', JSON.stringify(newWebsites));
    setWebsites(newWebsites);
    setShowDeleteModal(null);
  };

  return (
    <main className="min-h-screen px-8">
      <h1 className="text-3xl font-bold mb-8">Your Websites</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add New Website Card */}
        <Link href="/WebsiteGenerator" className="block group">
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center p-8 hover:border-blue-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-3xl text-blue-600">+</span>
            </div>
            <h2 className="text-xl font-semibold text-blue-600">Create New Website</h2>
            <p className="text-gray-500 text-center mt-2">
              Start building your next website
            </p>
          </div>
        </Link>

        {/* Website Cards */}
        {websites.map((website, index) => (
          <div key={index} className="relative group">
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Preview Image */}
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
              
              {/* Website Info */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {website.header?.title || 'Untitled Website'}
                </h2>
                <p className="text-gray-600">
                  Theme: {website.theme.charAt(0).toUpperCase() + website.theme.slice(1)}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-2 right-2">
                <div className="flex gap-2 bg-white p-2 rounded-lg shadow">
                  <Link
                    href={`/websites/${index}`}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => router.push(`/WebsiteGenerator?edit=${index}`)}
                    className="text-green-600 hover:text-green-800 p-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(index)}
                    className="text-red-600 hover:text-red-800 p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this website? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(showDeleteModal)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {websites.length === 0 && (
        <p className="text-gray-600 text-center mt-8">
          No websites created yet. Click the card above to create your first website!
        </p>
      )}
    </main>
  );
} 