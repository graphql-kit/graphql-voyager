import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const isCI = !!process.env['CI'];
/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 20 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: isCI,
  /* Retry on CI only */
  retries: isCI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: isCI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    ...devices['Desktop Chrome'],
    viewport: { width: 1920, height: 1001 },

    permissions: ['clipboard-read', 'clipboard-write'],

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Demo',
      testMatch: 'Demo.spec.ts',
      use: { baseURL: 'http://localhost:9090' },
    },
    {
      name: 'WebpackExample',
      testMatch: 'webpack.spec.ts',
      use: { baseURL: 'http://serve-webpack-example:9090' },
    },
    {
      name: 'ExpressExample',
      testMatch: 'express.spec.ts',
      use: { baseURL: 'http://serve-express-example:9090' },
    },
  ],
  outputDir: 'test-results/',
  webServer: {
    command: 'npm run serve',
    url: 'http://localhost:9090/',
  },
};

export default config;
