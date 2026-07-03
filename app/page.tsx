import type { Metadata } from 'next';
import { CTASection } from '@/components/sections/CTASection';
import { AppPlatformsSection } from '@/components/sections/AppPlatformsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeaturesWithPlaceholder } from '@/components/sections/FeaturesGrid';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { HomeHero } from '@/components/sections/HomeHero';
import { StatusTicker } from '@/components/sections/StatusTicker';
import { TechStackSection } from '@/components/sections/TechStackSection';
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
      <AppPlatformsSection />
      <HowItWorksSection />
      <TechStackSection />
      <CTASection />
      <FAQSection />
      <section className="border-t border-border px-[5vw] py-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-fg-muted">{PRODUCT.tagline}</p>
      </section>
    </>
  );
}
