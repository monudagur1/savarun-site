import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full border border-border bg-surface px-4 py-3.5 text-sm font-light text-fg outline-none transition-colors placeholder:text-fg-muted focus:border-fg/40 focus:bg-bg-secondary',
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = 'Input';
