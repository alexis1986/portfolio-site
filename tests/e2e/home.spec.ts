import { test, expect } from '@playwright/test';

test('hero states the value proposition', async ({ page }) => {
  await page.goto('/');
  const h1 = page.getByRole('heading', { level: 1 });
  await expect(h1).toContainText('Tu negocio creció.');
  await expect(h1).toContainText('Tu plataforma no.');
  const hero = page.locator('#hero');
  for (const text of ['1M', '+40%', '+70%', '20 años']) {
    await expect(hero.getByText(text, { exact: true })).toBeVisible();
  }
});

test('hero offers booking and the featured case', async ({ page }) => {
  await page.goto('/');
  const hero = page.locator('#hero');
  await expect(hero.getByTestId('booking-cta')).toHaveText(/Agendá una llamada/);
  await expect(hero.getByRole('link', { name: 'Ver el caso de 1M eventos/día' })).toHaveAttribute(
    'href',
    '#case',
  );
});

test('header nav links target existing sections', async ({ page }) => {
  await page.goto('/');
  const hrefs = await page.locator('header nav a[href^="#"]').evaluateAll((els) =>
    els.map((e) => e.getAttribute('href') as string),
  );
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) {
    await expect(page.locator(href)).toHaveCount(1);
  }
});

test('header keeps booking CTA on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');
  await expect(page.locator('header [data-testid="booking-cta"]')).toBeVisible();
});

test('problems lists four pain points', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#problems li')).toHaveCount(4);
});

test('featured case tells before, decision and result and links the live demo', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('#case');
  await expect(section).toContainText('1 millón de eventos diarios');
  await expect(section).toContainText('la mayor telco de Argentina');
  const demo = section.locator('a[href="https://alarma-system-poc.alexdevvv.com"]');
  await expect(demo).toHaveAttribute('target', '_blank');
  await expect(demo).toHaveAttribute('rel', /noopener/);
  await expect(section).not.toContainText(/Ik[eé]/);
});

test('how I work shows three engagement steps with AI and confidentiality', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('#how-i-work');
  await expect(section.locator('article')).toHaveCount(3);
  await expect(section).toContainText('Diagnóstico de arquitectura');
  await expect(section).toContainText('ADRs');
  await expect(section).toContainText('confidencialidad');
  await expect(page.locator('body')).not.toContainText(/vibe coding/i);
});

test('results stay anonymous', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('#results');
  await expect(section).toContainText('+40%');
  await expect(section).toContainText('WhatsApp');
  await expect(section).toContainText('+70%');
  await expect(section).not.toContainText(/Ik[eé]/);
});

test('lab links public repos and describes homelab without a link', async ({ page }) => {
  await page.goto('/');
  const lab = page.locator('#lab');
  await expect(lab.locator('article')).toHaveCount(4);
  for (const repo of ['notification-service', 'hazelcast-poc', 'super-app-poc']) {
    await expect(lab.locator(`a[href="https://github.com/alexis1986/${repo}"]`)).toHaveCount(1);
  }
  await expect(lab.locator('article:has-text("homelab-infra") a[href*="github.com"]')).toHaveCount(0);
});

test('about shows the real photo', async ({ page }) => {
  await page.goto('/');
  const img = page.locator('#about img');
  await expect(img).toHaveAttribute('alt', /.+/);
  await img.scrollIntoViewIfNeeded();
  await expect.poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
});

test('closing section offers booking and email', async ({ page }) => {
  await page.goto('/');
  const contact = page.locator('#contact');
  await expect(contact.getByTestId('booking-cta')).toHaveCount(1);
  await expect(contact.locator('a[href="mailto:alexis.castellano@gmail.com"]')).toHaveCount(1);
});

test('page has sections in the approved order', async ({ page }) => {
  await page.goto('/');
  const ids = await page.locator('main > section').evaluateAll((els) => els.map((e) => e.id));
  expect(ids).toEqual(['hero', 'problems', 'case', 'how-i-work', 'results', 'lab', 'about', 'contact']);
});
