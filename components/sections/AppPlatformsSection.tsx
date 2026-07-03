import { Reveal } from '@/components/motion/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

const platforms = [
  {
    name: 'iOS',
    status: 'Planned',
    detail: 'Native SwiftUI shell with on-device wardrobe processing where possible.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Android',
    status: 'Planned',
    detail: 'Kotlin app with the same intelligence layer and privacy model as iOS.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 4l-2 3M16 4l2 3M6 10h12v9a2 2 0 01-2 2H8a2 2 0 01-2-2v-9z" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    name: 'Cloud',
    status: 'Architecture',
    detail: 'Sync and scoring services designed for consent-first data handling.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M7 18h11a4 4 0 000-8 5 5 0 00-9.9-1.2A3.5 3.5 0 007 18z" />
      </svg>
    ),
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
              <div className="mb-6 text-fg">{p.icon}</div>
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
