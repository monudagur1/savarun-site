'use client';

import { useCallback, useEffect, useState } from 'react';
import { Loader2, RefreshCw, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  fetchFashionTrends,
  readTrendsCache,
  writeTrendsCache,
  type FashionTrend,
  type TrendsRegion,
} from '@/lib/gemini';
import { cn } from '@/lib/utils';

const tabs: { id: TrendsRegion; label: string }[] = [
  { id: 'india', label: 'India' },
  { id: 'global', label: 'Global' },
];

function TrendCard({ trend, index }: { trend: FashionTrend; index: number }) {
  return (
    <article className="tech-card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-fg-muted">{String(index + 1).padStart(2, '0')}</span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent">{trend.category}</span>
      </div>
      <h3 className="mt-4 text-xl font-medium">{trend.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-secondary">{trend.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {trend.colors.map((color) => (
          <span
            key={color}
            className="border border-border bg-bg-secondary px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-fg-muted"
          >
            {color}
          </span>
        ))}
      </div>
      <p className="mt-4 border-t border-border pt-4 text-xs text-fg-muted">{trend.context}</p>
    </article>
  );
}

export function FashionTrendsDemo() {
  const [region, setRegion] = useState<TrendsRegion>('india');
  const [trends, setTrends] = useState<FashionTrend[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle');
  const [error, setError] = useState('');

  const loadTrends = useCallback(async (target: TrendsRegion, force = false) => {
    if (!force) {
      const cached = readTrendsCache(target);
      if (cached) {
        setTrends(cached.trends);
        setStatus('ready');
        setError('');
        return;
      }
    }

    setStatus('loading');
    setError('');

    try {
      const data = await fetchFashionTrends(target);
      writeTrendsCache(target, data);
      setTrends(data.trends);
      setStatus('ready');
    } catch (err) {
      setTrends([]);
      setStatus('error');
      if (err instanceof Error && err.message === 'GEMINI_KEY_MISSING') {
        setError(
          'Gemini API key is not configured. Add NEXT_PUBLIC_GEMINI_API_KEY from Google AI Studio to enable this demo.',
        );
      } else {
        setError('Could not load trends right now. Check your API key and try again.');
      }
    }
  }, []);

  useEffect(() => {
    void loadTrends(region);
  }, [region, loadTrends]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setRegion(tab.id)}
              className={cn(
                'border px-5 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.2em] transition-colors',
                region === tab.id
                  ? 'border-fg bg-fg text-bg'
                  : 'border-border text-fg-secondary hover:border-fg hover:text-fg',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => void loadTrends(region, true)}
          disabled={status === 'loading'}
          className="px-5 py-3"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4" />
              Refresh
            </>
          )}
        </Button>
      </div>

      {status === 'loading' && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="tech-card h-56 animate-pulse bg-bg-secondary" />
          ))}
        </div>
      )}

      {status === 'error' && (
        <div className="border border-border bg-bg-secondary p-8 text-center">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-fg-muted" />
          <p className="text-sm text-fg-secondary">{error}</p>
        </div>
      )}

      {status === 'ready' && trends.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trends.map((trend, i) => (
            <Reveal key={`${region}-${trend.title}`} delay={i * 0.05}>
              <TrendCard trend={trend} index={i} />
            </Reveal>
          ))}
        </div>
      )}

      <Reveal>
        <div className="border border-dashed border-border bg-bg-secondary p-6 text-sm text-fg-secondary">
          <SectionLabel>Demo disclosure</SectionLabel>
          <p className="mt-3">
            Trends on this page are generated by <strong className="font-medium text-fg">Google Gemini Flash</strong>{' '}
            for demonstration only. They are illustrative AI summaries — not verified live fashion feeds, runway data,
            or retail analytics. Refresh to generate a new set.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
