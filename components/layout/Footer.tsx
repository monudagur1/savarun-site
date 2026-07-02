'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { COMPANY } from '@/lib/constants';

const footerLinks = [
  { href: '/product/', label: 'Product' },
  { href: '/about/', label: 'About' },
  { href: '/waitlist/', label: 'Waitlist' },
  { href: '/contact/', label: 'Contact' },
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
            Fashion Intelligence — Est. {COMPANY.launch}
          </p>
          <Link
            href="/waitlist/"
            className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-fg transition-opacity hover:opacity-70"
          >
            Join the Waitlist
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.28em] text-dim">Navigate</p>
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
          <p className="mb-6 text-[0.65rem] uppercase tracking-[0.28em] text-dim">Contact</p>
          <div className="space-y-3 text-[0.88rem] font-light text-muted">
            <p>{COMPANY.proprietor}</p>
            <a href={`mailto:${COMPANY.email}`} className="block text-fg transition-opacity hover:opacity-70">
              {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="block transition-opacity hover:opacity-70">
              {COMPANY.phone}
            </a>
            <address className="not-italic leading-[1.9]">
              {COMPANY.address.line2}
              <br />
              {COMPANY.address.line3}
              <br />
              {COMPANY.address.country}
            </address>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
        <p className="text-[0.72rem] uppercase tracking-[0.16em] text-dim">
          © {new Date().getFullYear()} SAVARUN™ — All Rights Reserved
        </p>
        <p className="text-[0.72rem] tracking-[0.12em] text-rule">
          Sole Proprietorship — Registered in India
        </p>
      </Reveal>
    </footer>
  );
}
