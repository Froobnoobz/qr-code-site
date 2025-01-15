'use client';

import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [image, setImage] = useState<string | null>(null);

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
    <main className="flex min-h-screen flex-col items-center p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-black">QR Code Generator</h1>
      
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL to generate QR code"
          className="w-full p-2 border rounded-md"
        />
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-600">Add a center image (optional):</label>
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
        
        {text && (
          <div className="flex flex-col items-center space-y-4">
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
            <p className="text-sm text-gray-600">
              Scan this QR code to access: {text}
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 