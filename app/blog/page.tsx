import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Blog',
  'SAVARUN blog — coming soon. Subscribe for updates.',
);

export default function BlogPage() {
  return (
    <PageShell
      label="Coming soon"
      title="Blog"
      description="No fake posts. Email capture only until real editorial content exists."
      phase={1}
    />
  );
}
