import { test, expect } from '@playwright/test';

test.describe('Тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Проверка отображения элементов навигации в Хэдере', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Community' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  });

  test('Проверка названий элементов навигации хэдера', async ({ page }) => {
    await expect
      .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
      .toContainText('Playwright');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('Docs');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('API');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('Node.js');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('Community');
  });

  test('Проверка атрибутов href элементов навигации хэдера', async ({ page }) => {
    await expect
      .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
      .toHaveAttribute('href', '/');
    await expect
      .soft(page.getByRole('link', { name: 'Docs' }))
      .toHaveAttribute('href', '/docs/intro');
    await expect
      .soft(page.getByRole('link', { name: 'API' }))
      .toHaveAttribute('href', '/docs/api/class-playwright');
    await expect
      .soft(page.getByRole('link', { name: 'Community' }))
      .toHaveAttribute('href', '/community/welcome');
    await expect
      .soft(page.getByLabel('GitHub repository'))
      .toHaveAttribute('href', 'https://github.com/microsoft/playwright');
    await expect
      .soft(page.getByLabel('Discord server'))
      .toHaveAttribute('href', 'https://aka.ms/playwright/discord');
  });

  test('Проверка переключения light мода', async ({ page }) => {
    await page.getByLabel('Switch between dark and light').click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('Проверка заголовка страницы', async ({ page }) => {
    await expect
      .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
      .toBeVisible();
    await expect
      .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
      .toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  });

  test('Проверка кнопки Get Started', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href');
  });
});
