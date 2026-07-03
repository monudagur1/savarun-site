import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full border border-border bg-bg px-4 py-3.5 font-mono text-sm text-fg outline-none transition-colors placeholder:text-fg-muted focus:border-fg focus:bg-bg-secondary',
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = 'Input';
