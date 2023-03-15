import { test, expect, type Page, type Locator } from '@playwright/test';

import { buildSchema, graphqlSync } from 'graphql';

async function gotoVoyagerPage(page: Page) {
  await page.goto('/');
  return new PlaywrightVoyagerPage(page);
}

class PlaywrightVoyagerPage {
  readonly page: Page;
  readonly graphLoadingAnimation: Locator;

  readonly changeSchemaDialog: PlaywrightChangeSchemaDialog;

  constructor(page: Page) {
    this.page = page;

    this.graphLoadingAnimation = page
      .getByRole('status')
      .getByText('Transmitting...');

    this.changeSchemaDialog = new PlaywrightChangeSchemaDialog(page);
  }

  async waitForGraphToBeLoaded() {
    await this.graphLoadingAnimation.waitFor({
      state: 'hidden',
      timeout: 5000,
    });
  }
}

class PlaywrightChangeSchemaDialog {
  readonly dialog: Locator;
  readonly openButton: Locator;

  readonly presetsTab: PlaywrightChangeSchemaPresetsTab;
  readonly sdlTab: PlaywrightChangeSchemaSDLTab;
  readonly introspectionTab: PlaywrightChangeSchemaIntrospectionTab;

  readonly displayButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.dialog = page.getByRole('dialog');
    this.openButton = page.getByRole('button', {
      name: 'Change Schema',
    });

    this.presetsTab = new PlaywrightChangeSchemaPresetsTab(this.dialog);
    this.sdlTab = new PlaywrightChangeSchemaSDLTab(this.dialog);
    this.introspectionTab = new PlaywrightChangeSchemaIntrospectionTab(
      this.dialog,
    );

    this.displayButton = this.dialog.getByRole('button', { name: 'Display' });
    this.cancelButton = this.dialog.getByRole('button', { name: 'Cancel' });
  }
}

class PlaywrightChangeSchemaBaseTab {
  readonly tab: Locator;
  readonly tabPanel: Locator;

  constructor(dialog: Locator, name: string) {
    this.tab = dialog.getByRole('tab', { name });
    this.tabPanel = dialog.getByRole('tabpanel', { name });
  }
}

const SchemaPresets = [
  'Star Wars',
  'Yelp',
  'Shopify Storefront',
  'GitHub',
] as const;
class PlaywrightChangeSchemaPresetsTab extends PlaywrightChangeSchemaBaseTab {
  readonly presetButtons: { [name in typeof SchemaPresets[number]]: Locator };

  constructor(dialog: Locator) {
    super(dialog, 'Presets');

    this.presetButtons = {} as any;
    for (const name of SchemaPresets) {
      this.presetButtons[name] = this.tabPanel.getByRole('button', { name });
    }
  }
}

class PlaywrightChangeSchemaSDLTab extends PlaywrightChangeSchemaBaseTab {
  readonly sdlTextArea: Locator;

  constructor(dialog: Locator) {
    super(dialog, 'SDL');

    this.sdlTextArea = this.tabPanel.getByPlaceholder('Paste SDL Here');
  }
}

class PlaywrightChangeSchemaIntrospectionTab extends PlaywrightChangeSchemaBaseTab {
  readonly introspectionTextArea: Locator;
  readonly copyIntrospectionQueryButton: Locator;

  constructor(dialog: Locator) {
    super(dialog, 'Introspection');

    this.introspectionTextArea = this.tabPanel.getByPlaceholder(
      'Paste Introspection Here',
    );
    this.copyIntrospectionQueryButton = this.tabPanel.getByRole('button', {
      name: 'Copied!',
    });
  }
}

test('open demo', async ({ page }) => {
  const voyagerPage = await gotoVoyagerPage(page);

  await voyagerPage.waitForGraphToBeLoaded();
  await expect(voyagerPage.page).toHaveScreenshot('loaded-demo.png');
});

for (const name of SchemaPresets) {
  test(`use ${name} preset`, async ({ page }) => {
    const voyagerPage = await gotoVoyagerPage(page);
    const { changeSchemaDialog } = voyagerPage;
    const { presetsTab } = changeSchemaDialog;

    await changeSchemaDialog.openButton.click();
    await expect(voyagerPage.page).toHaveScreenshot('open-dialog.png');

    await presetsTab.tab.click();
    await expect(voyagerPage.page).toHaveScreenshot(
      'switch-to-presets-tab.png',
    );

    const slug = name.toLowerCase().replaceAll(' ', '-');
    await presetsTab.presetButtons[name].click();
    await expect(voyagerPage.page).toHaveScreenshot(
      `choose-${slug}-preset.png`,
    );

    await changeSchemaDialog.displayButton.click();

    await page.waitForTimeout(200); // FIXME
    await voyagerPage.waitForGraphToBeLoaded();
    await expect(voyagerPage.page).toHaveScreenshot(`show-${slug}-preset.png`);
  });
}

test('check loading animation', async ({ page }) => {
  const voyagerPage = await gotoVoyagerPage(page);
  const { changeSchemaDialog } = voyagerPage;
  const { presetsTab } = changeSchemaDialog;

  await changeSchemaDialog.openButton.click();
  await presetsTab.tab.click();
  await presetsTab.presetButtons['GitHub'].click();
  await changeSchemaDialog.displayButton.click();

  await expect(voyagerPage.graphLoadingAnimation).toBeVisible();
  await expect(voyagerPage.page).toHaveScreenshot('loading-animation.png');

  await voyagerPage.waitForGraphToBeLoaded();
  await expect(voyagerPage.page).toHaveScreenshot('show-github-preset.png');
});

test('use custom SDL', async ({ page }) => {
  const voyagerPage = await gotoVoyagerPage(page);
  const { changeSchemaDialog } = voyagerPage;
  const { sdlTab } = changeSchemaDialog;
  await voyagerPage.waitForGraphToBeLoaded();

  await changeSchemaDialog.openButton.click();
  await expect(voyagerPage.page).toHaveScreenshot('open-dialog.png');

  await sdlTab.tab.click();
  await expect(voyagerPage.page).toHaveScreenshot('switch-to-sdl-tab.png');

  await sdlTab.sdlTextArea.fill('type Query { foo: String }');
  await expect(voyagerPage.page).toHaveScreenshot('fill-sdl.png');

  await changeSchemaDialog.displayButton.click();
  await voyagerPage.waitForGraphToBeLoaded();
  await expect(voyagerPage.page).toHaveScreenshot('display-sdl.png');
});

test('use custom intospection', async ({ page }) => {
  const voyagerPage = await gotoVoyagerPage(page);
  const { changeSchemaDialog } = voyagerPage;
  const { introspectionTab } = changeSchemaDialog;
  await voyagerPage.waitForGraphToBeLoaded();

  await changeSchemaDialog.openButton.click();
  await expect(voyagerPage.page).toHaveScreenshot('open-dialog.png');

  await introspectionTab.tab.click();
  await expect(voyagerPage.page).toHaveScreenshot(
    'switch-to-intospection-tab.png',
  );

  await introspectionTab.copyIntrospectionQueryButton.click();
  await expect(voyagerPage.page).toHaveScreenshot(
    'copy-introspection-button-click.png',
  );

  const clipboardText = await page.evaluate<string>(
    'navigator.clipboard.readText()',
  );
  const schema = buildSchema('type Query { foo: String }');
  const result = graphqlSync({ source: clipboardText, schema });
  const jsonResult = JSON.stringify(result, null, 2);

  await introspectionTab.introspectionTextArea.fill(jsonResult);
  await expect(voyagerPage.page).toHaveScreenshot('fill-introspection.png');

  await changeSchemaDialog.displayButton.click();
  await voyagerPage.waitForGraphToBeLoaded();
  await expect(voyagerPage.page).toHaveScreenshot('display-intospection.png');
});
