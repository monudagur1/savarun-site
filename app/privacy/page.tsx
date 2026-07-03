import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';
import { COMPANY, FOOTER_LINE } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Privacy Policy',
  'SAVARUN Privacy Policy.',
);

export default function PrivacyPage() {
  return (
    <PageShell
      label="Legal"
      title="Privacy Policy"
      description={`${FOOTER_LINE} CIN: ${COMPANY.cin} · GSTIN: ${COMPANY.gstin}`}
      phase={1}
    />
  );
}
