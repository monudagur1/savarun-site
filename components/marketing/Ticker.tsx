import { tickerItems } from '@/lib/content';

export function Ticker() {
  const items = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-surface/50 py-5" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-ticker">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-11 whitespace-nowrap px-5 font-display text-[0.85rem] tracking-[0.28em] text-muted/80"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-rule" />
          </span>
        ))}
      </div>
    </div>
  );
}
