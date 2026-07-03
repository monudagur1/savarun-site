import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';
import { COMPANY, FOOTER_LINE } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Terms of Service',
  'SAVARUN Terms of Service.',
);

export default function TermsPage() {
  return (
    <PageShell
      label="Legal"
      title="Terms of Service"
      description={`${FOOTER_LINE} Registered address: ${COMPANY.registeredAddress}`}
      phase={1}
    />
  );
}
