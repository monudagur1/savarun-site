import { describe, expect, it } from 'vitest';
import { waitlistSchema } from '@/lib/validators';

describe('waitlistSchema', () => {
  it('accepts valid email with consent', () => {
    const result = waitlistSchema.safeParse({ email: 'test@example.com', consent: true });
    expect(result.success).toBe(true);
  });

  it('rejects missing consent', () => {
    const result = waitlistSchema.safeParse({ email: 'test@example.com', consent: false });
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const result = waitlistSchema.safeParse({ email: 'not-an-email', consent: true });
    expect(result.success).toBe(false);
  });
});
