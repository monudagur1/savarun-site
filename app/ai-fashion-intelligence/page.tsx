import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { PageHero } from '@/components/layout/PageHero';
import { SiteImage } from '@/components/ui/SiteImage';
import { getSiteImage } from '@/lib/site-assets';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'AI Fashion Intelligence',
  'How SAVARUN will use AI to score outfits and surface wardrobe insights.',
);

const topics = [
  {
    title: 'Fit scoring',
    body: 'SAVARUN will evaluate proportion, silhouette balance, and colour harmony — returning notes you can act on, not a single “right” answer.',
    image: 'aiFitScoring' as const,
  },
  {
    title: 'Wardrobe memory',
    body: 'The app will remember what you own, how you combine pieces, and what you reach for — so recommendations stay grounded in your real closet.',
    image: 'aiWardrobeMemory' as const,
  },
  {
    title: 'Occasion awareness',
    body: 'Planned context signals will help SAVARUN suggest outfits appropriate to where you are going — without prescribing a uniform.',
    image: 'aiOccasion' as const,
  },
];

export default function AIFashionIntelligencePage() {
  return (
    <>
      <PageHero
        label="AI Fashion Intelligence"
        title="Intelligence, not imitation"
        description="SAVARUN will use AI to amplify your taste — not replace it with generic trends."
      />
      <section className="px-[5vw] py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1}>
              <article className="grid gap-8 border-t border-border pt-8 lg:grid-cols-2 lg:items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-2xl font-light">{t.title}</h2>
                  <p className="mt-4 text-fg-secondary">{t.body}</p>
                </div>
                <SiteImage
                  asset={getSiteImage(t.image)}
                  aspect="video"
                  className={i % 2 === 1 ? 'lg:order-1' : ''}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
