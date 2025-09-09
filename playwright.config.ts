import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html', { open: 'never' }]],

  use: {
    trace: 'on-first-retry', // трасса при первом падении
    screenshot: 'only-on-failure', // скриншот только при падении
    video: 'retain-on-failure', // видео только при падении
    // baseURL: 'http://localhost:3000', // при необходимости
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // можно добавить Firefox, Webkit и мобильные проекты
  ],
});
