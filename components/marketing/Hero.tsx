import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[5vw]">
      <div className="relative z-[1] pb-[3.5vh]">
        <p
          className="mb-8 flex animate-fade-up items-center gap-4 text-[0.8rem] uppercase tracking-[0.3em] text-muted"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-muted" />
          Launching {COMPANY.launch}
        </p>
        <h1
          className="animate-fade-up select-none whitespace-nowrap font-display text-[clamp(5.5rem,16vw,16rem)] leading-[0.9] tracking-[0.04em]"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          SAVARUN
          <sup className="ml-1 align-super font-body text-[0.12em] font-light tracking-normal text-muted">
            ™
          </sup>
        </h1>
      </div>

      <div
        className="relative z-[1] flex flex-wrap items-end justify-between gap-10 border-t border-rule py-10 pb-[6vh]"
        style={{ animation: 'fadeUp 0.9s ease forwards 1s', opacity: 0 }}
      >
        <p className="max-w-[420px] text-base font-light italic leading-[1.8] tracking-[0.02em] text-muted">
          Your wardrobe, scored, curated, and elevated by intelligence. Dress with intention — every
          single day.
        </p>
        <Link href="/waitlist/" className="cta-btn group">
          Join the Waitlist
          <svg
            className="h-3 w-3 transition-transform group-hover:translate-x-1"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 6h10M7 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
