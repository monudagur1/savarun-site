'use client';

import { SmoothScroll } from './SmoothScroll';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
