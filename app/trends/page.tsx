import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { FashionTrendsDemo } from '@/components/trends/FashionTrendsDemo';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Fashion Trends',
  'AI-generated fashion trend demo for India and global style — powered by Google Gemini Flash.',
);

export default function TrendsPage() {
  return (
    <>
      <PageHero
        label="Gemini Flash demo"
        title="Fashion trends pulse"
        description="Explore illustrative trend summaries for India and the world — generated live via Google Gemini Flash for technology demonstration."
      />
      <section className="px-[5vw] py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 border border-border bg-bg-secondary p-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-fg-secondary">
            Live AI demo · Gemini 2.5 / 3.5 Flash · Not verified editorial data
          </div>
          <FashionTrendsDemo />
        </div>
      </section>
    </>
  );
}
