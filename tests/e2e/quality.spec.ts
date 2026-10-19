import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('no horizontal scroll on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');
  const width = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(width).toBeLessThanOrEqual(375);
});

for (const lang of ['es', 'en'] as const) {
  test(`no serious accessibility violations (${lang})`, async ({ page }) => {
    await page.goto('/');
    if (lang === 'en') {
      await page.getByTestId('language-toggle').click();
      await expect(page.locator('html[lang="en"]')).toHaveCount(1);
    }
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations
      .filter((v) => v.impact === 'serious' || v.impact === 'critical')
      .map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.map((n) => n.target) }));
    expect(serious).toEqual([]);
  });
}

test('seo metadata points to the canonical domain', async ({ page }) => {
  await page.goto('/');
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toMatch(/^https:\/\/alexdevvv\.com\/?$/);
  const og = await page.locator('meta[property="og:image"]').getAttribute('content');
  expect(og?.startsWith('https://alexdevvv.com/opengraph-image')).toBe(true);
});
