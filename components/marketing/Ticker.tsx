import { tickerItems } from '@/lib/content';

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-rule py-4" aria-hidden="true">
      <div className="flex w-max animate-[ticker_32s_linear_infinite] hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap px-11 font-display text-[0.9rem] tracking-[0.26em] text-muted"
          >
            {item} <span className="text-rule">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
