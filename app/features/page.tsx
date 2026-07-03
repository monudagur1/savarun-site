import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Features',
  'Planned features for the SAVARUN fashion AI product.',
);

export default function FeaturesPage() {
  return (
    <PageShell
      label="Features"
      title="What SAVARUN will do"
      description="Outfit grid, gallery sync, and fit scoring — described in future tense until launch."
      phase={1}
    />
  );
}
