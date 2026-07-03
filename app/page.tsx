import type { Metadata } from 'next';
import { CTASection } from '@/components/sections/CTASection';
import { FeaturesWithPlaceholder } from '@/components/sections/FeaturesGrid';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { HomeHero } from '@/components/sections/HomeHero';
import { StatusTicker } from '@/components/sections/StatusTicker';
import { PRODUCT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'SAVARUN — Fashion Intelligence. Coming soon. An AI product designed to help you dress with intention.',
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatusTicker />
      <FeaturesWithPlaceholder />
      <HowItWorksSection />
      <CTASection />
      <section className="border-t border-border px-[5vw] py-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-fg-muted">{PRODUCT.tagline}</p>
      </section>
    </>
  );
}
