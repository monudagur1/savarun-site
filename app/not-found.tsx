import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-[5vw] py-32 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <p className="section-label">404</p>
      <h1 className="page-hero-title mt-6">Page not found</h1>
      <p className="mt-6 max-w-md body-text">
        The page you&apos;re looking for doesn&apos;t exist — but great things are coming with SAVARUN™.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="cta-btn group">
          Go to Homepage
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
        <Link href="/contact/" className="cta-btn-outline">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
