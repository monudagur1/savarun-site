import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';

export default function NotFound() {
  return (
    <PageShell
      label="404"
      title="Page not found"
      description="The page you're looking for doesn't exist."
      phase={1}
    >
      <Link href="/" className="mt-8 inline-block text-sm uppercase tracking-widest text-fg-secondary underline">
        Return home
      </Link>
    </PageShell>
  );
}
