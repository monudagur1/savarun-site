'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export function CTASection({
  headline = 'Ready for smarter style?',
  subheadline = 'Get early access to the Fashion AI app before launch.',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden px-[5vw] py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[600px] rounded-full bg-white/[0.02] blur-[100px]" />
      </div>
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-6 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] tracking-[0.04em]">
          {headline}
        </h2>
        <p className="mx-auto mb-12 max-w-lg body-text">{subheadline}</p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
          <Link href="/waitlist/" className="cta-btn group">
            Get Early Access
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Reveal>
    </section>
  );
}
