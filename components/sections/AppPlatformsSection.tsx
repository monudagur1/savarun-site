import { Reveal } from '@/components/motion/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

const platforms = [
  {
    name: 'iOS',
    status: 'Planned',
    detail: 'Native SwiftUI shell with on-device wardrobe processing where possible.',
  },
  {
    name: 'Android',
    status: 'Planned',
    detail: 'Kotlin app with the same intelligence layer and privacy model as iOS.',
  },
  {
    name: 'Cloud',
    status: 'Architecture',
    detail: 'Sync and scoring services designed for consent-first data handling.',
  },
] as const;

export function AppPlatformsSection() {
  return (
    <section className="border-y border-border bg-bg-secondary px-[5vw] py-24">
      <Reveal className="mb-16">
        <SectionLabel>Platforms</SectionLabel>
        <h2 className="display-subtitle mt-4">Built for mobile first</h2>
        <p className="mt-4 max-w-2xl text-fg-secondary">
          SAVARUN will launch on iOS and Android. Store badges and download links will appear here when builds are ready.
        </p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {platforms.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <article className="tech-card h-full p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-mono text-lg">{p.name}</h3>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">{p.status}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{p.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
