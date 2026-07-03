import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'AI Fashion Intelligence',
  'How SAVARUN will apply AI to personal style and wardrobe decisions.',
);

export default function AiFashionIntelligencePage() {
  return (
    <PageShell
      label="AI Fashion Intelligence"
      title="Intelligence, not imitation"
      description="Deep dive on planned AI capabilities — proportion, harmony, occasion fit — written honestly in future tense."
      phase={1}
    />
  );
}
