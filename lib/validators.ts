import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address').max(254),
  name: z.string().max(100).optional(),
  role: z
    .enum(['founder', 'pm', 'engineer', 'designer', 'marketing', 'fashion', 'other'])
    .optional(),
  source: z.string(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
