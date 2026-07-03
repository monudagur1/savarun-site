import { cn } from '@/lib/utils';

interface PlaceholderAssetProps {
  label: string;
  aspect?: 'video' | 'square' | 'wide' | 'hero';
  className?: string;
}

const aspects = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[21/9]',
  hero: 'aspect-[4/5] min-h-[320px]',
};

export function PlaceholderAsset({ label, aspect = 'wide', className }: PlaceholderAssetProps) {
  return (
    <div
      className={cn(
        'placeholder-surface flex items-center justify-center p-8 text-center',
        aspects[aspect],
        className,
      )}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-fg-muted">
          Placeholder asset
        </p>
        <p className="mt-2 text-sm text-fg-secondary">{label}</p>
      </div>
    </div>
  );
}
