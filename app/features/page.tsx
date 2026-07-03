import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { PageHero } from '@/components/layout/PageHero';
import { PlaceholderAsset } from '@/components/ui/PlaceholderAsset';
import { features } from '@/lib/content';
import { CTASection } from '@/components/sections/CTASection';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Features',
  'Planned SAVARUN features — wardrobe grid, gallery sync, and AI fit scoring.',
);

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        label="Features"
        title="Everything SAVARUN will do"
        description="All features described here are planned for launch. Nothing on this page is live yet."
      />
      <section className="px-[5vw] py-16">
        <div className="space-y-16">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="grid gap-8 border-b border-border pb-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="font-mono text-xs text-fg-muted">{f.index}</span>
                  <h2 className="mt-4 text-3xl font-light">{f.title}</h2>
                  <p className="mt-4 text-fg-secondary">{f.description}</p>
                </div>
                <PlaceholderAsset label={`${f.title} UI — needs real asset before launch`} aspect="video" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
