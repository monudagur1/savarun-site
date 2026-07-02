import { Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { APP } from '@/lib/constants';

interface AppPlatformsProps {
  className?: string;
  compact?: boolean;
}

export function AppPlatforms({ className, compact }: AppPlatformsProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {APP.platforms.map((platform) => (
        <span
          key={platform}
          className={cn(
            'inline-flex items-center gap-2 border border-rule bg-white/[0.02] uppercase tracking-[0.22em] text-muted',
            compact ? 'px-3 py-2 text-[0.62rem]' : 'px-4 py-2.5 text-[0.68rem]',
          )}
        >
          <Smartphone className="h-3.5 w-3.5" strokeWidth={1.5} />
          {platform}
          <span className="text-dim">· Soon</span>
        </span>
      ))}
    </div>
  );
}
