import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { SiteImageAsset } from '@/lib/site-assets';

type Aspect = 'video' | 'square' | 'wide' | 'hero' | 'card';

interface SiteImageProps {
  asset: SiteImageAsset;
  aspect?: Aspect;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const aspects: Record<Aspect, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[21/9] min-h-[240px]',
  hero: 'aspect-[4/5] min-h-[320px]',
  card: 'aspect-[4/3]',
};

export function SiteImage({
  asset,
  aspect = 'wide',
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: SiteImageProps) {
  return (
    <figure
      className={cn(
        'relative overflow-hidden border border-border bg-bg-secondary',
        aspects[aspect],
        className,
      )}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        unoptimized={asset.src.endsWith('.svg')}
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {asset.badge && (
        <figcaption className="absolute bottom-3 left-3 bg-bg/90 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-fg-muted backdrop-blur-sm">
          {asset.badge}
        </figcaption>
      )}
    </figure>
  );
}
