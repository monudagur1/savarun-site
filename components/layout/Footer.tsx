import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="px-[5vw] pb-14 pt-20">
      <div className="grid gap-12 border-b border-rule pb-16 md:grid-cols-[auto_1fr_auto] md:gap-20">
        <div>
          <div className="mb-3 font-display text-[2.4rem] leading-none tracking-[0.14em]">
            SAVARUN
            <sup className="ml-1 font-body text-[0.3em] font-light tracking-normal text-muted">™</sup>
          </div>
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-muted">
            Fashion Intelligence — Est. {COMPANY.launch}
          </p>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-3 text-sm">
          <span className="text-[0.65rem] uppercase tracking-[0.26em] text-muted">Entity</span>
          <span className="font-light tracking-wide">{COMPANY.entity}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.26em] text-muted">Proprietor</span>
          <span className="font-light tracking-wide">{COMPANY.proprietor}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.26em] text-muted">Email</span>
          <a href={`mailto:${COMPANY.email}`} className="font-light tracking-wide text-fg hover:underline">
            {COMPANY.email}
          </a>
          <span className="text-[0.65rem] uppercase tracking-[0.26em] text-muted">Phone</span>
          <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="font-light tracking-wide text-fg">
            {COMPANY.phone}
          </a>
        </div>

        <address className="text-right text-[0.88rem] font-light not-italic leading-[1.9] text-muted">
          {COMPANY.address.line1}
          <br />
          {COMPANY.address.line2}
          <br />
          {COMPANY.address.line3}
          <br />
          {COMPANY.address.country}
        </address>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.75rem] uppercase tracking-[0.16em] text-muted">
          © {new Date().getFullYear()} SAVARUN™ — All Rights Reserved
        </p>
        <div className="flex flex-wrap gap-6 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
          <Link href="/privacy/" className="hover:text-fg">
            Privacy
          </Link>
          <Link href="/terms/" className="hover:text-fg">
            Terms
          </Link>
          <Link href="/contact/" className="hover:text-fg">
            Contact
          </Link>
        </div>
        <p className="text-[0.75rem] tracking-[0.12em] text-rule">
          Sole Proprietorship — Registered in India
        </p>
      </div>
    </footer>
  );
}
