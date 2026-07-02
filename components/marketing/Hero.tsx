'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { COMPANY } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute -right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rule to-transparent" />

      <div className="relative z-[1] px-[5vw] pb-[3vh]">
        <Reveal>
          <p className="mb-10 flex items-center gap-4 text-[0.75rem] uppercase tracking-[0.35em] text-muted">
            <span className="inline-block h-px w-10 bg-gradient-to-r from-muted to-transparent" />
            Launching {COMPANY.launch}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="select-none font-display text-[clamp(4.5rem,18vw,18rem)] leading-[0.88] tracking-[0.03em]">
            SAVARUN
            <sup className="ml-2 align-super font-body text-[0.1em] font-light tracking-normal text-muted">
              ™
            </sup>
          </h1>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="relative z-[1] px-[5vw]">
        <div className="flex flex-wrap items-end justify-between gap-10 border-t border-rule py-12 pb-[7vh]">
          <p className="max-w-md text-[1.05rem] font-light italic leading-[1.85] tracking-[0.02em] text-muted">
            Your wardrobe, scored, curated, and elevated by intelligence.
            <br className="hidden sm:block" />
            Dress with intention — every single day.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/waitlist/" className="cta-btn group">
              Join the Waitlist
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
