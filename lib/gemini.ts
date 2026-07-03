import { z } from 'zod';
import { enrichTrendsWithImages } from './trend-images';

export const fashionTrendSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().min(1),
  colors: z.array(z.string()).min(1).max(5),
  context: z.string().min(1),
  imageQuery: z.string().min(1).optional(),
  imageUrl: z.string().url().optional(),
  imageSource: z.enum(['pexels', 'generated']).optional(),
});

export const trendsResponseSchema = z.object({
  region: z.enum(['India', 'Global']),
  trends: z.array(fashionTrendSchema).min(4).max(8),
  generatedAt: z.string().optional(),
  source: z.enum(['live', 'build']).optional(),
});

export type FashionTrend = z.infer<typeof fashionTrendSchema>;
export type TrendsResponse = z.infer<typeof trendsResponseSchema>;
export type TrendsRegion = 'india' | 'global';

/** gemini-2.0-flash was shut down Jun 2026 — try current Flash models in order */
export const GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-3.5-flash',
  'gemini-1.5-flash',
] as const;

const REGION_LABEL: Record<TrendsRegion, 'India' | 'Global'> = {
  india: 'India',
  global: 'Global',
};

export function getGeminiApiKey(): string | null {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY?.trim();
  if (!key || key === '[GEMINI_API_KEY]') return null;
  return key;
}

export function buildTrendsPrompt(region: TrendsRegion): string {
  const regionLabel = REGION_LABEL[region];
  const year = new Date().getFullYear();

  return `You are assisting a fashion intelligence product demo for SAVARUN.

Generate illustrative fashion trend summaries for ${regionLabel} as of ${year}. These are for a technology demo — not verified editorial or retail data.

Requirements:
- Return exactly 6 trends
- Mix categories: streetwear, ethnic fusion, workwear, occasion wear, accessories, sustainable style where relevant
- For India: include at least 2 trends rooted in Indian cities, climate, or cultural dress contexts
- For Global: include diverse international references without claiming specific brand partnerships
- Be specific but honest — describe general directional trends, not fabricated statistics or fake press quotes
- Use contemporary language; avoid claiming real-time runway or sales data
- For each trend include imageQuery: 4-8 words for a fashion photo search (garment, setting, mood — no brand names)

Return ONLY valid JSON in this shape:
{
  "region": "${regionLabel}",
  "trends": [
    {
      "title": "string",
      "category": "string",
      "summary": "2 sentences max",
      "colors": ["color name", "color name"],
      "context": "where or why this trend is showing up",
      "imageQuery": "short photo search phrase"
    }
  ]
}`;
}

interface GeminiApiResponse {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string }> };
  }>;
  error?: { message?: string };
}

export class GeminiApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = 'GeminiApiError';
  }
}

export async function callGeminiApi(apiKey: string, prompt: string): Promise<string> {
  let lastError = 'Gemini request failed';

  for (const model of GEMINI_MODELS) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.7,
          },
        }),
      },
    );

    const data = (await response.json()) as GeminiApiResponse;

    if (!response.ok) {
      lastError = data.error?.message ?? `HTTP ${response.status} on ${model}`;
      continue;
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      lastError = `Empty response from ${model}`;
      continue;
    }

    return text;
  }

  throw new GeminiApiError(lastError);
}

export function parseTrendsResponse(text: string, region: TrendsRegion): TrendsResponse {
  const parsed: unknown = JSON.parse(text);
  const data = trendsResponseSchema.parse(parsed);
  return {
    ...data,
    region: REGION_LABEL[region],
    generatedAt: new Date().toISOString(),
    source: 'live',
  };
}

export async function fetchFashionTrends(region: TrendsRegion): Promise<TrendsResponse> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error('GEMINI_KEY_MISSING');
  }

  const text = await callGeminiApi(apiKey, buildTrendsPrompt(region));
  const parsed = parseTrendsResponse(text, region);
  const trends = await enrichTrendsWithImages(parsed.trends, REGION_LABEL[region]);
  return { ...parsed, trends };
}

export async function fetchStaticTrends(region: TrendsRegion): Promise<TrendsResponse | null> {
  try {
    const response = await fetch(`/data/trends-${region}.json`, { cache: 'no-store' });
    if (!response.ok) return null;
    const parsed: unknown = await response.json();
    const data = trendsResponseSchema.parse({ ...(parsed as object), source: 'build' });
    const needsImages = data.trends.some((t) => !t.imageUrl);
    if (!needsImages) return data;
    const trends = await enrichTrendsWithImages(data.trends, REGION_LABEL[region]);
    return { ...data, trends };
  } catch {
    return null;
  }
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
