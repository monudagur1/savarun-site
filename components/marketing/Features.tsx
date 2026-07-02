'use client';

import Link from 'next/link';
import { ArrowUpRight, Grid3X3, ImageIcon, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { features } from '@/lib/content';

const icons = [Grid3X3, ImageIcon, Sparkles];

export function Features() {
  return (
    <section className="relative px-[5vw] pb-[14vh] pt-[12vh]">
      <Reveal className="mb-16 flex items-end justify-between border-b border-rule pb-8">
        <div>
          <span className="section-label">App Features</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[0.04em]">
            Built into the app
          </h2>
        </div>
        <span className="hidden font-display text-[0.85rem] tracking-[0.2em] text-rule md:block">003</span>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <Reveal key={feature.title} delay={i * 0.1}>
              <article className="group feature-card glass-panel h-full">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-display text-[0.78rem] tracking-[0.24em] text-rule">
                    {feature.index}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border border-rule text-muted transition-colors duration-300 group-hover:border-fg/30 group-hover:text-fg">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-5 font-display text-[clamp(1.6rem,2.2vw,2.2rem)] leading-[1.05] tracking-[0.05em]">
                  {feature.title}
                </h3>
                <p className="text-[0.95rem] font-light leading-[1.85] tracking-[0.01em] text-muted">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="mt-10 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.26em] text-dim no-underline transition-colors hover:text-fg"
                >
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
