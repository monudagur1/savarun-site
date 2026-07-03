import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { PageHero } from '@/components/layout/PageHero';
import { SiteImage } from '@/components/ui/SiteImage';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { getSiteImage } from '@/lib/site-assets';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Blog',
  'SAVARUN blog — coming soon. Join the waitlist for updates.',
);

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Coming soon"
        description="Essays on style, wardrobe intelligence, and how we are building SAVARUN will appear here. For now, join the waitlist for launch updates."
      />
      <section className="px-[5vw] py-16">
        <Reveal className="mx-auto mb-12 max-w-3xl">
          <SiteImage asset={getSiteImage('blogEditorial')} aspect="wide" />
        </Reveal>
        <div className="mx-auto max-w-md">
          <WaitlistForm source="blog" className="glass-panel p-8" />
        </div>
      </section>
    </>
  );
}
