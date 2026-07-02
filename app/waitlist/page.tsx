import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/marketing/PageHero';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = pageMetadata(
  'Join the Waitlist',
  'Get early access to SAVARUN™ Fashion Intelligence. Be the first to know when we launch in 2026.',
);

export default function WaitlistPage() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden px-[5vw] py-32">
      <div className="pointer-events-none absolute -left-[10%] top-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px]" />
      <div className="relative mx-auto w-full max-w-xl">
        <PageHero
          label="Early Access"
          title="Get early access"
          description="Be the first to know when SAVARUN™ launches. Early members receive exclusive benefits and launch-day access."
        />
        <Reveal delay={0.15}>
          <WaitlistForm source="waitlist-page" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-[0.72rem] uppercase tracking-[0.2em] text-dim">
            Join others waiting for Fashion Intelligence
          </p>
        </Reveal>
      </div>
    </section>
  );
}
