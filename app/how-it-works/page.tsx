import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CTASection } from '@/components/sections/CTASection';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'How It Works',
  'Three steps to a smarter wardrobe with SAVARUN — import, organize, and score.',
);

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="How it works"
        title="From camera roll to confident outfits"
        description="SAVARUN will turn the photos you already have into a living wardrobe system."
      />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}
