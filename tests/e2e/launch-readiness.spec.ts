import { test, expect } from '@playwright/test';

// Gate de lanzamiento: falla hasta que BOOKING_URL esté definido. Es esperado durante el desarrollo.
test('every booking CTA points to a Google Calendar booking page', async ({ page }) => {
  await page.goto('/');
  const ctas = page.getByTestId('booking-cta');
  const count = await ctas.count();
  expect(count).toBeGreaterThanOrEqual(3);
  for (let i = 0; i < count; i++) {
    const cta = ctas.nth(i);
    await expect(cta).toHaveAttribute('href', /^https:\/\/(calendar\.app\.google|calendar\.google\.com)\//);
    await expect(cta).toHaveAttribute('target', '_blank');
  }
});
