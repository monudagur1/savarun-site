import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { PageHero } from '@/components/layout/PageHero';
import { PlaceholderAsset } from '@/components/ui/PlaceholderAsset';
import { CTASection } from '@/components/sections/CTASection';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Vision',
  'The vision behind SAVARUN — fashion intelligence designed for the way you actually get dressed.',
);

export default function VisionPage() {
  return (
    <>
      <PageHero
        label="Vision"
        title="Style is knowledge"
        description="SAVARUN will treat getting dressed as a skill you can sharpen — not a performance you have to guess."
      />
      <section className="px-[5vw] py-16">
        <div className="prose-page mx-auto">
          <Reveal>
            <p>
              Most wardrobes are full of potential that never gets used. Pieces that almost work together.
              Outfits that feel fine but not intentional. SAVARUN is being built to change that — by making
              your closet legible, scorable, and easier to act on every morning.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              We believe fashion intelligence should feel calm, not chaotic. No infinite scroll of trends.
              No pressure to buy more. Just clarity about what you already own and how to wear it better.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-16">
          <PlaceholderAsset label="Founder or product narrative photography — needs real asset before launch" aspect="hero" />
        </Reveal>
      </section>
      <CTASection />
    </>
  );
}
