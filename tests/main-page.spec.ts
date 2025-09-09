import { test, expect } from '@playwright/test';

test.describe('Тесты главной страницы', () => {
  // Перед каждым тестом открываем главную страницу
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Проверка отображения элементов навигации в Хэдере', async ({ page }) => {
    await test.step('Логотип Playwright', async () => {
      await expect
        .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
        .toBeVisible();
    });

    await test.step('Ссылки Docs, API, Node.js, Community', async () => {
      await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
      await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
      await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
      await expect.soft(page.getByRole('link', { name: 'Community' })).toBeVisible();
    });

    await test.step('Ссылки GitHub и Discord', async () => {
      await expect.soft(page.getByLabel('GitHub repository')).toBeVisible();
      await expect.soft(page.getByLabel('Discord server')).toBeVisible();
    });
  });

  test('Проверка текста и href ссылок', async ({ page }) => {
    await test.step('Проверка текста логотипа и ссылок', async () => {
      await expect
        .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
        .toContainText('Playwright');
      await expect.soft(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
      await expect.soft(page.getByRole('link', { name: 'API' })).toContainText('API');
      await expect.soft(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
      await expect.soft(page.getByRole('link', { name: 'Community' })).toContainText('Community');
    });

    await test.step('Проверка href ссылок', async () => {
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
  });

  test('Проверка переключения light мода', async ({ page }) => {
    await test.step('Клик по переключателю темы', async () => {
      await page.getByLabel('Switch between dark and light').click();
    });

    await test.step('Проверка, что тема светлая', async () => {
      await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light');
    });
  });

  test('Проверка заголовка страницы', async ({ page }) => {
    await test.step('Проверка видимости заголовка', async () => {
      await expect
        .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
        .toBeVisible();
    });

    await test.step('Проверка текста заголовка', async () => {
      await expect
        .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
        .toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
    });
  });

  test('Проверка кнопки Get Started', async ({ page }) => {
    await test.step('Проверка текста кнопки', async () => {
      await expect
        .soft(page.getByRole('link', { name: 'Get started' }))
        .toContainText('Get started');
    });

    await test.step('Проверка наличия href', async () => {
      await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href');
    });
  });
});
