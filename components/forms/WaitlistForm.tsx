'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { waitlistSchema } from '@/lib/validators';
import { env } from '@/lib/env';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface WaitlistFormProps {
  source?: string;
  className?: string;
}

export function WaitlistForm({ source = 'site', className }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const parsed = waitlistSchema.safeParse({ email, consent: consent ? true : (false as never) });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Invalid input');
      return;
    }

    setStatus('loading');
    const endpoint = env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

    if (endpoint.includes('[WAITLIST_API_ENDPOINT]')) {
      try {
        localStorage.setItem(
          'savarun_waitlist',
          JSON.stringify([...JSON.parse(localStorage.getItem('savarun_waitlist') ?? '[]'), { ...parsed.data, source, at: new Date().toISOString() }]),
        );
        setStatus('success');
      } catch {
        setStatus('error');
      }
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: parsed.data.email, source }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn('glass-panel p-10 text-center', className)}
        >
          <Check className="mx-auto mb-4 h-8 w-8" />
          <p className="text-lg">You&apos;re on the list.</p>
          <p className="mt-2 text-sm text-fg-secondary">We&apos;ll notify you when SAVARUN opens early access.</p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} className={cn('space-y-4', className)} noValidate>
          <Input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            required
          />
          <label className="flex items-start gap-3 text-sm text-fg-secondary">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
            I agree to receive updates about SAVARUN. See our <a href="/privacy/" className="underline">Privacy Policy</a>.
          </label>
          {error && <p className="text-sm text-fg-secondary">{error}</p>}
          {status === 'error' && <p className="text-sm text-fg-secondary">Something went wrong. Please try again.</p>}
          <Button type="submit" disabled={status === 'loading'} className="w-full justify-center">
            {status === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" /> Joining...</> : 'Join Waitlist'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
