import { test, expect } from '@playwright/test';
import assert from 'assert';
import fs from 'fs';

class CaseCreationPage {

    constructor(page) {
        this.page = page;
        this.caseCreationPage = page.locator("#b1-Title:has-text('Case Creation')");
        this.inputDateOfSummon = page.locator('#b3-Input_DateOfSummon');
        this.inputConciliationDate = page.locator('#b3-Input_ConciliationDate');
        // this.inputDate = page.getByRole('.input-date', { name: 'Clear completed' });
        // this.mssPrefix = page.locator('input');
        this.mssPrefix = page.locator('input', { id: 'b3-Input_MSSPrefixs' });
        this.mssNumber = page.locator('input', { id: 'b3-Input_MSSNumber1' });
        this.year = page.locator('input', { id: 'b3-Input_MSSNumber2' });
        // this.applicantPreferredLang = page.getByRole('select',{hasText: 'Select Here'}).first();
        this.applicantPreferredLang = this.page.locator('[data-block="CaseCreationFlow.LanguageSelectionBlock"] .dropdown-display');
        this.toggleButton = page.getByRole('input').locator('.switch');
        this.concluded = page.locator('span', { name: 'Concluded' });
    }

    async VerifyCaseCreationPageIsDisplayed(string) {

        await this.caseCreationPage.waitFor();
        // const bool = await this.page.locator("#b1-Title:has-text('Case Creation')").isVisible();
        // expect(bool).toBeTruthy();
        const text = await this.page.locator("#b1-MainContent div").first().textContent();
        expect(text).toBe(string);

    }

    async VerifyCaseCreationPageScreen() {
        await this.page.screenshot({ path: 'CaseCreation.png' });
        // expect(await this.page.screenshot()).toMatchSnapshot('CaseCreation.png');
    }

    //  getCaseNumberLocator(productName)
    // {
    //     return  this.page.locator("h3:has-text('"+productName+"')");
    // }

    async VerifyCaseNumberInputField() {
        console.log(this.mssPrefix.textContent());
        expect(this.mssPrefix).toBeVisible();
        expect(this.mssNumber).toBeVisible();
        expect(this.year).toBeVisible();
    }

    async VerifyConciliationDateTimeOptionField() {
        expect(this.inputConciliationDate).toBeVisible();
    }

    async VerifyDateOfSummon() {
        expect(this.inputDateOfSummon).toBeVisible();
    }

    async VerifyPendingAndConcludedToggleButton() {
        expect(this.toggleButton).toBeVisible();
    }
    //     C:\Users\lw\repo\playwrightStreamTemplate\node_modules\playwright\lib\matchers\expect.js:198
    //       if (!testInfo) return matcher.call(target, ...args);
    //                                     ^

    // Ge [Error]: Timed out 5000ms waiting for expect(locator).toBeVisible()

    // Locator: getByRole('input').locator('.switch')
    // Expected: visible
    // Received: <element(s) not found>
    // Call log:
    //   - locator._expect with timeout 5000ms
    //   - waiting for getByRole('input').locator('.switch')

    //     at Proxy.<anonymous> (C:\Users\lw\repo\playwrightStreamTemplate\node_modules\playwright\lib\matchers\expect.js:198:37)
    //     at CaseCreationPage.VerifyPendingAndConcludedToggleButton (file:///C:/Users/lw/repo/playwrightStreamTemplate/pageobjects/CaseCreationPage.js:58:35)
    //     at World.<anonymous> (file:///C:/Users/lw/repo/playwrightStreamTemplate/features/step_definitions/casecreationsteps.js:53:31)
    //     at Object.run (C:\Users\lw\repo\playwrightStreamTemplate\node_modules\@cucumber\cucumber\lib\user_code_runner.js:24:27)
    //     at C:\Users\lw\repo\playwrightStreamTemplate\node_modules\@cucumber\cucumber\lib\runtime\step_runner.js:52:114
    //     at AsyncLocalStorage.run (node:async_hooks:346:14)
    //     at runInTestCaseScope (C:\Users\lw\repo\playwrightStreamTemplate\node_modules\@cucumber\cucumber\lib\runtime\scope\test_case_scope.js:8:26)
    //     at Object.run (C:\Users\lw\repo\playwrightStreamTemplate\node_modules\@cucumber\cucumber\lib\runtime\step_runner.js:52:63)
    //     at async TestCaseRunner.invokeStep (C:\Users\lw\repo\playwrightStreamTemplate\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:113:16)
    //     at async TestCaseRunner.runStep (C:\Users\lw\repo\playwrightStreamTemplate\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:265:26) {
    //   matcherResult: {
    //     message: '\x1B[31mTimed out 5000ms waiting for \x1B[39m\x1B[2mexpect(\x1B[22m\x1B[31mlocator\x1B[39m\x1B[2m).\x1B[22mtoBeVisible\x1B[2m()\x1B[22m\n' +
    //       '\n' +
    //       "Locator: getByRole('input').locator('.switch')\n" +
    //       'Expected: visible\n' +
    //       'Received: <element(s) not found>\n' +
    //       'Call log:\n' +
    //       '  \x1B[2m- locator._expect with timeout 5000ms\x1B[22m\n' +
    //       "\x1B[2m  - waiting for getByRole('input').locator('.switch')\x1B[22m\n",
    //     pass: false,
    //     actual: 'hidden',
    //     name: 'toBeVisible',
    //     expected: 'visible',
    //     log: [
    //       'locator._expect with timeout 5000ms',
    //       "waiting for getByRole('input').locator('.switch')"
    //     ],
    //     timeout: 5000
    //   }
    // }

    async VerifyConcludedToggleButton() {
        expect(this.concluded).toBeVisible();
    }

    async VerifyFieldsOptional() {
        // expect(this.inputDateOfSummon).toBeVisible();
    }

    async FillInAllInformationToCreateNewCase() {
        this.mssNumber.fill('a9b324');
        this.year.fill('3024');
    }

    async ClickOnPreferredLanguageDropdown() {
        // expect(this.inputDateOfSummon).toBeVisible();
        // await this.page.click('text=Preferred Language');
        // const selectHere = await this.page.getByRole('select',{hasText: 'Select Here'}).first();
        // const selectHere = await this.page.getByLabel('Applicant');
        // this.applicantPreferredLang = await this.page.locator('[data-block="CaseCreationFlow.LanguageSelectionBlock"] .dropdown-display');
        this.applicantPreferredLang.first().click();
    }

    // async VerifyListOfLanguage(){
    //     const languageOptions = ['English', 'Mandarin', 'Malay', 'Tamil', 'Others']
    //     // const listShown = await this.languageList.allTextContents();
    //     // expect(listShown).toBe(languageOptions);
    //     this.languageList = await this.page.locator('select option');
    //     // const listShown = await this.languageList.allTextContents();
    //     for (const listItem of languageList) {
    //         // expect(languageOptions).toContain(listItem);
    //         expect(languageList).toHaveText(listItem);
    //     }
    // }
    async VerifyListOfLanguage() {
        await this.page.waitForTimeout(1000);
        const languageOptions = ['English', 'Mandarin', 'Malay', 'Tamil', 'Others'];
        this.languageList = await this.applicantPreferredLang.locator('select option');
        // this.languageList.click();
        const listShown = await this.languageList.allTextContents();
        const languageListItems = [];
        // await this.page.waitForTimeout(1000);
        // for (let i = 0; i < 5; i++) {
        for (const listItem of listShown) {
            // console.log(listItem);
            // expect(listItem).toContain(languageOptions[i]);
            languageListItems.push(listItem);
            console.log('\n' + listItem);
        }
        for (let i = 0; i < 5; i++) {
            // expect(languageListItems[i]).toContain(languageOptions[i]);
        }
    }

    async VerifyCaseCreationPopOutInfo() {
        // 'Confirmation On Case Creation'
        // Need info input from scenario example
    }

}
export default CaseCreationPage;