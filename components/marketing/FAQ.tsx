import { faqItems } from '@/lib/content';

export function FAQ() {
  return (
    <section className="px-[5vw] py-20">
      <div className="mb-12 border-b border-rule pb-6">
        <span className="section-label">FAQ</span>
      </div>
      <div className="mx-auto max-w-3xl divide-y divide-rule">
        {faqItems.map((item) => (
          <details key={item.question} className="group py-6">
            <summary className="cursor-pointer list-none font-display text-xl tracking-[0.04em] marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="text-muted transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-4 body-text">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
