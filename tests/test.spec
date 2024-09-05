// @ts-check
import { test, expect } from '@playwright/test';
import playwright from '@playwright/test';
import { POManager } from '../pageobjects/POManager.js';
let poManager;

test('get started link', async ({ page }) => {
    console.log("Before Step");
    // const browser = await playwright.chromium.launch({
    //     headless: false,
    // });
    // const context = await browser.newContext();
    // this.page = await context.newPage();
    poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin('meoa1');

    const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.navigateToCreateCase();

  const caseCreationPage = poManager.getCaseCreationPage();
  expect(await caseCreationPage.VerifyCaseNumberInputField());

    // await page.goto('https://playwright.dev/');

    // Click the get started link.
    // await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});