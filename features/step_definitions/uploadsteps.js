import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { test, expect } from '@playwright/test';
import { POManager } from '../../pageobjects/POManager.js';
let poManager;


Then('the system shall display an interface for the MEO to select and upload relevant documents for the case', async function () {
    // validate upload button available 
    poManager = new POManager(this.page);   
    this.casePage = poManager.getCasePage();
    await this.casePage.ClickOnUploadButton();
});