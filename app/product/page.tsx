import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { features, faqItems } from '@/lib/content';
import { FAQ } from '@/components/marketing/FAQ';
import { CTASection } from '@/components/marketing/CTASection';

export const metadata: Metadata = pageMetadata(
  'Product',
  'Discover Intelligent Outfit Grid, Gallery Integration, and AI Fit Scoring — the core of SAVARUN™ Fashion Intelligence.',
);

export default function ProductPage() {
  return (
    <>
      <section className="px-[5vw] pb-16 pt-32">
        <p className="section-label">Product</p>
        <h1 className="page-hero-title mt-6">Everything you need to dress with intelligence</h1>
        <p className="mt-8 max-w-2xl body-text">
          SAVARUN™ transforms your wardrobe into a living editorial — scored, curated, and elevated
          by AI. Built for anyone who believes style is what you know, not what you own.
        </p>
        <Link href="/waitlist/" className="cta-btn mt-10 inline-flex">
          Join the Waitlist
        </Link>
      </section>

      <section className="border-y border-rule px-[5vw] py-20">
        <div className="grid gap-16 md:grid-cols-3">
          {features.map((f) => (
            <article key={f.title}>
              <span className="font-display text-[0.78rem] tracking-[0.24em] text-rule">{f.index}</span>
              <h2 className="mt-6 mb-4 font-display text-3xl tracking-[0.04em]">{f.title}</h2>
              <p className="body-text">{f.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-[5vw] py-20">
        <div className="mb-12 border-b border-rule pb-6">
          <span className="section-label">Use Cases</span>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: 'Daily Dressers',
              body: 'Start every morning with scored outfit options tailored to your wardrobe and occasion.',
            },
            {
              title: 'Style Enthusiasts',
              body: 'Discover hidden pairings in your closet and build looks you never imagined.',
            },
            {
              title: 'Fashion Professionals',
              body: 'Catalog, score, and curate client wardrobes with intelligence-grade precision.',
            },
          ].map((u) => (
            <div key={u.title}>
              <h3 className="font-display text-2xl tracking-[0.04em]">{u.title}</h3>
              <p className="mt-4 body-text">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ />
      <CTASection headline="Experience Fashion Intelligence first" />
    </>
  );
}
