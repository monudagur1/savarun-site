import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Careers',
  'SAVARUN careers — not hiring yet. Check back at launch.',
);

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Not hiring yet"
        description="SAVARUN is in early development. We are not accepting applications at this time. Follow our journey and join the waitlist for launch news."
      />
      <section className="px-[5vw] py-16 text-center">
        <Link href="/contact/" className="btn-primary inline-flex">
          Join waitlist instead
        </Link>
      </section>
    </>
  );
}
