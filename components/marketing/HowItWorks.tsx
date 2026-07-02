'use client';

import { Reveal } from '@/components/motion/Reveal';

const steps = [
  {
    step: '01',
    title: 'Import your wardrobe',
    description: 'Connect your gallery. SAVARUN reads every look and extracts garments automatically.',
  },
  {
    step: '02',
    title: 'Build your grid',
    description: 'Every piece lands in a visual matrix — organised, searchable, and always current.',
  },
  {
    step: '03',
    title: 'Score every outfit',
    description: 'AI evaluates fit, proportion, and harmony — then suggests what to wear next.',
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-rule bg-surface/30 px-[5vw] py-[12vh]">
      <Reveal className="mb-16">
        <span className="section-label">How it works</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[0.04em]">
          Three steps to smarter style
        </h2>
      </Reveal>

      <div className="grid gap-px bg-rule md:grid-cols-3">
        {steps.map((item, i) => (
          <Reveal key={item.step} delay={i * 0.1}>
            <div className="group relative bg-bg p-10 transition-colors duration-500 hover:bg-surface/50 md:p-12">
              <span className="font-display text-[4rem] leading-none tracking-[0.05em] text-rule transition-colors duration-500 group-hover:text-dim">
                {item.step}
              </span>
              <h3 className="mt-8 font-display text-2xl tracking-[0.05em]">{item.title}</h3>
              <p className="mt-4 body-text">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
