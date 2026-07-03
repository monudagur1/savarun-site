import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'How It Works',
  'How SAVARUN will guide you from wardrobe import to scored outfits.',
);

export default function HowItWorksPage() {
  return (
    <PageShell
      label="How It Works"
      title="Three steps to smarter style"
      description="Import → organize → score. Interactive scroll storytelling arrives in Phase 5."
      phase={1}
    />
  );
}
