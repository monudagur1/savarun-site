import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SimulatedDemo } from '@/components/sections/SimulatedDemo';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Demo',
  'Simulated preview of SAVARUN fit scoring — not connected to live AI.',
);

export default function DemoPage() {
  return (
    <>
      <PageHero
        label="Interactive demo"
        title="Simulated fit scoring"
        description="This preview illustrates how scoring could feel in the app. It is not connected to any live AI model, backend, or your personal data."
      />
      <section className="px-[5vw] py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 border border-border bg-bg-secondary p-4 text-center text-sm text-fg-secondary">
            Simulated preview only — not live AI
          </div>
          <SimulatedDemo />
        </div>
      </section>
    </>
  );
}
