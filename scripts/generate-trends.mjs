import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MODELS = ['gemini-2.5-flash', 'gemini-3.5-flash', 'gemini-1.5-flash'];
const REGIONS = [
  { id: 'india', label: 'India' },
  { id: 'global', label: 'Global' },
];

function buildPrompt(regionLabel) {
  const year = new Date().getFullYear();
  return `You are assisting a fashion intelligence product demo for SAVARUN.

Generate illustrative fashion trend summaries for ${regionLabel} as of ${year}. These are for a technology demo — not verified editorial or retail data.

Requirements:
- Return exactly 6 trends
- Mix categories: streetwear, ethnic fusion, workwear, occasion wear, accessories, sustainable style where relevant
- For India: include at least 2 trends rooted in Indian cities, climate, or cultural dress contexts
- For Global: include diverse international references without claiming specific brand partnerships
- Be specific but honest — describe general directional trends, not fabricated statistics or fake press quotes

Return ONLY valid JSON:
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
}

async function callGemini(apiKey, prompt) {
  let lastError = 'Gemini request failed';

  for (const model of MODELS) {
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

    const data = await response.json();
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

  throw new Error(lastError);
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY?.trim() || process.env.NEXT_PUBLIC_GEMINI_API_KEY?.trim();

  if (!apiKey || apiKey === '[GEMINI_API_KEY]') {
    console.log('GEMINI_API_KEY not set — skipping build-time trends generation');
    return;
  }

  const outDir = join(process.cwd(), 'public', 'data');
  mkdirSync(outDir, { recursive: true });

  for (const { id, label } of REGIONS) {
    console.log(`Generating trends for ${label}...`);
    const text = await callGemini(apiKey, buildPrompt(label));
    const parsed = JSON.parse(text);
    const payload = {
      ...parsed,
      region: label,
      generatedAt: new Date().toISOString(),
      source: 'build',
    };
    writeFileSync(join(outDir, `trends-${id}.json`), JSON.stringify(payload, null, 2));
    console.log(`Wrote trends-${id}.json`);
  }
}

main().catch((err) => {
  console.error('Trends generation failed:', err.message);
  process.exit(1);
});
