'use client';

import dynamic from 'next/dynamic';
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

const HeroScene = dynamic(() => import('./HeroScene').then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <StaticHeroBackground />,
});

export function StaticHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-[min(70vw,500px)] w-[min(70vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/60 opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[min(50vw,360px)] w-[min(50vw,360px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/50 opacity-40" />
    </div>
  );
}

export function HeroBackground() {
  const desktop = useIsDesktop();
  const reduce = usePrefersReducedMotion();

  if (!desktop || reduce) {
    return <StaticHeroBackground />;
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <HeroScene />
    </div>
  );
}
