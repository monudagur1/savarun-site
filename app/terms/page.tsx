import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { COMPANY, FOOTER_LINE } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Terms of Service',
  'SAVARUN Terms of Service.',
);

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Service" />
      <section className="px-[5vw] py-16">
        <div className="prose-page mx-auto max-w-3xl">
          <p className="text-sm text-fg-muted">{FOOTER_LINE}</p>
          <p className="text-sm text-fg-muted">Registered address: {COMPANY.registeredAddress}</p>

          <h2 className="pt-8 text-xl text-fg">Agreement</h2>
          <p>
            By accessing www.savarun.com, you agree to these Terms of Service with {COMPANY.legalName}.
            SAVARUN is a pre-launch product. Features described on this site are planned and may change.
          </p>

          <h2 className="pt-8 text-xl text-fg">Website use</h2>
          <p>
            You may browse this site and join the waitlist for personal, non-commercial purposes. You agree not
            to misuse the site, attempt unauthorized access, or interfere with its operation.
          </p>

          <h2 className="pt-8 text-xl text-fg">Simulated demo</h2>
          <p>
            The Interactive Demo is a simulated preview only. It does not provide real styling advice and is
            not connected to any live AI system.
          </p>

          <h2 className="pt-8 text-xl text-fg">Disclaimer</h2>
          <p>
            This site and its content are provided &quot;as is&quot; during the pre-launch period. We make no
            warranties about availability, accuracy, or fitness for a particular purpose.
          </p>

          <h2 className="pt-8 text-xl text-fg">Contact</h2>
          <p>Questions about these terms: {COMPANY.contactEmail}.</p>
        </div>
      </section>
    </>
  );
}
