'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader2, RefreshCw, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  fetchFashionTrends,
  fetchStaticTrends,
  GeminiApiError,
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
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="tech-card flex h-full flex-col overflow-hidden">
      {trend.imageUrl && (
        <div className="relative aspect-[4/3] w-full border-b border-border bg-bg-secondary">
          {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-bg-secondary" />}
          <Image
            src={trend.imageUrl}
            alt={`Illustrative fashion look for ${trend.title}`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 33vw"
            className={cn('object-cover transition-opacity duration-500', imageLoaded ? 'opacity-100' : 'opacity-0')}
            onLoad={() => setImageLoaded(true)}
          />
          <span className="absolute bottom-3 left-3 bg-bg/90 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-fg-muted backdrop-blur-sm">
            {trend.imageSource === 'pexels' ? 'Stock photo' : 'AI illustration'}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
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
      </div>
    </article>
  );
}

function formatGeneratedAt(iso?: string) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
  } catch {
    return null;
  }
}

export function FashionTrendsDemo() {
  const [region, setRegion] = useState<TrendsRegion>('india');
  const [trends, setTrends] = useState<FashionTrend[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ready'>('idle');
  const [error, setError] = useState('');
  const [meta, setMeta] = useState<{ generatedAt?: string; source?: string }>({});

  const loadTrends = useCallback(async (target: TrendsRegion, forceLive = false) => {
    if (!forceLive) {
      const cached = readTrendsCache(target);
      if (cached) {
        setTrends(cached.trends);
        setMeta({ generatedAt: cached.generatedAt, source: cached.source });
        setStatus('ready');
        setError('');
        return;
      }
    }

    setStatus('loading');
    setError('');

    try {
      if (!forceLive) {
        const staticData = await fetchStaticTrends(target);
        if (staticData) {
          writeTrendsCache(target, staticData);
          setTrends(staticData.trends);
          setMeta({ generatedAt: staticData.generatedAt, source: staticData.source });
          setStatus('ready');
          return;
        }
      }

      const data = await fetchFashionTrends(target);
      writeTrendsCache(target, data);
      setTrends(data.trends);
      setMeta({ generatedAt: data.generatedAt, source: data.source });
      setStatus('ready');
    } catch (err) {
      setTrends([]);
      setStatus('error');
      if (err instanceof Error && err.message === 'GEMINI_KEY_MISSING') {
        setError(
          'Gemini API key is not configured. Add GEMINI_API_KEY to GitHub Actions secrets and redeploy.',
        );
      } else if (err instanceof GeminiApiError) {
        setError(`Gemini API error: ${err.message}`);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Could not load trends. Try Refresh or check your API key.');
      }
    }
  }, []);

  useEffect(() => {
    void loadTrends(region);
  }, [region, loadTrends]);

  const generatedLabel = formatGeneratedAt(meta.generatedAt);

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
              Refresh live
            </>
          )}
        </Button>
      </div>

      {status === 'ready' && generatedLabel && (
        <p className="font-mono text-xs text-fg-muted">
          {meta.source === 'live' ? 'Generated live' : 'Generated at deploy'} · {generatedLabel}
        </p>
      )}

      {status === 'loading' && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="tech-card h-[28rem] animate-pulse bg-bg-secondary" />
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
            Trend copy is generated by <strong className="font-medium text-fg">Google Gemini Flash</strong>.
            Images are illustrative — AI-generated visuals by default, or stock photos when a Pexels API key
            is configured. This is not verified runway or retail data.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
