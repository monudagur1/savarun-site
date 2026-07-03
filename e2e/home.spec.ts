import { test, expect } from '@playwright/test';

test('homepage loads with SAVARUN title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'SAVARUN', level: 1 })).toBeVisible();
});

test('demo page shows simulated disclaimer', async ({ page }) => {
  await page.goto('/demo/');
  await expect(page.getByText('Simulated preview only')).toBeVisible();
});

test('contact page has waitlist form', async ({ page }) => {
  await page.goto('/contact/');
  await expect(page.getByLabel('Email address')).toBeVisible();
});
