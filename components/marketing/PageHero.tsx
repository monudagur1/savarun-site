import type { ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ label, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-[5vw] pb-20 pt-36 md:pt-40">
      <div className="pointer-events-none absolute -right-[20%] top-0 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[100px]" />
      <Reveal>
        <p className="section-label">{label}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="page-hero-title mt-6 max-w-4xl">{title}</h1>
      </Reveal>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl body-text">{description}</p>
        </Reveal>
      )}
      {children && <Reveal delay={0.2}>{children}</Reveal>}
    </section>
  );
}
