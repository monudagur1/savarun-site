import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-[5vw] py-32 text-center">
      <p className="section-label">404</p>
      <h1 className="page-hero-title mt-6">Page not found</h1>
      <p className="mt-6 max-w-md body-text">
        The page you&apos;re looking for doesn&apos;t exist — but great things are coming with SAVARUN™.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="cta-btn">
          Go to Homepage
        </Link>
        <Link href="/contact/" className="cta-btn-outline">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
