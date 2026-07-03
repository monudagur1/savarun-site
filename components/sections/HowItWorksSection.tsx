import { Reveal } from '@/components/motion/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SiteImage } from '@/components/ui/SiteImage';
import { steps } from '@/lib/content';
import { getSiteImage } from '@/lib/site-assets';

export function HowItWorksSection() {
  return (
    <section className="bg-bg-secondary px-[5vw] py-24">
      <Reveal className="mb-16">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="display-subtitle mt-4">Three steps to smarter style</h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.1}>
            <article className="tech-card overflow-hidden">
              <SiteImage asset={getSiteImage(s.image)} aspect="card" className="border-0 border-b" />
              <div className="p-8">
                <span className="font-mono text-4xl text-fg-muted">{s.step}</span>
                <h3 className="mt-6 text-xl font-light">{s.title}</h3>
                <p className="mt-3 text-sm text-fg-secondary">{s.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
