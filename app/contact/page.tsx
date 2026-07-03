import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { FAQSection } from '@/components/sections/FAQSection';
import { COMPANY } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Contact',
  'Contact SAVARUN and join the waitlist for early access.',
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Stay in touch"
        description="Join the waitlist for launch updates, or send us a message. We will respond when our team is available."
      />
      <section className="px-[5vw] py-16">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-light">Join the waitlist</h2>
            <p className="mt-2 text-sm text-fg-secondary">Early access information will go to waitlist members first.</p>
            <WaitlistForm source="contact" className="mt-8 glass-panel p-8" />
          </div>
          <div>
            <h2 className="text-xl font-light">Send a message</h2>
            <p className="mt-2 text-sm text-fg-secondary">For partnerships, press, or general inquiries.</p>
            <ContactForm className="mt-8 glass-panel p-8" />
            <a href={`mailto:${COMPANY.contactEmail}`} className="mt-6 inline-block text-sm text-fg-secondary hover:text-fg">
              {COMPANY.contactEmail}
            </a>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}
