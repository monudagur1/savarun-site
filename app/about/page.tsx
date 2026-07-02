import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { values } from '@/lib/content';
import { COMPANY } from '@/lib/constants';
import { CTASection } from '@/components/marketing/CTASection';

export const metadata: Metadata = pageMetadata(
  'About',
  `Learn about SAVARUN™ — Fashion Intelligence built in ${COMPANY.region}. Launching ${COMPANY.launch}.`,
);

export default function AboutPage() {
  return (
    <>
      <section className="px-[5vw] pb-16 pt-32">
        <p className="section-label">About</p>
        <h1 className="page-hero-title mt-6">We&apos;re building the future of fashion intelligence</h1>
        <div className="mt-10 max-w-2xl space-y-6 body-text">
          <p>
            SAVARUN™ was born from a simple observation: most people own more clothes than they know
            how to use. Wardrobes are full of potential — but without intelligence, that potential
            stays hidden.
          </p>
          <p>
            We are building the platform that scores, curates, and elevates your personal style —
            turning every outfit into a deliberate choice backed by data, visual analysis, and AI.
          </p>
          <p>
            Launching in {COMPANY.launch} from {COMPANY.region}, SAVARUN™ is fashion intelligence
            for everyone who believes style is knowledge, not accumulation.
          </p>
        </div>
      </section>

      <section className="border-y border-rule px-[5vw] py-20">
        <div className="mb-12 border-b border-rule pb-6">
          <span className="section-label">Values</span>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h2 className="font-display text-3xl tracking-[0.04em]">{v.title}</h2>
              <p className="mt-4 body-text">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid items-end gap-12 border-b border-rule px-[5vw] py-20 md:grid-cols-2">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-[0.02em]">
          Style is not
          <br />
          what you own.
          <br />
          <span className="text-muted">It is what you know.</span>
        </h2>
        <div className="body-text">
          <p className="mb-4">
            <strong className="font-normal text-fg">Entity:</strong> {COMPANY.entity}
          </p>
          <p className="mb-4">
            <strong className="font-normal text-fg">Proprietor:</strong> {COMPANY.proprietor}
          </p>
          <p>
            <Link href="/contact/" className="text-fg underline">
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
