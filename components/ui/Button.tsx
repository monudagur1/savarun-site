import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-fg text-bg hover:bg-fg-secondary border border-fg font-mono',
  outline:
    'bg-transparent text-fg border border-border hover:border-fg hover:bg-bg-secondary font-mono',
  ghost: 'bg-transparent text-fg-secondary hover:text-fg font-mono',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.28em] transition-all duration-300 disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';
