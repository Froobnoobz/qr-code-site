'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Only initialize if no websites exist in localStorage
    const existingWebsites = localStorage.getItem('websites');
    if (!existingWebsites) {
      const initialWebsite = [{
        theme: "classic",
        heroSection: {
          image: "https://images.saymedia-content.com/.image/t_share/MTc0MDg4NTk3Njc3Mjg2OTc4/australias-most-famous-drink-goon-backpacker-travel-drink-alcohol.jpg",
          overlayText: "Come get yer goon"
        },
        header: {
          title: "looking for a mad sesh?",
          subtitle: "goons got ya"
        },
        mainBody: "Look at these mad lads having a hektik time",
        gallery: [
          "https://www.pommietravels.com/wp-content/uploads/2009/05/goon.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ReKQatCRfGiAdPa6luQZPGqTRon6BhhdJPQLpyfKanbGDmtUGBQO9aE_b4FXu6LED_M&usqp=CAU"
        ],
        paragraph: {
          title: "$6 at bws ya gronk"
        }
      }];

      localStorage.setItem('websites', JSON.stringify(initialWebsite));
    }
  }, []);

  return (
    <main className="min-h-screen px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Website Builder & QR Code Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Website Builder Card */}
          <Link href="/WebsiteGenerator" className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-semibold mb-3">1. Build Website</h2>
              <p className="text-white mb-4">
                Create beautiful websites with our easy-to-use website builder. Choose themes, add content, and customize your design.
              </p>
              <span className="text-blue-600 group-hover:underline">Start Building →</span>
            </div>
          </Link>

          {/* Website Viewer Card */}
          <Link href="/websites" className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-semibold mb-3">2. View Websites</h2>
              <p className="text-white mb-4">
                Browse and manage all your created websites. Preview, edit, or share your websites easily.
              </p>
              <span className="text-blue-600 group-hover:underline">View Websites →</span>
            </div>
          </Link>

          {/* QR Code Generator Card */}
          <Link href="/QRCodeGenerator" className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-semibold mb-3">3. Generate QR</h2>
              <p className="text-white mb-4">
                Create QR codes for your websites. Share your creations instantly with anyone.
              </p>
              <span className="text-blue-600 group-hover:underline">Create QR Code →</span>
            </div>
          </Link>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Why Use Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">🎨 Easy Website Creation</h3>
              <p className="text-gray-600">No coding required. Build professional websites with our intuitive builder.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">📱 Mobile Responsive</h3>
              <p className="text-gray-600">All websites are fully responsive and look great on any device.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">🔄 Instant Updates</h3>
              <p className="text-gray-600">Make changes anytime and see them reflect immediately.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">📲 QR Code Integration</h3>
              <p className="text-gray-600">Share your websites easily with built-in QR code generation.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
