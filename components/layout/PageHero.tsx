import { Reveal } from '@/components/motion/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <header className="page-hero">
      <Reveal>
        <SectionLabel>{label}</SectionLabel>
        <h1 className="display-subtitle mt-4 max-w-4xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg text-fg-secondary">{description}</p>}
      </Reveal>
    </header>
  );
}
