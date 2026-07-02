'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { waitlistSchema, type WaitlistFormData } from '@/lib/validators';
import { cn } from '@/lib/utils';

interface WaitlistFormProps {
  source?: string;
  className?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export function WaitlistForm({ source = 'homepage', className }: WaitlistFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    email: '',
    name: '',
    role: '',
    consent: false,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const payload: WaitlistFormData = {
      email: form.email,
      name: form.name || undefined,
      role: (form.role || undefined) as WaitlistFormData['role'],
      source,
      consent: form.consent ? true : (false as never),
    };

    const parsed = waitlistSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0]?.toString() ?? 'form';
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('loading');

    try {
      const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (web3Key) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: 'SAVARUN Waitlist Signup',
            from_name: 'SAVARUN Website',
            email: parsed.data.email,
            name: parsed.data.name ?? '',
            role: parsed.data.role ?? '',
            source: parsed.data.source,
          }),
        });
        if (!res.ok) throw new Error('Submission failed');
      } else {
        const existing = JSON.parse(localStorage.getItem('savarun_waitlist') ?? '[]');
        existing.push({ ...parsed.data, at: new Date().toISOString() });
        localStorage.setItem('savarun_waitlist', JSON.stringify(existing));
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn('glass-panel p-12 text-center', className)}
          role="status"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-fg/20 bg-white/[0.03]">
            <Check className="h-6 w-6 text-fg" />
          </div>
          <p className="mb-2 font-display text-3xl tracking-[0.05em]">You&apos;re on the list.</p>
          <p className="body-text">We&apos;ll be in touch when SAVARUN™ launches.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className={cn('glass-panel space-y-6 p-8 md:p-10', className)}
          noValidate
        >
          <div>
            <label htmlFor="email" className="mb-2 block text-[0.72rem] uppercase tracking-[0.2em] text-muted">
              Email address *
            </label>
            <input
              id="email"
              type="email"
              className="input-field"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-2 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="name" className="mb-2 block text-[0.72rem] uppercase tracking-[0.2em] text-muted">
              Full name
            </label>
            <input
              id="name"
              type="text"
              className="input-field"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-2 block text-[0.72rem] uppercase tracking-[0.2em] text-muted">
              Your role
            </label>
            <select
              id="role"
              className="input-field"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="">Select your role</option>
              <option value="fashion">Fashion / Styling</option>
              <option value="founder">Founder / CEO</option>
              <option value="pm">Product Manager</option>
              <option value="engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-1 h-4 w-4 accent-fg"
              required
            />
            <span className="text-sm font-light leading-relaxed text-muted">
              I agree to receive updates about SAVARUN™. See our{' '}
              <a href="/privacy/" className="text-fg underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.consent && (
            <p role="alert" className="text-sm text-red-400">
              {errors.consent}
            </p>
          )}

          {status === 'error' && (
            <p role="alert" className="text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="cta-btn w-full justify-center md:w-auto"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              'Get Early Access'
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
