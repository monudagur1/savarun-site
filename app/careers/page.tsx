import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Careers',
  'SAVARUN careers — not actively hiring. Check back soon.',
);

export default function CareersPage() {
  return (
    <PageShell
      label="Careers"
      title="Not hiring right now"
      description="No invented job listings. This page will update when SAWARUN TECH PRIVATE LIMITED is actively recruiting."
      phase={1}
    />
  );
}
