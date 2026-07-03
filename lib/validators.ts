import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z.string().email('Enter a valid email address').max(254),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required' }),
  }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
