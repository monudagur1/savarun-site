'use client';

import { Reveal } from '@/components/motion/Reveal';
import { COMPANY } from '@/lib/constants';

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-rule px-[5vw] py-[12vh]">
      <div className="pointer-events-none absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30" />
      <div className="relative grid items-end gap-16 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,6rem)] leading-[0.95] tracking-[0.02em]">
            Style is not
            <br />
            what you own.
            <br />
            <span className="bg-gradient-to-r from-muted to-dim bg-clip-text text-transparent">
              It is what you know.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="md:text-right">
          <p className="text-[0.78rem] uppercase leading-[2.2] tracking-[0.22em] text-muted">
            SAVARUN™ — Fashion Intelligence App
            <br />
            Launching {COMPANY.launch} · {COMPANY.region}
          </p>
          <div className="mt-8 flex gap-8 md:justify-end">
            {['Intention', 'Intelligence', 'Simplicity'].map((word) => (
              <span key={word} className="text-[0.65rem] uppercase tracking-[0.2em] text-dim">
                {word}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
