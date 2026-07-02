import type { Metadata } from 'next';
import { COMPANY, SITE_URL } from './constants';

const defaultTitle = `${COMPANY.name}™ — ${COMPANY.tagline}`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s — ${COMPANY.name}™` },
  description:
    'Your wardrobe, scored, curated, and elevated by intelligence. Join the waitlist for early access to SAVARUN™ — Fashion Intelligence.',
  keywords: [
    'SAVARUN',
    'fashion intelligence',
    'wardrobe app',
    'outfit scoring',
    'style app',
    'AI fashion',
    'India',
  ],
  authors: [{ name: COMPANY.proprietor }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: `${COMPANY.name}™`,
    title: defaultTitle,
    description:
      'Your wardrobe, scored, curated, and elevated by intelligence. Launching 2026.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: 'Fashion Intelligence — Launching 2026. Join the waitlist.',
  },
  robots: { index: true, follow: true },
};

export function pageMetadata(title: string, description: string): Metadata {
  return { title, description, openGraph: { title: `${title} — ${COMPANY.name}™`, description } };
}
