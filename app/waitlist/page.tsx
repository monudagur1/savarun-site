import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/marketing/PageHero';
import { AppPlatforms } from '@/components/marketing/AppPlatforms';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { Reveal } from '@/components/motion/Reveal';
import { APP } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Early Access',
  `Get early access to the SAVARUN™ Fashion AI app — launching ${APP.launch} on iOS & Android.`,
);

export default function WaitlistPage() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden px-[5vw] py-32">
      <div className="pointer-events-none absolute -left-[10%] top-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px]" />
      <div className="relative mx-auto w-full max-w-xl">
        <PageHero
          label="Early Access"
          title="Get the app first"
          description="Join the waitlist for beta invites, launch-day access, and exclusive perks when SAVARUN™ drops on the App Store and Play Store."
        />
        <Reveal delay={0.1}>
          <AppPlatforms className="mb-8" />
        </Reveal>
        <Reveal delay={0.15}>
          <WaitlistForm source="waitlist-page" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-[0.72rem] uppercase tracking-[0.2em] text-dim">
            Launching {APP.launch} · {APP.platforms.join(' & ')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
