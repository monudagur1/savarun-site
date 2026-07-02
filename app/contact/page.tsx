import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Contact',
  `Reach the SAVARUN™ team. Email ${COMPANY.email} or call ${COMPANY.phone}.`,
);

export default function ContactPage() {
  return (
    <section className="px-[5vw] py-32">
      <p className="section-label">Contact</p>
      <h1 className="page-hero-title mt-6">Get in touch</h1>
      <p className="mt-8 max-w-xl body-text">
        We&apos;d love to hear from you — whether you have a question, partnership inquiry, or press
        request.
      </p>

      <div className="mt-16 grid gap-12 border-t border-rule pt-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-display text-2xl tracking-[0.05em]">General</h2>
          <p className="body-text">
            Email:{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-fg underline">
              {COMPANY.email}
            </a>
          </p>
          <p className="mt-4 body-text">
            Phone:{' '}
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-fg">
              {COMPANY.phone}
            </a>
          </p>
        </div>
        <div>
          <h2 className="mb-6 font-display text-2xl tracking-[0.05em]">Address</h2>
          <address className="body-text not-italic">
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
      </div>
    </section>
  );
}
