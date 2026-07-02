import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { COMPANY } from '@/lib/constants';
import { PageHero } from '@/components/marketing/PageHero';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = pageMetadata(
  'Contact',
  `Reach the SAVARUN™ team. Email ${COMPANY.email} or call ${COMPANY.phone}.`,
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get in touch"
        description="We'd love to hear from you — whether you have a question, partnership inquiry, or press request."
      />

      <section className="px-[5vw] pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass-panel h-full p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-rule">
                <Mail className="h-5 w-5 text-muted" strokeWidth={1.5} />
              </div>
              <h2 className="mb-6 font-display text-2xl tracking-[0.05em]">General</h2>
              <p className="body-text">
                Email:{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-fg underline">
                  {COMPANY.email}
                </a>
              </p>
              <p className="mt-4 flex items-center gap-2 body-text">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-fg">
                  {COMPANY.phone}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel h-full p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-rule">
                <MapPin className="h-5 w-5 text-muted" strokeWidth={1.5} />
              </div>
              <h2 className="mb-6 font-display text-2xl tracking-[0.05em]">Address</h2>
              <address className="body-text not-italic leading-[1.9]">
                {COMPANY.proprietor}
                <br />
                {COMPANY.address.line1}
                <br />
                {COMPANY.address.line2}
                <br />
                {COMPANY.address.line3}
                <br />
                {COMPANY.address.country}
              </address>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
