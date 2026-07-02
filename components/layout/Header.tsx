'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/product/', label: 'Product' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[200] w-full bg-gradient-to-b from-bg/97 to-transparent px-[5vw] py-7">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="animate-fade-in font-display text-2xl tracking-[0.22em] text-fg no-underline"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          SAVARUN<sup className="ml-0.5 font-body text-[0.38em] font-light tracking-normal text-muted">™</sup>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[0.72rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-fg',
                pathname === link.href && 'text-fg',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/waitlist/" className="cta-btn text-[0.72rem]">
            Join Waitlist
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <span className="animate-fade-in border border-rule px-[1.1em] py-[0.45em] text-[0.72rem] uppercase tracking-[0.2em] text-muted">
            Fashion Intelligence
          </span>
          <button
            type="button"
            className="border border-rule px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-fg"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        <span className="hidden animate-fade-in border border-rule px-[1.1em] py-[0.45em] text-[0.72rem] uppercase tracking-[0.2em] text-muted md:inline-block">
          Fashion Intelligence
        </span>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="mt-4 flex flex-col gap-4 border-t border-rule pt-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-fg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/waitlist/" className="cta-btn w-fit" onClick={() => setOpen(false)}>
            Join Waitlist
          </Link>
        </nav>
      )}
    </header>
  );
}
