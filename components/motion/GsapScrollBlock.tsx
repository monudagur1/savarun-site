'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface GsapScrollBlockProps {
  children: ReactNode;
  className?: string;
}

export function GsapScrollBlock({ children, className }: GsapScrollBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    let ctx: { revert: () => void } | undefined;

    void import('gsap').then(({ default: gsap }) => {
      void import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const items = ref.current?.querySelectorAll('[data-gsap-item]');
        if (!items?.length) return;

        ctx = gsap.context(() => {
          gsap.from(items, {
            opacity: 0,
            y: 48,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 78%',
              once: true,
            },
          });
        }, ref);
      });
    });

    return () => ctx?.revert();
  }, [reduce]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
