import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { values } from '@/lib/content';
import { COMPANY } from '@/lib/constants';
import { PageHero } from '@/components/marketing/PageHero';
import { CTASection } from '@/components/marketing/CTASection';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = pageMetadata(
  'About',
  `Learn about SAVARUN™ — Fashion Intelligence built in ${COMPANY.region}. Launching ${COMPANY.launch}.`,
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="We're building the future of fashion intelligence"
        description="SAVARUN™ was born from a simple observation: most people own more clothes than they know how to use. We are building the platform that scores, curates, and elevates your personal style."
      />

      <section className="border-y border-rule px-[5vw] py-24">
        <Reveal className="mx-auto max-w-3xl space-y-6 body-text">
          <p>
            Wardrobes are full of potential — but without intelligence, that potential stays hidden.
            We combine your wardrobe data, visual analysis, and AI scoring to help you dress with
            intention every day.
          </p>
          <p>
            Launching in {COMPANY.launch} from {COMPANY.region}, SAVARUN™ is fashion intelligence
            for everyone who believes style is knowledge, not accumulation.
          </p>
        </Reveal>
      </section>

      <section className="px-[5vw] py-24">
        <Reveal className="mb-14 border-b border-rule pb-8">
          <span className="section-label">Values</span>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="feature-card glass-panel h-full border-0">
                <h2 className="font-display text-3xl tracking-[0.04em]">{v.title}</h2>
                <p className="mt-4 body-text">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid items-end gap-12 border-y border-rule px-[5vw] py-24 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-[0.02em]">
            Style is not
            <br />
            what you own.
            <br />
            <span className="text-muted">It is what you know.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="body-text">
          <p className="mb-4">
            <strong className="font-normal text-fg">Entity:</strong> {COMPANY.entity}
          </p>
          <p className="mb-6">
            <strong className="font-normal text-fg">Proprietor:</strong> {COMPANY.proprietor}
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 text-fg underline">
            Get in touch →
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
