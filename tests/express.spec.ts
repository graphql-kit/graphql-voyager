import { expect, test } from '@playwright/test';

import { gotoVoyagerPage } from './PageObjectModel';

test('open express example', async ({ page }) => {
  const voyagerPage = await gotoVoyagerPage(page);

  await voyagerPage.waitForGraphToBeLoaded();
  await expect(voyagerPage.page).toHaveScreenshot('loaded-express-example.png');
});
