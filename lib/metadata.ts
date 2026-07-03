import type { Metadata } from 'next';
import { COMPANY, PRODUCT, SITE_URL } from './constants';

const defaultTitle = `${PRODUCT.name} — ${PRODUCT.tagline}`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s — ${PRODUCT.name}` },
  description: PRODUCT.description,
  keywords: [
    'SAVARUN',
    'fashion AI',
    'style intelligence',
    'wardrobe',
    'outfit scoring',
  ],
  authors: [{ name: COMPANY.legalName }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: PRODUCT.name,
    title: defaultTitle,
    description: PRODUCT.description,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: `${PRODUCT.status}. ${PRODUCT.description}`,
  },
  robots: { index: true, follow: true },
  applicationName: PRODUCT.name,
};

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title: `${title} — ${PRODUCT.name}`, description },
  };
}
