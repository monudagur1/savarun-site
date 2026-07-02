import { COMPANY } from '@/lib/constants';

export function Manifesto() {
  return (
    <section className="grid items-end gap-16 border-b border-rule px-[5vw] py-[10vh] md:grid-cols-2">
      <h2 className="font-display text-[clamp(2.4rem,5vw,5.5rem)] leading-[0.98] tracking-[0.02em]">
        Style is not
        <br />
        what you own.
        <br />
        <span className="text-muted">It is what you know.</span>
      </h2>
      <p className="text-right text-[0.78rem] uppercase leading-[2] tracking-[0.2em] text-muted md:text-right">
        SAVARUN™ — Fashion Intelligence App
        <br />
        Launching {COMPANY.launch} · {COMPANY.region}
      </p>
    </section>
  );
}
