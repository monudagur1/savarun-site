'use client';

import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

const simulatedScores = [72, 81, 88, 76];

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
      <div className="glass-panel p-10 md:p-14">
        <SectionLabel>Simulated preview</SectionLabel>
        <p className="mt-4 max-w-xl text-fg-secondary">
          This demo will illustrate how fit scoring could feel in the app. It is not connected to any
          live AI model or your personal data.
        </p>

        <div className="mt-10 flex min-h-[200px] flex-col items-center justify-center border border-dashed border-border p-8">
          {loading && <p className="font-mono text-sm uppercase tracking-widest text-fg-muted">Analyzing outfit...</p>}
          {!loading && score === null && (
            <p className="text-center text-fg-secondary">Tap analyze to see a sample score</p>
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

        <Button type="button" onClick={runSimulation} disabled={loading} className="mt-8">
          {loading ? 'Analyzing...' : 'Analyze sample outfit'}
        </Button>
      </div>
    </Reveal>
  );
}
