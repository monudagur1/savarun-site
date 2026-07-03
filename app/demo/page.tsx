import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Interactive Demo',
  'Simulated preview of SAVARUN — not connected to live AI.',
);

export default function DemoPage() {
  return (
    <PageShell
      label="Simulated preview"
      title="Interactive Demo"
      description="This will be a clearly labeled simulated experience — not a live tool connected to any real model. Phase 6."
      phase={1}
      banner="Not connected to live AI"
    />
  );
}
