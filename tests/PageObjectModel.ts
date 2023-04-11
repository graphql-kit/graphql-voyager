import { type Locator, type Page } from '@playwright/test';

interface VoyagerURLSearchParams {
  url?: string;
  withCredential?: boolean;
}

export async function gotoVoyagerPage(
  page: Page,
  searchParams?: VoyagerURLSearchParams,
) {
  const search = new URLSearchParams();
  if (searchParams?.url != null) {
    search.append('url', searchParams.url);
  }
  if (searchParams?.withCredential != null) {
    search.append('withCredential', searchParams.withCredential.toString());
  }

  await page.goto('/?' + search.toString());
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
    await this.graphLoadingAnimation.waitFor({ state: 'hidden' });
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

export const SchemaPresets = [
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
