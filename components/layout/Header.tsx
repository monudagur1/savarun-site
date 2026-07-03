'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ROUTES, PRODUCT } from '@/lib/constants';
import { navItems } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[200] transition-all duration-500',
        scrolled ? 'border-b border-border bg-bg/95 py-4 backdrop-blur-xl' : 'py-8',
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-[5vw]">
        <Link href={ROUTES.home} className="font-mono text-xl tracking-[0.18em] text-fg">
          {PRODUCT.name}
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Main">
          {navItems.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-mono text-[0.68rem] uppercase tracking-[0.2em] transition-colors',
                pathname === item.href ? 'text-fg' : 'text-fg-muted hover:text-fg',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="border border-border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-fg-muted">
            {PRODUCT.status}
          </span>
          <Link href="/contact/" className="btn-primary text-[0.68rem]">
            Join Waitlist
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
          aria-expanded={open}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-bg backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-5 px-[5vw] py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg tracking-wide text-fg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
