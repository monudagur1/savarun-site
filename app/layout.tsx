import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { JsonLd } from '@/components/seo/JsonLd';
import { baseMetadata } from '@/lib/metadata';
import { COMPANY, PRODUCT, SITE_URL } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.legalName,
  url: COMPANY.corporateUrl,
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: PRODUCT.name,
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android',
  description: PRODUCT.description,
  url: SITE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/PreOrder',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={productSchema} />
      </head>
      <body className="min-h-screen bg-bg">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
