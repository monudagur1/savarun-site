'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { faqItems } from '@/lib/content';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-[5vw] py-24">
      <Reveal className="mb-14 border-b border-rule pb-8">
        <span className="section-label">FAQ</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] tracking-[0.04em]">
          Common questions
        </h2>
      </Reveal>

      <div className="mx-auto max-w-3xl divide-y divide-rule">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.question} delay={i * 0.05}>
              <div className="py-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-display text-xl tracking-[0.04em] md:text-2xl">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-rule text-muted"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-2xl body-text">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
