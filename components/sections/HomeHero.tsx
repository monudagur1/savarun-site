'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import { HeroBackground } from '@/components/three/HeroBackground';
import { PRODUCT } from '@/lib/constants';

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <HeroBackground />
      <div className="relative z-[1] px-[5vw] pb-[8vh] pt-32">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-fg-muted">
            {PRODUCT.status} · Fashion Intelligence
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-title">SAVARUN</h1>
        </Reveal>
        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-border pt-10">
          <p className="max-w-md text-lg font-light italic leading-relaxed text-fg-secondary">
            Your wardrobe, scored and curated by AI — designed to help you dress with intention, every day.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact/" className="btn-primary group inline-flex">
              Join Waitlist
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
