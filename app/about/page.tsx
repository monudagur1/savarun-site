import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { values } from '@/lib/content';
import { APP } from '@/lib/constants';
import { PageHero } from '@/components/marketing/PageHero';
import { AppPlatforms } from '@/components/marketing/AppPlatforms';
import { CTASection } from '@/components/marketing/CTASection';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = pageMetadata(
  'About',
  `SAVARUN™ is a Fashion AI app for iOS & Android — launching ${APP.launch}.`,
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About the App"
        title="Fashion intelligence, in your pocket"
        description="Most people own more clothes than they know how to use. SAVARUN™ is the AI app that unlocks your wardrobe — scoring outfits, surfacing pairings, and helping you dress with intention."
      />

      <section className="border-y border-rule px-[5vw] py-24">
        <Reveal className="mx-auto max-w-3xl space-y-6 body-text">
          <p>
            Built for {APP.platforms.join(' and ')}, SAVARUN combines visual AI, wardrobe sync,
            and real-time fit scoring into one seamless experience. No spreadsheets. No guesswork.
            Just smarter style, every day.
          </p>
          <p>
            Launching in {APP.launch}, starting in {APP.region} — with a global rollout to follow.
          </p>
        </Reveal>
      </section>

      <section className="px-[5vw] py-24">
        <Reveal className="mb-14 border-b border-rule pb-8">
          <span className="section-label">Built on</span>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="feature-card glass-panel h-full border-0">
                <h2 className="font-display text-3xl tracking-[0.04em]">{v.title}</h2>
                <p className="mt-4 body-text">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-12 border-y border-rule px-[5vw] py-24 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-[0.02em]">
            Coming to
            <br />
            <span className="text-muted">your home screen.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <AppPlatforms />
          <Link href="/waitlist/" className="mt-8 inline-flex items-center gap-2 text-fg underline">
            Join the waitlist →
          </Link>
        </Reveal>
      </section>

      <CTASection headline="Ready for smarter style?" subheadline="Get early access to the app before launch." />
    </>
  );
}
