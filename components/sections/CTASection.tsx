import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { WaitlistForm } from '@/components/forms/WaitlistForm';

export function CTASection() {
  return (
    <section className="px-[5vw] py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="display-subtitle">Be first to experience Fashion Intelligence</h2>
          <p className="mt-6 text-fg-secondary">
            Join the waitlist for launch updates and early access when SAVARUN arrives on iOS and Android.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <WaitlistForm source="homepage" className="glass-panel p-8" />
        </Reveal>
      </div>
    </section>
  );
}

export function CTALink({ href, label }: { href: string; label: string }) {
  return (
    <Reveal className="py-24 text-center">
      <Link href={href} className="btn-primary inline-flex">
        {label}
      </Link>
    </Reveal>
  );
}
