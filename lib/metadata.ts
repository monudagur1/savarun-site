import type { Metadata } from 'next';
import { APP, SITE_URL } from './constants';

const defaultTitle = `${APP.name}™ — ${APP.tagline}`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s — ${APP.name}™` },
  description:
    'The Fashion AI app — your wardrobe, scored, curated, and elevated by intelligence. Join the waitlist for iOS & Android.',
  keywords: [
    'SAVARUN',
    'fashion AI app',
    'outfit scoring app',
    'wardrobe app',
    'style app',
    'AI fashion',
    'iOS',
    'Android',
  ],
  authors: [{ name: 'SAVARUN' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: `${APP.name}™`,
    title: defaultTitle,
    description: 'The Fashion AI app — launching 2026 on iOS & Android. Join the waitlist.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: 'Fashion Intelligence — AI app launching 2026. Join the waitlist.',
  },
  robots: { index: true, follow: true },
  applicationName: 'SAVARUN',
  appleWebApp: {
    capable: true,
    title: 'SAVARUN',
    statusBarStyle: 'black-translucent',
  },
};

export function pageMetadata(title: string, description: string): Metadata {
  return { title, description, openGraph: { title: `${title} — ${APP.name}™`, description } };
}
