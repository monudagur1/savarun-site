import type { FashionTrend } from './gemini';

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function buildPollinationsImageUrl(query: string, colors: string[]): string {
  const palette = colors.slice(0, 3).join(', ');
  const prompt = `editorial fashion photography, ${query}, colors ${palette}, full outfit visible, studio lighting, magazine quality, no text, no watermark`;
  const seed = hashString(`${query}-${palette}`);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=560&nologo=true&seed=${seed}`;
}

function getPexelsApiKey(): string | null {
  const key =
    process.env.PEXELS_API_KEY?.trim() ||
    process.env.NEXT_PUBLIC_PEXELS_API_KEY?.trim();
  if (!key || key === '[PEXELS_API_KEY]') return null;
  return key;
}

async function fetchPexelsPhoto(query: string, apiKey: string): Promise<string | null> {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(`${query} fashion outfit`)}&per_page=1&orientation=portrait`,
    { headers: { Authorization: apiKey } },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as {
    photos?: Array<{ src?: { large2x?: string; large?: string } }>;
  };

  return data.photos?.[0]?.src?.large2x ?? data.photos?.[0]?.src?.large ?? null;
}

export async function resolveTrendImageUrl(
  query: string,
  colors: string[],
): Promise<{ url: string; source: 'pexels' | 'generated' }> {
  const pexelsKey = getPexelsApiKey();
  if (pexelsKey) {
    const pexelsUrl = await fetchPexelsPhoto(query, pexelsKey);
    if (pexelsUrl) return { url: pexelsUrl, source: 'pexels' };
  }

  return { url: buildPollinationsImageUrl(query, colors), source: 'generated' };
}

export async function enrichTrendsWithImages(
  trends: FashionTrend[],
  region: string,
): Promise<FashionTrend[]> {
  return Promise.all(
    trends.map(async (trend) => {
      if (trend.imageUrl) return trend;
      const query = trend.imageQuery ?? `${trend.title} ${region} fashion`;
      const { url, source } = await resolveTrendImageUrl(query, trend.colors);
      return { ...trend, imageUrl: url, imageSource: source };
    }),
  );
}
