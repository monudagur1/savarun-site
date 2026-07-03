import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageShellProps {
  label: string;
  title: string;
  description: string;
  phase?: number;
  banner?: string;
  children?: ReactNode;
  className?: string;
}

export function PageShell({
  label,
  title,
  description,
  phase,
  banner,
  children,
  className,
}: PageShellProps) {
  return (
    <section
      className={cn(
        'flex min-h-screen flex-col justify-center px-[5vw] py-24',
        className,
      )}
    >
      {banner && (
        <p className="mb-6 w-fit border border-border bg-glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-fg-secondary">
          {banner}
        </p>
      )}
      <p className="phase-label">{label}</p>
      <h1 className="mt-4 font-sans text-[clamp(2.5rem,8vw,6rem)] font-light leading-[0.95] tracking-tight">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-fg-secondary">
        {description}
      </p>
      {phase !== undefined && (
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">
          Architecture phase {phase} — UI pending
        </p>
      )}
      {children}
    </section>
  );
}
