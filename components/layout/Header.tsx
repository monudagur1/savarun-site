'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const links = [
  { href: '/product/', label: 'Product' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-[200] w-full transition-all duration-500',
        scrolled
          ? 'border-b border-white/[0.06] bg-bg/80 py-4 backdrop-blur-2xl'
          : 'bg-gradient-to-b from-bg via-bg/80 to-transparent py-7',
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-[5vw]">
        <Link
          href="/"
          className="group shrink-0 font-display text-[1.65rem] tracking-[0.24em] text-fg no-underline transition-opacity hover:opacity-80"
        >
          SAVARUN
          <sup className="ml-0.5 font-body text-[0.35em] font-light tracking-normal text-muted">
            ™
          </sup>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-300',
                pathname === link.href ? 'text-fg' : 'text-muted hover:text-fg',
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-fg/60" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="border border-rule px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted">
            Fashion Intelligence
          </span>
          <Link href="/waitlist/" className="cta-btn text-[0.68rem]">
            Join Waitlist
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-rule lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span className={cn('h-px w-4 bg-fg transition-all', open && 'translate-y-[3.5px] rotate-45')} />
          <span className={cn('h-px w-4 bg-fg transition-all', open && 'opacity-0')} />
          <span className={cn('h-px w-4 bg-fg transition-all', open && '-translate-y-[3.5px] -rotate-45')} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-rule bg-bg/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-6 px-[5vw] py-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-2xl tracking-[0.1em] text-fg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/waitlist/" className="cta-btn w-fit" onClick={() => setOpen(false)}>
                Join Waitlist
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
