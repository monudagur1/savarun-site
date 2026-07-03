import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { PageHero } from '@/components/layout/PageHero';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { technologyPillars } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Technology',
  'How SAVARUN will use computer vision and style scoring to understand your wardrobe.',
);

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        label="Technology"
        title="Built for wardrobes, not feeds"
        description="SAVARUN will combine visual understanding with style scoring — designed to run with privacy as a first principle."
      />
      <section className="px-[5vw] py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {technologyPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <article className="tech-card h-full p-8">
                <SectionLabel>{`0${i + 1}`}</SectionLabel>
                <h2 className="mt-4 text-2xl font-medium">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{pillar.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <div className="prose-page mx-auto border-t border-border pt-12">
            <p>
              Technical details will be published closer to launch. What we can say today: SAVARUN is being
              architected for on-device processing where possible, with clear consent for any cloud-assisted
              features.
            </p>
          </div>
        </Reveal>
      </section>
      <TechStackSection />
    </>
  );
}
