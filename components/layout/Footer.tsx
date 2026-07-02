'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { AppPlatforms } from '@/components/marketing/AppPlatforms';
import { APP } from '@/lib/constants';

const footerLinks = [
  { href: '/product/', label: 'Features' },
  { href: '/about/', label: 'About' },
  { href: '/waitlist/', label: 'Early Access' },
  { href: '/contact/', label: 'Support' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-rule px-[5vw] pb-12 pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <Reveal>
          <Link href="/" className="inline-block font-display text-[2.8rem] leading-none tracking-[0.14em] text-fg no-underline">
            SAVARUN
            <sup className="ml-1 font-body text-[0.3em] font-light tracking-normal text-muted">™</sup>
          </Link>
          <p className="mt-4 max-w-xs text-[0.75rem] uppercase leading-[2] tracking-[0.2em] text-muted">
            {APP.tagline} — AI app for iOS & Android
          </p>
          <AppPlatforms className="mt-6" compact />
          <Link
            href="/waitlist/"
            className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-fg transition-opacity hover:opacity-70"
          >
            Get Early Access
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.28em] text-dim">Explore</p>
          <nav className="flex flex-col gap-3" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.85rem] font-light tracking-wide text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.28em] text-dim">Support</p>
          <div className="space-y-3 text-[0.88rem] font-light text-muted">
            <p>Questions, feedback, or press — reach the team anytime.</p>
            <a
              href={`mailto:${APP.supportEmail}`}
              className="block text-fg transition-opacity hover:opacity-70"
            >
              {APP.supportEmail}
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-dim">
          © {new Date().getFullYear()} SAVARUN™
        </p>
        <p className="text-[0.72rem] tracking-[0.12em] text-rule">
          Launching {APP.launch} · {APP.region}
        </p>
      </Reveal>
    </footer>
  );
}
