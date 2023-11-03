import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'https://api.thecatapi.com/v1/',
    trace: 'on',
  },

  projects: [
    {
      name: 'api',
      use: { ignoreHTTPSErrors: true },
    },]
});
