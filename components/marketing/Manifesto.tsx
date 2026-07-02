'use client';

import { Reveal } from '@/components/motion/Reveal';
import { APP } from '@/lib/constants';

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-rule px-[5vw] py-[12vh]">
      <div className="pointer-events-none absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30" />
      <div className="relative grid items-end gap-16 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,6rem)] leading-[0.95] tracking-[0.02em]">
            Not another
            <br />
            closet app.
            <br />
            <span className="bg-gradient-to-r from-muted to-dim bg-clip-text text-transparent">
              A fashion brain.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="md:text-right">
          <p className="text-[0.78rem] uppercase leading-[2.2] tracking-[0.22em] text-muted">
            SAVARUN™ for {APP.platforms.join(' & ')}
            <br />
            Launching {APP.launch}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
