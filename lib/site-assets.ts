export type SiteImageKey =
  | 'homeProductPreview'
  | 'wardrobeGrid'
  | 'gallerySync'
  | 'fitScoring'
  | 'visionHero'
  | 'stepImport'
  | 'stepGrid'
  | 'stepScore'
  | 'techVision'
  | 'techScoring'
  | 'techPrivacy'
  | 'aiFitScoring'
  | 'aiWardrobeMemory'
  | 'aiOccasion'
  | 'demoOutfit'
  | 'blogEditorial'
  | 'ogImage';

export interface SiteImageAsset {
  src: string;
  alt: string;
  badge?: string;
  credit?: string;
}

export const siteImages: Record<SiteImageKey, SiteImageAsset> = {
  homeProductPreview: {
    src: 'https://images.unsplash.com/photo-1489987707024-afc035f72974?auto=format&fit=crop&w=1800&q=80',
    alt: 'Curated wardrobe flat lay with neutral tones',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  wardrobeGrid: {
    src: '/images/screens/wardrobe-grid.svg',
    alt: 'Concept wireframe of a wardrobe grid interface',
    badge: 'UI concept',
  },
  gallerySync: {
    src: '/images/screens/gallery-sync.svg',
    alt: 'Concept wireframe of gallery import flow',
    badge: 'UI concept',
  },
  fitScoring: {
    src: '/images/screens/fit-scoring.svg',
    alt: 'Concept wireframe of outfit fit scoring',
    badge: 'UI concept',
  },
  visionHero: {
    src: 'https://images.unsplash.com/photo-1469334031218-e982a37baf51?auto=format&fit=crop&w=1200&q=80',
    alt: 'Editorial fashion portrait in natural light',
    badge: 'Editorial',
    credit: 'Unsplash',
  },
  stepImport: {
    src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    alt: 'Person reviewing outfit photos on a phone',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  stepGrid: {
    src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b8?auto=format&fit=crop&w=900&q=80',
    alt: 'Organized clothing on racks and shelves',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  stepScore: {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    alt: 'Full outfit styled in front of a mirror',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  techVision: {
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
    alt: 'Fashion editorial with structured silhouette',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  techScoring: {
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
    alt: 'Street style outfit with balanced proportions',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  techPrivacy: {
    src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80',
    alt: 'Secure mobile device concept on desk',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  aiFitScoring: {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    alt: 'Outfit composition for scoring analysis',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  aiWardrobeMemory: {
    src: 'https://images.unsplash.com/photo-1583391733981-5f8142940438?auto=format&fit=crop&w=1000&q=80',
    alt: 'Traditional and contemporary Indian fashion styling',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  aiOccasion: {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Occasion-ready evening outfit styling',
    badge: 'Concept visual',
    credit: 'Unsplash',
  },
  demoOutfit: {
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    alt: 'Sample outfit used in the simulated scoring demo',
    badge: 'Sample look',
    credit: 'Unsplash',
  },
  blogEditorial: {
    src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fashion editorial mood board and textiles',
    badge: 'Editorial',
    credit: 'Unsplash',
  },
  ogImage: {
    src: '/images/og-image.svg',
    alt: 'SAVARUN — Fashion Intelligence',
  },
};

export function getSiteImage(key: SiteImageKey): SiteImageAsset {
  return siteImages[key];
}
