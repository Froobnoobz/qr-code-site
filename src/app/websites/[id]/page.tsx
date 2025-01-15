import WebsitePageClient from './WebsitePageClient';

// Generate a fixed set of possible IDs (0-99)
// This means your site will support up to 100 saved websites
export function generateStaticParams() {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i.toString(),
  }));
}

export default function WebsitePage() {
  return <WebsitePageClient />;
} 