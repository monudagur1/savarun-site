import { test, expect } from '@playwright/test';

test('homepage loads with SAVARUN title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'SAVARUN', level: 1 })).toBeVisible();
});

test('demo page shows simulated disclaimer', async ({ page }) => {
  await page.goto('/demo/');
  await expect(page.getByText('Simulated preview only')).toBeVisible();
});

test('trends page shows Gemini demo disclosure', async ({ page }) => {
  await page.goto('/trends/');
  await expect(page.getByText('Live AI demo')).toBeVisible();
  await expect(page.getByRole('button', { name: 'India' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Global' })).toBeVisible();
});
