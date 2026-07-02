import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { APP } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Terms of Service',
  'SAVARUN™ Terms of Service — terms for the website and waitlist.',
);

export default function TermsPage() {
  return (
    <article className="legal-prose mx-auto max-w-3xl px-[5vw] py-32">
      <p className="section-label">Legal</p>
      <h1 className="page-hero-title mt-6">Terms of Service</h1>
      <p className="text-sm text-muted">Last updated: July 2, 2026</p>

      <h2>1. Acceptance</h2>
      <p>
        By using savarun.com or joining the SAVARUN™ waitlist, you agree to these Terms of Service.
      </p>

      <h2>2. Waitlist & Early Access</h2>
      <p>
        Joining the waitlist does not guarantee beta access or a specific launch date. We may
        change timelines, features, or early-access benefits at any time before launch.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        SAVARUN™, all app designs, branding, and content on this site are owned by us. Unauthorized
        use is prohibited.
      </p>

      <h2>4. Pre-Launch Disclaimer</h2>
      <p>
        This site describes a product in development. Features, pricing, and availability may change
        before the app launches on iOS and Android.
      </p>

      <h2>5. Contact</h2>
      <p>
        <a href={`mailto:${APP.supportEmail}`} className="text-fg underline">
          {APP.supportEmail}
        </a>
      </p>
    </article>
  );
}
