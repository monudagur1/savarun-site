import { GsapScrollBlock } from '@/components/motion/GsapScrollBlock';
import { SectionLabel } from '@/components/ui/SectionLabel';

const stack = [
  { layer: 'Vision', tools: 'Garment detection, silhouette parsing, scene context' },
  { layer: 'Scoring', tools: 'Proportion, palette harmony, occasion fit models' },
  { layer: 'Privacy', tools: 'On-device first, encrypted sync, explicit consent gates' },
  { layer: 'Interface', tools: 'Wardrobe grid, outfit composer, explainable feedback' },
] as const;

export function TechStackSection() {
  return (
    <section className="px-[5vw] py-24">
      <GsapScrollBlock>
        <div data-gsap-item className="mb-16">
          <SectionLabel>Stack</SectionLabel>
          <h2 className="display-subtitle mt-4">Fashion intelligence architecture</h2>
          <p className="mt-4 max-w-2xl text-fg-secondary">
            Planned technical layers for SAVARUN. Specific vendors and model names will be disclosed before launch.
          </p>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {stack.map((row) => (
            <article key={row.layer} data-gsap-item className="bg-bg p-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-accent">{row.layer}</p>
              <p className="mt-4 font-mono text-sm leading-relaxed text-fg-secondary">{row.tools}</p>
            </article>
          ))}
        </div>
      </GsapScrollBlock>
    </section>
  );
}
