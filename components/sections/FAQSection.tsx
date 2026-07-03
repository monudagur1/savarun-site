'use client';

import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { faqItems } from '@/lib/content';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border px-[5vw] py-24">
      <Reveal className="mb-12">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="display-subtitle mt-4">Common questions</h2>
      </Reveal>
      <div className="mx-auto max-w-3xl divide-y divide-border">
        {faqItems.map((item, i) => (
          <Reveal key={item.question} delay={i * 0.05}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-lg font-light">{item.question}</span>
              <span className="font-mono text-fg-muted">{open === i ? '−' : '+'}</span>
            </button>
            <div className={cn('overflow-hidden transition-all', open === i ? 'max-h-48 pb-6' : 'max-h-0')}>
              <p className="text-sm leading-relaxed text-fg-secondary">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
