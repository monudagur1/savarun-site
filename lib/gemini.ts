import { z } from 'zod';

export const fashionTrendSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().min(1),
  colors: z.array(z.string()).min(1).max(5),
  context: z.string().min(1),
});

export const trendsResponseSchema = z.object({
  region: z.enum(['India', 'Global']),
  trends: z.array(fashionTrendSchema).min(4).max(8),
});

export type FashionTrend = z.infer<typeof fashionTrendSchema>;
export type TrendsResponse = z.infer<typeof trendsResponseSchema>;
export type TrendsRegion = 'india' | 'global';

export const GEMINI_MODEL = 'gemini-2.0-flash';

const REGION_LABEL: Record<TrendsRegion, 'India' | 'Global'> = {
  india: 'India',
  global: 'Global',
};

export function getGeminiApiKey(): string | null {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY?.trim();
  if (!key || key === '[GEMINI_API_KEY]') return null;
  return key;
}

export async function fetchFashionTrends(region: TrendsRegion): Promise<TrendsResponse> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error('GEMINI_KEY_MISSING');
  }

  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: GEMINI_MODEL,
    generationConfig: {
      responseMimeType: 'application/json',
      temperature: 0.7,
    },
  });

  const regionLabel = REGION_LABEL[region];
  const year = new Date().getFullYear();

  const prompt = `You are assisting a fashion intelligence product demo for SAVARUN.

Generate illustrative fashion trend summaries for ${regionLabel} as of ${year}. These are for a technology demo — not verified editorial or retail data.

Requirements:
- Return exactly 6 trends
- Mix categories: streetwear, ethnic fusion, workwear, occasion wear, accessories, sustainable style where relevant
- For India: include at least 2 trends rooted in Indian cities, climate, or cultural dress contexts
- For Global: include diverse international references without claiming specific brand partnerships
- Be specific but honest — describe general directional trends, not fabricated statistics or fake press quotes
- Use contemporary language; avoid claiming real-time runway or sales data

Return ONLY valid JSON in this shape:
{
  "region": "${regionLabel}",
  "trends": [
    {
      "title": "string",
      "category": "string",
      "summary": "2 sentences max",
      "colors": ["color name", "color name"],
      "context": "where or why this trend is showing up"
    }
  ]
}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const parsed: unknown = JSON.parse(text);
  return trendsResponseSchema.parse(parsed);
}

const CACHE_TTL_MS = 30 * 60 * 1000;

export function readTrendsCache(region: TrendsRegion): TrendsResponse | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(`savarun_trends_${region}`);
    if (!raw) return null;
    const { savedAt, data } = JSON.parse(raw) as { savedAt: number; data: TrendsResponse };
    if (Date.now() - savedAt > CACHE_TTL_MS) return null;
    return trendsResponseSchema.parse(data);
  } catch {
    return null;
  }
}

export function writeTrendsCache(region: TrendsRegion, data: TrendsResponse): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    `savarun_trends_${region}`,
    JSON.stringify({ savedAt: Date.now(), data }),
  );
}
