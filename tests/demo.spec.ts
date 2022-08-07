import { test, expect } from '@playwright/test';

test('open demo', async ({ page }) => {
  await page.goto('/');

  const loadingAnimation = page.locator('text=Transmitting...');
  await expect(loadingAnimation).toBeVisible();
  await expect(page).toHaveScreenshot('loading.png');

  await loadingAnimation.waitFor({ state: 'hidden', timeout: 5000 });
  await expect(page).toHaveScreenshot('fully-loaded.png');
});
