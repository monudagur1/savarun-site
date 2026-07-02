import { Hero } from '@/components/marketing/Hero';
import { Ticker } from '@/components/marketing/Ticker';
import { Stats } from '@/components/marketing/Stats';
import { Features } from '@/components/marketing/Features';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { Manifesto } from '@/components/marketing/Manifesto';
import { CTASection } from '@/components/marketing/CTASection';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { Reveal } from '@/components/motion/Reveal';
import { APP } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <Features />
      <HowItWorks />
      <section className="relative px-[5vw] py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="section-label">Early Access</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[0.04em]">
              Be first on the app
            </h2>
            <p className="mt-6 body-text">
              Join the waitlist for launch notifications, beta access, and exclusive perks when
              SAVARUN™ hits the App Store and Play Store in {APP.launch}.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <WaitlistForm source="homepage-inline" />
          </Reveal>
        </div>
      </section>
      <Manifesto />
      <CTASection />
    </>
  );
}
