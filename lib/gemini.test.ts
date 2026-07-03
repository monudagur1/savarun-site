import { describe, expect, it } from 'vitest';
import { trendsResponseSchema } from '@/lib/gemini';

describe('trendsResponseSchema', () => {
  it('validates a well-formed trends payload', () => {
    const result = trendsResponseSchema.safeParse({
      region: 'India',
      trends: [
        {
          title: 'Linen layers',
          category: 'Workwear',
          summary: 'Breathable tailoring for humid cities.',
          colors: ['sand', 'ivory'],
          context: 'Mumbai and Bengaluru commutes',
          imageQuery: 'linen workwear summer city',
        },
        {
          title: 'Indigo street sets',
          category: 'Streetwear',
          summary: 'Relaxed denim-on-denim with local sneakers.',
          colors: ['indigo', 'white'],
          context: 'College districts',
          imageQuery: 'indigo denim street style',
        },
        {
          title: 'Festive minimal',
          category: 'Occasion',
          summary: 'Cleaner silhouettes with statement jewelry.',
          colors: ['gold', 'cream'],
          context: 'Wedding season edits',
          imageQuery: 'minimal festive indian outfit',
        },
        {
          title: 'Athleisure polish',
          category: 'Casual',
          summary: 'Track pieces styled with structured outerwear.',
          colors: ['charcoal', 'sage'],
          context: 'Weekend social plans',
          imageQuery: 'athleisure blazer outfit',
        },
      ],
    });
    expect(result.success).toBe(true);
  });
});
