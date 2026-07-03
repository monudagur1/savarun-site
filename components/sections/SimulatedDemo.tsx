'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getSiteImage } from '@/lib/site-assets';

const simulatedScores = [72, 81, 88, 76];
const demoOutfit = getSiteImage('demoOutfit');

export function SimulatedDemo() {
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  function runSimulation() {
    setLoading(true);
    setScore(null);
    window.setTimeout(() => {
      setScore(simulatedScores[Math.floor(Math.random() * simulatedScores.length)] ?? 80);
      setLoading(false);
    }, 1200);
  }

  return (
    <Reveal>
      <div className="glass-panel overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[280px] border-b border-border md:min-h-[360px] md:border-b-0 md:border-r">
            <Image
              src={demoOutfit.src}
              alt={demoOutfit.alt}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute bottom-3 left-3 bg-bg/90 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-fg-muted backdrop-blur-sm">
              {demoOutfit.badge}
            </span>
          </div>
          <div className="p-8 md:p-10">
            <SectionLabel>Simulated preview</SectionLabel>
            <p className="mt-4 max-w-xl text-sm text-fg-secondary">
              This demo illustrates how fit scoring could feel in the app. It is not connected to any live AI
              model or your personal data.
            </p>

            <div className="mt-8 flex min-h-[180px] flex-col items-center justify-center border border-dashed border-border p-6">
              {loading && (
                <p className="font-mono text-sm uppercase tracking-widest text-fg-muted">Analyzing outfit...</p>
              )}
              {!loading && score === null && (
                <p className="text-center text-sm text-fg-secondary">Tap analyze to see a sample score</p>
              )}
              {!loading && score !== null && (
                <div className="text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">Sample fit score</p>
                  <p className="mt-2 text-6xl font-light tabular-nums">{score}</p>
                  <p className="mt-4 max-w-sm text-sm text-fg-secondary">
                    Proportion and palette harmony look strong. Consider a lighter shoe to balance the silhouette.
                  </p>
                </div>
              )}
            </div>

            <Button type="button" onClick={runSimulation} disabled={loading} className="mt-8 w-full justify-center">
              {loading ? 'Analyzing...' : 'Analyze sample outfit'}
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
