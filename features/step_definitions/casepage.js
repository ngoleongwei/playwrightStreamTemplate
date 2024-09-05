import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
// import { Greeter } from "../../src/index.js";
import { test, expect } from '@playwright/test';
import { POManager } from '../../pageobjects/POManager.js';
let poManager;

When('they click on {string} tab', async function (string) {
  poManager = new POManager(this.page);
  this.casePage = poManager.getCasePage();
  await this.casePage.ClickOnTab(string);
});

Then('they shall see the case information divided into following tabs', async function (dataTable) {
  poManager = new POManager(this.page);
  this.casePage = poManager.getCasePage();
  await this.casePage.VerifyCasePageIsDisplayed(dataTable);
});

Then('they shall see the content associated with that tab without requiring a page reload', async function () {
  poManager = new POManager(this.page);
  this.casePage = poManager.getCasePage();
  await this.casePage.VerifyCaseTabIsDisplayed();
});

When('they click on <Tab> tab', async function () {
  poManager = new POManager(this.page);
  this.casePage = poManager.getCasePage();
  await this.casePage.ClickOnTab(Tab);
});
