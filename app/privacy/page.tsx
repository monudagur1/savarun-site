import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = pageMetadata(
  'Privacy Policy',
  'SAVARUN™ Privacy Policy — how we collect, use, and protect your information.',
);

export default function PrivacyPage() {
  return (
    <article className="legal-prose mx-auto max-w-3xl px-[5vw] py-32">
      <p className="section-label">Legal</p>
      <h1 className="page-hero-title mt-6">Privacy Policy</h1>
      <p className="text-sm text-muted">Last updated: July 2, 2026</p>

      <h2>1. Introduction</h2>
      <p>
        {COMPANY.entity} (&quot;SAVARUN™&quot;, &quot;we&quot;, &quot;us&quot;) operates www.savarun.com. This
        Privacy Policy explains how we collect, use, and protect personal information when you visit
        our website or join our waitlist.
      </p>

      <h2>2. Information We Collect</h2>
      <ul>
        <li>Email address (required for waitlist)</li>
        <li>Name and role (optional)</li>
        <li>Technical data: IP address, browser type, pages visited (via analytics, if enabled)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To manage waitlist signups and send launch updates</li>
        <li>To respond to contact inquiries</li>
        <li>To improve our website and services</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        Waitlist data is retained until you request deletion or two years after product launch,
        whichever comes first.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data by contacting{' '}
        <a href={`mailto:${COMPANY.email}`} className="text-fg underline">
          {COMPANY.email}
        </a>
        .
      </p>

      <h2>6. Contact</h2>
      <p>
        {COMPANY.proprietor}, {COMPANY.entity}
        <br />
        {COMPANY.email}
      </p>
    </article>
  );
}
