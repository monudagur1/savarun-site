import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { WaitlistForm } from '@/components/forms/WaitlistForm';

export const metadata: Metadata = pageMetadata(
  'Join the Waitlist',
  'Get early access to SAVARUN™ Fashion Intelligence. Be the first to know when we launch in 2026.',
);

export default function WaitlistPage() {
  return (
    <section className="flex min-h-[80vh] items-center px-[5vw] py-32">
      <div className="mx-auto w-full max-w-lg">
        <p className="section-label">Early Access</p>
        <h1 className="page-hero-title mt-6">Get early access</h1>
        <p className="mt-6 body-text">
          Be the first to know when SAVARUN™ launches. Early members receive exclusive benefits and
          launch-day access.
        </p>
        <div className="mt-10 border border-rule p-8 md:p-10">
          <WaitlistForm source="waitlist-page" />
        </div>
        <p className="mt-8 text-center text-[0.72rem] uppercase tracking-[0.2em] text-dim">
          Join others waiting for Fashion Intelligence
        </p>
      </div>
    </section>
  );
}
