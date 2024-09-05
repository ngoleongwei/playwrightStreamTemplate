import { After, Before, AfterStep, Status } from '@cucumber/cucumber';
import playwright from '@playwright/test';

// let page;
// let browser;

Before(async function () {
    // This hook will be executed before all scenarios
    console.log("Before Step");
    const browser = await playwright.chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
      this.page =  await context.newPage();
});

AfterStep(async function ({ result }) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
        const buffer = await this.page.screenshot();
        await this.page.screenshot({ path: 'screenshot1.png' });
        this.attach(buffer.toString('base64'), 'base64:image/png');
        console.log("Screenshot logged")
    }
});