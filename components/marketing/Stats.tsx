'use client';

import { Reveal } from '@/components/motion/Reveal';
import { APP } from '@/lib/constants';

const stats = [
  { value: APP.launch, label: 'App launch' },
  { value: 'AI', label: 'Fit scoring' },
  { value: '2', label: 'Platforms' },
  { value: '∞', label: 'Outfit combos' },
];

export function Stats() {
  return (
    <section className="px-[5vw] py-20">
      <div className="grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="glass-panel border-0 bg-bg p-8 text-center md:p-10">
              <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.05em]">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.68rem] uppercase tracking-[0.24em] text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
