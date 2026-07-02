import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { APP } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Privacy Policy',
  'SAVARUN™ Privacy Policy — how we handle your data in the app and on this site.',
);

export default function PrivacyPage() {
  return (
    <article className="legal-prose mx-auto max-w-3xl px-[5vw] py-32">
      <p className="section-label">Legal</p>
      <h1 className="page-hero-title mt-6">Privacy Policy</h1>
      <p className="text-sm text-muted">Last updated: July 2, 2026</p>

      <h2>1. Introduction</h2>
      <p>
        SAVARUN™ (&quot;we&quot;, &quot;us&quot;) is a Fashion AI app. This Privacy Policy explains
        how we collect, use, and protect information when you visit savarun.com or join our waitlist.
      </p>

      <h2>2. Information We Collect</h2>
      <ul>
        <li>Email address (required for waitlist)</li>
        <li>Name and role (optional)</li>
        <li>Technical data: browser type, pages visited (via analytics, if enabled)</li>
      </ul>
      <p>
        When the app launches, we will collect wardrobe and photo data you choose to sync — with
        clear in-app controls. A full app privacy notice will be available before release.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To manage waitlist signups and send launch updates</li>
        <li>To respond to support inquiries</li>
        <li>To improve the app and website</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        Waitlist data is retained until you request deletion or two years after app launch,
        whichever comes first.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your data by contacting{' '}
        <a href={`mailto:${APP.supportEmail}`} className="text-fg underline">
          {APP.supportEmail}
        </a>
        .
      </p>

      <h2>6. Contact</h2>
      <p>
        <a href={`mailto:${APP.supportEmail}`} className="text-fg underline">
          {APP.supportEmail}
        </a>
      </p>
    </article>
  );
}
