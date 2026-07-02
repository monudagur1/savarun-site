import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Terms of Service',
  'SAVARUN™ Terms of Service — terms governing use of our website and waitlist.',
);

export default function TermsPage() {
  return (
    <article className="legal-prose mx-auto max-w-3xl px-[5vw] py-32">
      <p className="section-label">Legal</p>
      <h1 className="page-hero-title mt-6">Terms of Service</h1>
      <p className="text-sm text-muted">Last updated: July 2, 2026</p>

      <h2>1. Acceptance</h2>
      <p>
        By accessing www.savarun.com or joining the SAVARUN™ waitlist, you agree to these Terms of
        Service.
      </p>

      <h2>2. Waitlist</h2>
      <p>
        Joining the waitlist does not guarantee early access or specific launch dates. We reserve
        the right to modify launch timelines and waitlist benefits.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        SAVARUN™, all content, branding, and materials on this website are owned by {COMPANY.entity}.
        Unauthorized use is prohibited.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        This website is provided &quot;as is&quot; during pre-launch. We make no warranties regarding
        availability or accuracy of pre-launch content.
      </p>

      <h2>5. Governing Law</h2>
      <p>These terms are governed by the laws of India. Jurisdiction: Rajasthan, India.</p>

      <h2>6. Contact</h2>
      <p>
        {COMPANY.email} · {COMPANY.phone}
      </p>
    </article>
  );
}
