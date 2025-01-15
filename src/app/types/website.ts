export type WebsiteTheme = 'mournful' | 'classic' | 'positive';

export interface Website {
  theme: WebsiteTheme;
  heroSection?: {
    image: string;
    overlayText: string;
  };
  header?: {
    title?: string;
    subtitle?: string;
  };
  mainBody?: string;
  gallery?: string[];
  paragraph?: {
    title?: string;
    content?: string;
  };
} 