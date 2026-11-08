import { expect, test, type Page } from '@playwright/test';

async function chooseTheme(page: Page, name: 'Light' | 'Dark' | 'System') {
  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await page.getByRole('menuitem', { name }).click();
}

test.describe('theme', () => {
  test('switches between dark and light', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/en');
    const html = page.locator('html');

    await chooseTheme(page, 'Dark');
    await expect(html).toHaveClass(/\bdark\b/);

    await chooseTheme(page, 'Light');
    await expect(html).not.toHaveClass(/\bdark\b/);
  });

  test('remembers the choice after a reload', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/en');

    await chooseTheme(page, 'Dark');
    await page.reload();

    await expect(page.locator('html')).toHaveClass(/\bdark\b/);
  });

  test('follows the operating system by default', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/en');
    await expect(page.locator('html')).toHaveClass(/\bdark\b/);

    await page.emulateMedia({ colorScheme: 'light' });
    await expect(page.locator('html')).not.toHaveClass(/\bdark\b/);
  });
});
