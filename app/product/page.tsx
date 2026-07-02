import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { features } from '@/lib/content';
import { PageHero } from '@/components/marketing/PageHero';
import { FAQ } from '@/components/marketing/FAQ';
import { CTASection } from '@/components/marketing/CTASection';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = pageMetadata(
  'Product',
  'Discover Intelligent Outfit Grid, Gallery Integration, and AI Fit Scoring — the core of SAVARUN™ Fashion Intelligence.',
);

const useCases = [
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
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        label="Product"
        title="Everything you need to dress with intelligence"
        description="SAVARUN™ transforms your wardrobe into a living editorial — scored, curated, and elevated by AI. Built for anyone who believes style is what you know, not what you own."
      >
        <Link href="/waitlist/" className="cta-btn mt-10 inline-flex group">
          Join the Waitlist
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </PageHero>

      <section className="border-y border-rule bg-surface/20 px-[5vw] py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="feature-card glass-panel h-full border-0">
                <span className="font-display text-[0.78rem] tracking-[0.24em] text-rule">{f.index}</span>
                <h2 className="mt-6 mb-4 font-display text-3xl tracking-[0.04em]">{f.title}</h2>
                <p className="body-text">{f.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[5vw] py-24">
        <Reveal className="mb-14 border-b border-rule pb-8">
          <span className="section-label">Use Cases</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] tracking-[0.04em]">
            Built for every kind of dresser
          </h2>
        </Reveal>
        <div className="grid gap-px bg-rule md:grid-cols-3">
          {useCases.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.1}>
              <div className="bg-bg p-10 md:p-12">
                <h3 className="font-display text-2xl tracking-[0.04em]">{u.title}</h3>
                <p className="mt-4 body-text">{u.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQ />
      <CTASection headline="Experience Fashion Intelligence first" />
    </>
  );
}
