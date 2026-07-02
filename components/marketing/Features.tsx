import Link from 'next/link';
import { features } from '@/lib/content';

function FeatureTitle({ title }: { title: string }) {
  const words = title.split(' ');
  if (words.length <= 2) return <>{title}</>;

  const midpoint = Math.ceil(words.length / 2);
  return (
    <>
      {words.slice(0, midpoint).join(' ')}
      <br />
      {words.slice(midpoint).join(' ')}
    </>
  );
}

export function Features() {
  return (
    <section className="border-b border-rule px-[5vw] pb-[13vh] pt-[11vh]">
      <div className="mb-[5.5rem] flex items-center justify-between border-b border-rule pb-6">
        <span className="section-label">Core Features</span>
        <span className="font-display text-[0.85rem] tracking-[0.2em] text-rule">003</span>
      </div>

      <div className="grid md:grid-cols-3">
        {features.map((feature, i) => (
          <article
            key={feature.title}
            className={`py-0 ${i < 2 ? 'border-b border-rule md:border-b-0 md:border-r' : ''} ${i === 1 ? 'md:px-14' : ''} ${i === 0 ? 'md:pr-14' : ''} ${i === 2 ? 'md:pl-14' : ''} pb-12 pt-12 md:pb-0 md:pt-0`}
          >
            <span className="mb-11 block font-display text-[0.78rem] tracking-[0.24em] text-rule">
              {feature.index}
            </span>
            <h3 className="mb-6 font-display text-[clamp(1.8rem,2.4vw,2.4rem)] leading-[1.05] tracking-[0.05em]">
              <FeatureTitle title={feature.title} />
            </h3>
            <p className="max-w-[300px] text-[0.95rem] font-light leading-[1.85] tracking-[0.01em] text-muted">
              {feature.description}
            </p>
            <Link
              href={feature.href}
              className="mt-10 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.26em] text-dim no-underline hover:text-fg"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
