import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { COMPANY, FOOTER_LINE } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Privacy Policy',
  'SAVARUN Privacy Policy.',
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" />
      <section className="px-[5vw] py-16">
        <div className="prose-page mx-auto max-w-3xl">
          <p className="text-sm text-fg-muted">{FOOTER_LINE}</p>
          <p className="text-sm text-fg-muted">CIN: {COMPANY.cin} · GSTIN: {COMPANY.gstin}</p>

          <h2 className="pt-8 text-xl text-fg">Overview</h2>
          <p>
            This Privacy Policy describes how {COMPANY.legalName} (&quot;we&quot;, &quot;us&quot;) will handle
            information when you use the SAVARUN website and, when available, the SAVARUN mobile application.
            SAVARUN is currently in development. This policy will be updated before public launch.
          </p>

          <h2 className="pt-8 text-xl text-fg">Information we may collect</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Email address and consent preferences when you join the waitlist</li>
            <li>Messages you send through our contact form</li>
            <li>Basic usage data through standard analytics (to be disclosed at launch)</li>
            <li>Wardrobe photos and style data in the app (planned — with explicit consent)</li>
          </ul>

          <h2 className="pt-8 text-xl text-fg">How we will use information</h2>
          <p>
            We will use your information to send launch updates, respond to inquiries, improve SAVARUN, and
            provide the fashion intelligence features described on this site. We will not sell your personal data.
          </p>

          <h2 className="pt-8 text-xl text-fg">Contact</h2>
          <p>
            For privacy questions, contact us at {COMPANY.contactEmail}. Registered address:{' '}
            {COMPANY.registeredAddress}.
          </p>
        </div>
      </section>
    </>
  );
}
