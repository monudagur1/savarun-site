export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.savarun.com';

export const APP = {
  name: 'SAVARUN',
  tagline: 'Fashion Intelligence',
  description:
    'The AI app that scores your outfits, organises your wardrobe, and elevates how you dress — every day.',
  supportEmail: 'monusherpurdagur@gmail.com',
  launch: '2026',
  region: 'India',
  platforms: ['iOS', 'Android'] as const,
} as const;
