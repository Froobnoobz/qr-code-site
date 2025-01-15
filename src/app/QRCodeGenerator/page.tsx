'use client';

import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Website } from '../types/website';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [websites, setWebsites] = useState<Website[]>([]);

  useEffect(() => {
    const savedWebsites = JSON.parse(localStorage.getItem('websites') || '[]');
    setWebsites(savedWebsites);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-black">QR Code Generator</h1>
      
      <div className="w-full max-w-md space-y-6">
        {/* Your Websites Section */}
        {websites.length > 0 && (
          <div className="bg-black-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-3 text-black">Your Websites</h2>
            <div className="space-y-2">
              {websites.map((website, index) => (
                <button
                  key={index}
                  onClick={() => setText(`${window.location.origin}/websites/${index}`)}
                  className="w-full text-left p-3 rounded hover:bg-black-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black">
                      {website.header?.title || 'Untitled Website'}
                    </span>
                    <span className="text-sm text-blue-600">Use →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Manual URL Input */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Enter URL or select from your websites above
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL to generate QR code"
            className="w-full p-2 border rounded-md"
          />
        </div>
        
        {/* Image Upload Section */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-black">Add a center image (optional):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded-md"
          />
          {image && (
            <button
              onClick={() => setImage(null)}
              className="text-red-600 text-sm hover:text-red-800"
            >
              Remove Image
            </button>
          )}
        </div>
        
        {/* QR Code Display */}
        {text && (
          <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg border">
            <QRCodeCanvas
              value={text}
              size={256}
              imageSettings={
                image
                  ? {
                      src: image,
                      height: 40,
                      width: 40,
                      excavate: true,
                    }
                  : undefined
              }
            />
            <p className="text-sm text-black-600 break-all">
              Scan this QR code to access: {text}
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 