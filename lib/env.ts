import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://www.savarun.com'),
  NEXT_PUBLIC_WAITLIST_ENDPOINT: z
    .string()
    .default('[WAITLIST_API_ENDPOINT]'),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_WAITLIST_ENDPOINT: process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT,
});
