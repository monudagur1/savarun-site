import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Mail, Sparkles } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { APP } from '@/lib/constants';
import { PageHero } from '@/components/marketing/PageHero';
import { AppPlatforms } from '@/components/marketing/AppPlatforms';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = pageMetadata(
  'Support',
  'Get help with SAVARUN™ — app support, feedback, and press inquiries.',
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Support"
        title="We're here to help"
        description="Questions about the app, early access, or press? Drop us a line — we read every message."
      />

      <section className="px-[5vw] pb-32">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="glass-panel h-full p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-rule">
                <Mail className="h-5 w-5 text-muted" strokeWidth={1.5} />
              </div>
              <h2 className="mb-4 font-display text-2xl tracking-[0.05em]">Email</h2>
              <p className="body-text">
                Support, feedback, and partnerships — one inbox, fast replies.
              </p>
              <a
                href={`mailto:${APP.supportEmail}`}
                className="mt-6 inline-block text-fg underline"
              >
                {APP.supportEmail}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel h-full p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-rule">
                <Sparkles className="h-5 w-5 text-muted" strokeWidth={1.5} />
              </div>
              <h2 className="mb-4 font-display text-2xl tracking-[0.05em]">Early Access</h2>
              <p className="body-text">
                Want beta access before launch? Join the waitlist — members get first dibs on the
                app.
              </p>
              <Link href="/waitlist/" className="mt-6 inline-block text-fg underline">
                Get early access →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-panel h-full p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-rule">
                <HelpCircle className="h-5 w-5 text-muted" strokeWidth={1.5} />
              </div>
              <h2 className="mb-4 font-display text-2xl tracking-[0.05em]">FAQ</h2>
              <p className="body-text">
                Launch dates, platforms, pricing, and privacy — answered in one place.
              </p>
              <Link href="/product/#faq" className="mt-6 inline-block text-fg underline">
                View FAQ →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12">
          <div className="glass-panel p-10 text-center">
            <p className="section-label">Platforms</p>
            <AppPlatforms className="mt-6 justify-center" />
            <p className="mt-6 body-text">Launching {APP.launch} on iOS & Android</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
