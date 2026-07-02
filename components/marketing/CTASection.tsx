import Link from 'next/link';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export function CTASection({
  headline = 'Ready to dress with intention?',
  subheadline = 'Join the waitlist for early access and exclusive launch updates.',
}: CTASectionProps) {
  return (
    <section className="border-b border-rule px-[5vw] py-24 text-center">
      <h2 className="mb-6 font-display text-[clamp(2rem,5vw,4rem)] tracking-[0.04em]">{headline}</h2>
      <p className="mx-auto mb-10 max-w-lg body-text">{subheadline}</p>
      <Link href="/waitlist/" className="cta-btn">
        Join the Waitlist
      </Link>
    </section>
  );
}
