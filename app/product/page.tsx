import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { features } from '@/lib/content';
import { PageHero } from '@/components/marketing/PageHero';
import { AppPlatforms } from '@/components/marketing/AppPlatforms';
import { FAQ } from '@/components/marketing/FAQ';
import { CTASection } from '@/components/marketing/CTASection';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = pageMetadata(
  'Features',
  'Outfit Grid, Gallery Sync, and AI Fit Scoring — the core of the SAVARUN™ Fashion AI app.',
);

const useCases = [
  {
    title: 'Daily Dressers',
    body: 'Wake up to scored outfit picks built from your actual wardrobe and today’s plans.',
  },
  {
    title: 'Style Explorers',
    body: 'Surface hidden pairings and experiment with looks you never thought to try.',
  },
  {
    title: 'Closet Optimizers',
    body: 'See what you actually wear, what works together, and where your wardrobe gaps are.',
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        label="App Features"
        title="Everything the app does — brilliantly"
        description="SAVARUN™ is a Fashion AI app that scores your outfits, syncs your wardrobe, and helps you dress with intention — all from your phone."
      >
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link href="/waitlist/" className="cta-btn inline-flex group">
            Get Early Access
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <AppPlatforms compact />
        </div>
      </PageHero>

      <section className="border-y border-rule bg-surface/20 px-[5vw] py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="group feature-card glass-panel h-full border-0">
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
          <span className="section-label">Who it&apos;s for</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] tracking-[0.04em]">
            Built for how you actually get dressed
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
      <CTASection headline="Get the app first" subheadline="Join the waitlist for beta access on iOS & Android." />
    </>
  );
}
