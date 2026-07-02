import { Hero } from '@/components/marketing/Hero';
import { Ticker } from '@/components/marketing/Ticker';
import { Features } from '@/components/marketing/Features';
import { Manifesto } from '@/components/marketing/Manifesto';
import { CTASection } from '@/components/marketing/CTASection';
import { WaitlistForm } from '@/components/forms/WaitlistForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Features />
      <section className="border-b border-rule px-[5vw] py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="section-label">Early Access</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[0.04em]">
              Be first to experience Fashion Intelligence
            </h2>
            <p className="mt-6 body-text">
              Join the waitlist for launch updates, early access, and exclusive benefits when SAVARUN™
              goes live in {new Date().getFullYear() >= 2026 ? '2026' : '2026'}.
            </p>
          </div>
          <WaitlistForm source="homepage-inline" />
        </div>
      </section>
      <Manifesto />
      <CTASection />
    </>
  );
}
