import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'SAVARUN — Fashion Intelligence. Coming soon. An AI product designed to help you dress with intention.',
};

export default function HomePage() {
  return (
    <PageShell
      label="Phase 1 — Architecture"
      title="SAVARUN"
      description="Flagship product website scaffold. Cinematic experience, motion, and 3D will be built in Phases 2–6."
      phase={1}
    />
  );
}
