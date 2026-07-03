import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { pageMetadata } from '@/lib/metadata';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Contact',
  'Contact SAVARUN product team.',
);

export default function ContactPage() {
  return (
    <PageShell
      label="Contact"
      title="Get in touch"
      description={`Reach us at ${COMPANY.contactEmail} once configured. Form wiring uses [WAITLIST_API_ENDPOINT] placeholder.`}
      phase={1}
    />
  );
}
