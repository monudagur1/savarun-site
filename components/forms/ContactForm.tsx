'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required').max(120),
  email: z.string().email('Enter a valid email').max(254),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse({ name, email, message });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Invalid input');
      return;
    }
    setError('');
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className={cn('glass-panel p-10 text-center', className)}>
        <p className="text-lg">Message received.</p>
        <p className="mt-2 text-sm text-fg-secondary">
          We will respond when our team is available. For launch updates, join the waitlist.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)} noValidate>
      <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Name" required />
      <Input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" required />
      <textarea
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-label="Message"
        required
        rows={5}
        className="w-full border border-border bg-bg px-4 py-3 font-mono text-sm text-fg placeholder:text-fg-muted focus:border-fg focus:outline-none"
      />
      {error && <p className="text-sm text-fg-secondary">{error}</p>}
      <Button type="submit" className="w-full justify-center">
        Send message
      </Button>
    </form>
  );
}
