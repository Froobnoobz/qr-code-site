import { Website } from '../types/website';
import { themeStyles } from './themes';

interface WebsitePreviewProps {
  website: Website;
}

export default function WebsitePreview({ website }: WebsitePreviewProps) {
  const theme = themeStyles[website.theme];

  return (
    <div className={`w-full space-y-8 ${theme.background}`}>
      {website.heroSection?.image && (
        <div className="relative h-[400px]">
          <img
            src={website.heroSection.image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          {website.heroSection.overlayText && (
            <div className={`absolute inset-0 flex items-center justify-center ${theme.heroOverlay}`}>
              <h1 className={`text-4xl font-bold ${theme.heroText}`}>
                {website.heroSection.overlayText}
              </h1>
            </div>
          )}
        </div>
      )}

      {website.header && (
        <header className={`text-center p-8 ${theme.headerBackground}`}>
          <h1 className={`text-3xl font-bold ${theme.headerText}`}>{website.header.title}</h1>
          {website.header.subtitle && (
            <p className={`mt-2 ${theme.subtitleText}`}>{website.header.subtitle}</p>
          )}
        </header>
      )}

      {website.mainBody && (
        <div className={`p-8 ${theme.mainBody}`}>
          <div className={`max-w-3xl mx-auto ${theme.mainText}`}>
            {website.mainBody}
          </div>
        </div>
      )}

      {website.gallery && website.gallery.length > 0 && (
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {website.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {website.paragraph && (
        <div className={`p-8 ${theme.paragraphBackground}`}>
          <div className="max-w-3xl mx-auto">
            {website.paragraph.title && (
              <h2 className={`text-2xl font-semibold mb-4 ${theme.paragraphTitle}`}>
                {website.paragraph.title}
              </h2>
            )}
            <p className={theme.paragraphText}>{website.paragraph.content}</p>
          </div>
        </div>
      )}
    </div>
  );
} 