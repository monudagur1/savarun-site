import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { JsonLd } from '@/components/seo/JsonLd';
import { baseMetadata } from '@/lib/metadata';
import { APP, SITE_URL } from '@/lib/constants';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SAVARUN',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android',
  description: APP.description,
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
    <html lang="en" className={`${bebas.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd data={appSchema} />
      </head>
      <body className="min-h-screen font-body font-light">
        <GrainOverlay />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
