'use client';

import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { PRODUCT } from '@/lib/constants';

const items = [
  PRODUCT.status,
  'Fashion Intelligence',
  'iOS & Android',
  'Privacy by design',
  'Waitlist open',
];

export function StatusTicker() {
  const reduce = usePrefersReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border py-4" aria-hidden="true">
      <div className={reduce ? 'flex flex-wrap justify-center gap-8 px-[5vw]' : 'animate-ticker flex w-max gap-12'}>
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.35em] text-fg-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
