import { test, expect } from '@playwright/test';
import assert from 'assert';

class CasePage {

    constructor(page) {
        this.page = page;
        this.caseUpload = page.locator("#b1-Title:has-text('Case Creation')");
        this.firstCase = page.locator("#table-row td");
        this.manageCaseDetails = page.locator(".OSBlockWidget button div i").first().textContent("Manage Case Details");
        // Tabs
        this.caseDetailsTab = page.locator("#CaseDetailsTab span");
        this.applicantDetailsTab = page.locator("#ApplicantDetailsTab span");
        this.respondentDetailsTab = page.locator("#RespondentDetailsTab span");
        this.previousCasesTab = page.locator("#PreviousCasesTab span");
        this.documentTab = page.locator("#DocumentsTab span");
        // this.documentTab = page.locator("#b10-Title");

        // this.caseDetailsTab = page.locator(":text('Case Details')");
        // this.applicantDetailsTab = page.locator(":text('Applicant\'s Details')");
        // this.respondentDetailsTab = page.locator(":text('/Respondent/')");
        // this.previousCasesTab = page.locator(":text('Previous Case(s)')");
        // this.documentTab = page.locator(":text('Documents')");

        this.uploadButton = page.getByRole('button', { name: 'Upload' });
    }

    //     async VerifyCasePageIsDisplayed(dataTable) {

    //         // await this.caseDetailsTab.waitFor();
    //         // const bool = await this.page.locator("#b1-Title:has-text('Case Creation')").isVisible();
    //         // expect(bool).toBeTruthy();
    //         // const text = await this.page.locator("#b1-MainContent div").first().textContent();
    //         // await expect(text).toBe(string);
    //         // await expect(this.caseDetailsTab).toHaveAttribute("minlength", "5");
    //         // for(var tabs in dataTable){
    //             // expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 1]));
    //             // expect(value).toBe(value);
    //         // }

    //         const tabs = [
    //             this.caseDetailsTab.textContent(),
    //             this.applicantDetailsTab.textContent(),
    //             this.respondentDetailsTab.textContent(),
    //             this.previousCasesTab.textContent(),
    //             this.documentTab.textContent()
    //         ]
    //         // expect(tabs).toEqual(expect.arrayContaining(dataTable));
    //         expect(tabs).toEqual(dataTable);
    //     //     expect(this.applicantDetailsTab.textContent()).toEqual(dataTable[1]);
    //     //     expect(this.respondentDetailsTab.textContent()).toEqual(dataTable[2]);
    //     //     expect(this.previousCasesTab.textContent()).toEqual(dataTable[3]);
    //     //     expect(this.documentTab.textContent()).toEqual(dataTable[4]);
    //     this.uploadButton = page.getByRole('button', { name: 'Upload' });
    // }

    // async VerifyCasePageIsDisplayed(dataTable) {
    //     // Wait for the case details tab to be visible
    //     await this.caseDetailsTab.waitFor();
    
    //     // Ensure all tabs are visible before extracting text content
    //     const tabs = [
    //         await this.caseDetailsTab.textContent(),
    //         await this.applicantDetailsTab.textContent(),
    //         await this.respondentDetailsTab.textContent(),
    //         await this.previousCasesTab.textContent(),
    //         await this.documentTab.textContent()
    //     ];
    
    //     // Log the actual values of the tabs
    //     console.log('Actual tab values:', tabs);
    
    //     // Compare the extracted text content with the expected values
    //     expect(tabs).toEqual(dataTable);
    // }

    // v3
    async VerifyCasePageIsDisplayed(dataTable) {
        // Wait for the case details tab to be visible
        await this.caseDetailsTab.waitFor();
    
        // Ensure all tabs are visible before extracting text content
        const tabs = [
            await this.caseDetailsTab.textContent(),
            await this.applicantDetailsTab.textContent(),
            await this.respondentDetailsTab.textContent(),
            await this.previousCasesTab.textContent(),
            await this.documentTab.textContent()
        ];
    
        // Extract expected tab names from dataTable
        const expectedTabs = dataTable.raw().flat();
    
        // Log the actual and expected values for debugging
        console.log('Actual tab values:', tabs);
        console.log('Expected tab values:', expectedTabs);
    
        // Compare the extracted text content with the expected values
        expect(tabs).toEqual(expectedTabs);
    }

    async VerifyCaseCreationPageScreen() {
        await this.page.screenshot({ path: 'CaseCreation.png' });
        // expect(await this.page.screenshot()).toMatchSnapshot('CaseCreation.png');
    }

    //  getCaseNumberLocator(productName)
    // {
    //     return  this.page.locator("h3:has-text('"+productName+"')");
    // }

    // async VerifyCaseNumberInputField() {
    //     const mssPrefix = await this.page.waitForSelector("#b3-Input_MSSPrefixs");
    //     const mssNumber = await this.page.waitForSelector("#b3-Input_MSSNumber1");
    //     const year = await this.page.waitForSelector("#b3-Input_MSSNumber2");
    //     expect(mssPrefix.textContent() === 'MSS');
    // }

    async VerifyCasePageIsDisplayed() {
        const title = this.CasePage.title();
        await this.caseDetailsTab.waitFor();
        const validTitles = [
            "Case Details",
            "Applicant's Details",
            "Respondent's Details",
            "Previous Case(s)",
            "Documents"
        ];
    
        if (validTitles.includes(title)) {
            expect(title).toBe(title);
        } else {
            expect(title).toBe("Case Details");
        }
    }

    async ClickOnTab(tab) {
        switch(tab) {
            case "Case Details":
                return this.caseDetailsTab.click();
            case "Applicant's Details":
                return this.applicantDetailsTab.click();
            case "Respondent's Details":
                return this.respondentDetailsTab.click();
            case "Previous Case(s)":
                return this.previousCasesTab.click();
            case "Documents":
                return this.documentTab.click();
            default:
                return this.caseDetailsTab.click();
        }
    }

    async ClickOnCase() {
        // return this.firstCase.click();
        return this.manageCaseDetails.click();
    }

    async ClickOnDocumentTab() {
        return this.documentTab.click();
    }

    async ClickOnUploadButton() {
        // console.log(this.uploadButton);
        return this.uploadButton.click();
    }
    

}
export default CasePage;