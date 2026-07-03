import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PlaceholderAsset } from '@/components/ui/PlaceholderAsset';
import { features } from '@/lib/content';

export function FeaturesGrid() {
  return (
    <section className="border-y border-border px-[5vw] py-24">
      <Reveal className="mb-16">
        <SectionLabel>Features</SectionLabel>
        <h2 className="display-subtitle mt-4">What SAVARUN will do</h2>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <article className="tech-card h-full p-8">
              <span className="font-mono text-xs text-fg-muted">{f.index}</span>
              <h3 className="mt-4 text-2xl font-light tracking-wide">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{f.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <Link href="/features/" className="text-sm uppercase tracking-widest text-fg-secondary underline">
          Explore all features →
        </Link>
      </Reveal>
    </section>
  );
}

export function FeaturesWithPlaceholder() {
  return (
    <>
      <FeaturesGrid />
      <section className="px-[5vw] py-16">
        <Reveal>
          <PlaceholderAsset label="Product UI screenshots — needs real asset before launch" aspect="wide" />
        </Reveal>
      </section>
    </>
  );
}
