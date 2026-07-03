import Link from 'next/link';
import { COMPANY, FOOTER_LINE, PRODUCT, ROUTES } from '@/lib/constants';
import { navItems } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-border px-[5vw] py-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-mono text-2xl tracking-[0.12em]">{PRODUCT.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-secondary">
            {FOOTER_LINE}
          </p>
          <p className="mt-4 text-xs text-fg-muted">
            CIN: {COMPANY.cin} · GSTIN: {COMPANY.gstin}
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">Explore</p>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-fg-secondary hover:text-fg">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">Legal</p>
          <div className="flex flex-col gap-2 text-sm text-fg-secondary">
            <Link href={ROUTES.privacy} className="hover:text-fg">Privacy</Link>
            <Link href={ROUTES.terms} className="hover:text-fg">Terms</Link>
            <Link href={ROUTES.careers} className="hover:text-fg">Careers</Link>
            <a href={COMPANY.corporateUrl} className="hover:text-fg" target="_blank" rel="noopener noreferrer">
              Corporate site
            </a>
            <span className="pt-2">{COMPANY.contactEmail}</span>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-[1400px] text-xs text-fg-muted">
        © {new Date().getFullYear()} {PRODUCT.name}. {COMPANY.registeredAddress}
      </p>
    </footer>
  );
}
