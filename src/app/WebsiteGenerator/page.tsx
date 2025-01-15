'use client';

import { useState, useEffect } from 'react';
import { Website, WebsiteTheme } from '../types/website';
import WebsitePreview from './WebsitePreview';
import { useRouter, useSearchParams } from 'next/navigation';

export default function WebsiteGenerator() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editIndex = searchParams.get('edit');

  const [website, setWebsite] = useState<Website>({
    theme: 'classic',
    heroSection: {
      image: '',
      overlayText: '',
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editIndex !== null) {
      const savedWebsites = JSON.parse(localStorage.getItem('websites') || '[]');
      const websiteToEdit = savedWebsites[Number(editIndex)];
      if (websiteToEdit) {
        setWebsite(websiteToEdit);
        setIsEditing(true);
      }
    }
  }, [editIndex]);

  const handleSave = () => {
    const savedWebsites = JSON.parse(localStorage.getItem('websites') || '[]');
    
    if (isEditing && editIndex !== null) {
      // Update existing website
      savedWebsites[Number(editIndex)] = website;
    } else {
      // Add new website
      savedWebsites.push(website);
    }
    
    localStorage.setItem('websites', JSON.stringify(savedWebsites));
    router.push('/websites');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setWebsite(prev => ({
          ...prev,
          heroSection: {
            ...prev.heroSection!,
            image: e.target?.result as string
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-8">
      <div className="w-full max-w-6xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {isEditing ? 'Edit Website' : 'Create New Website'}
        </h1>
      </div>

      <div className="flex gap-8 w-full max-w-6xl">
        <div className="w-1/2 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Theme</h2>
            <select
              value={website.theme}
              onChange={(e) => setWebsite(prev => ({ ...prev, theme: e.target.value as WebsiteTheme }))}
              className="w-full p-2 border rounded-md text-black"
            >
              <option value="classic">Classic</option>
              <option value="mournful">Mournful</option>
              <option value="positive">Positive</option>
              <option value="modern">Modern</option>
              <option value="natural">Natural</option>
              <option value="pastel">Pastel</option>
              <option value="vanGogh">Van Gogh</option>
              <option value="roman">Roman</option>
              <option value="australian">Australian</option>
            </select>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Hero Section</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              value={website.heroSection?.overlayText || ''}
              onChange={(e) => setWebsite(prev => ({
                ...prev,
                heroSection: { ...prev.heroSection!, overlayText: e.target.value }
              }))}
              placeholder="Overlay Text"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Header</h2>
            <input
              type="text"
              value={website.header?.title || ''}
              onChange={(e) => setWebsite(prev => ({
                ...prev,
                header: { ...prev.header, title: e.target.value }
              }))}
              placeholder="Header Title"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              value={website.header?.subtitle || ''}
              onChange={(e) => setWebsite(prev => ({
                ...prev,
                header: { ...prev.header, subtitle: e.target.value }
              }))}
              placeholder="Header Subtitle"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Main Body</h2>
            <textarea
              value={website.mainBody || ''}
              onChange={(e) => setWebsite(prev => ({ ...prev, mainBody: e.target.value }))}
              placeholder="Main Body Content"
              className="w-full p-2 border rounded-md h-32"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Gallery</h2>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                Promise.all(
                  files.map(file => new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (e) => resolve(e.target?.result as string);
                    reader.readAsDataURL(file);
                  }))
                ).then(images => {
                  setWebsite(prev => ({ ...prev, gallery: images }));
                });
              }}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Paragraph</h2>
            <input
              type="text"
              value={website.paragraph?.title || ''}
              onChange={(e) => setWebsite(prev => ({
                ...prev,
                paragraph: { ...prev.paragraph, title: e.target.value }
              }))}
              placeholder="Paragraph Title (Optional)"
              className="w-full p-2 border rounded-md"
            />
            <textarea
              value={website.paragraph?.content || ''}
              onChange={(e) => setWebsite(prev => ({
                ...prev,
                paragraph: { ...prev.paragraph, content: e.target.value }
              }))}
              placeholder="Paragraph Content"
              className="w-full p-2 border rounded-md h-32"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Save Website
          </button>
        </div>

        <div className="w-1/2">
          <WebsitePreview website={website} />
        </div>
      </div>
    </main>
  );
} 