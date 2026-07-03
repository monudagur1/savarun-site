import type { Metadata } from 'next';
import { GsapScrollBlock } from '@/components/motion/GsapScrollBlock';
import { Reveal } from '@/components/motion/Reveal';
import { PageHero } from '@/components/layout/PageHero';
import { SiteImage } from '@/components/ui/SiteImage';
import { CTASection } from '@/components/sections/CTASection';
import { getSiteImage } from '@/lib/site-assets';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Vision',
  'The vision behind SAVARUN — fashion intelligence designed for the way you actually get dressed.',
);

const manifesto = [
  'Most wardrobes are full of potential that never gets used. Pieces that almost work together. Outfits that feel fine but not intentional.',
  'SAVARUN is being built to change that — by making your closet legible, scorable, and easier to act on every morning.',
  'Fashion intelligence should feel calm, not chaotic. No infinite scroll of trends. No pressure to buy more.',
  'Just clarity about what you already own and how to wear it better.',
] as const;

export default function VisionPage() {
  return (
    <>
      <PageHero
        label="Vision"
        title="Style is knowledge"
        description="SAVARUN will treat getting dressed as a skill you can sharpen — not a performance you have to guess."
      />
      <section className="px-[5vw] py-16">
        <Reveal className="mb-16">
          <SiteImage asset={getSiteImage('visionHero')} aspect="hero" className="mx-auto max-w-2xl" />
        </Reveal>
        <GsapScrollBlock className="prose-page mx-auto space-y-10">
          {manifesto.map((line) => (
            <p key={line} data-gsap-item className="text-lg leading-relaxed text-fg-secondary">
              {line}
            </p>
          ))}
        </GsapScrollBlock>
      </section>
      <CTASection />
    </>
  );
}
