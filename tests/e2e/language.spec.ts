import { test, expect } from '@playwright/test';
import { siteCopy } from '../../content/site';

test('html lang follows the language toggle', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html[lang="es"]')).toHaveCount(1);
  await page.getByTestId('language-toggle').click();
  await expect(page.locator('html[lang="en"]')).toHaveCount(1);
});

function collectPairs(node: unknown, out: { es: string; en: string }[] = []) {
  if (Array.isArray(node)) {
    node.forEach((n) => collectPairs(n, out));
  } else if (node && typeof node === 'object') {
    const obj = node as Record<string, unknown>;
    if (typeof obj.es === 'string' && typeof obj.en === 'string') {
      out.push({ es: obj.es, en: obj.en });
    } else {
      Object.values(obj).forEach((v) => collectPairs(v, out));
    }
  }
  return out;
}

test('english mode leaves no spanish copy', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('language-toggle').click();
  await expect(page.locator('html[lang="en"]')).toHaveCount(1);
  const pairs = collectPairs(siteCopy).filter((p) => p.es !== p.en && p.es.length > 12);
  expect(pairs.length).toBeGreaterThan(10);
  for (const { es } of pairs) {
    await expect(page.getByText(es, { exact: true }), es).toHaveCount(0);
  }
  await page.getByTestId('language-toggle').click();
  await expect(page.locator('h1')).toContainText('Tu negocio creció.');
});
