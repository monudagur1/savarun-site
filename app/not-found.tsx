import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero label="404" title="Page not found" description="The page you're looking for doesn't exist." />
      <section className="px-[5vw] py-16 text-center">
        <Link href="/" className="btn-primary inline-flex">
          Return home
        </Link>
      </section>
    </>
  );
}
