import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Technology',
  'How SAVARUN will approach visual AI, wardrobe intelligence, and on-device privacy.',
);

export default function TechnologyPage() {
  return (
    <PageShell
      label="Technology"
      title="Built for intelligence"
      description="Architecture for AI pipeline, visual analysis, and scoring will be documented here — planned capabilities only."
      phase={1}
    />
  );
}
