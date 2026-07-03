import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Vision',
  'The vision behind SAVARUN — fashion intelligence designed for the way you actually get dressed.',
);

export default function VisionPage() {
  return (
    <PageShell
      label="Vision"
      title="Style is knowledge"
      description="Content will be written in planned tense. Real photography and founder narrative need real assets before launch."
      phase={1}
    />
  );
}
