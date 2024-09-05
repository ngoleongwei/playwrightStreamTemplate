import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
// import { Greeter } from "../../src/index.js";
import {test, expect} from '@playwright/test';
import { POManager } from '../../pageobjects/POManager.js';
let poManager;
// poManager = new POManager(this.page);

Given('a MEO login as {string}', {timeout: 100 * 1000}, async function (string) {
  poManager = new POManager(this.page);
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(string);
});

When('they click on Add Case button', async function () {
  
  this.dashboardPage = poManager.getDashboardPage();
  await this.dashboardPage.navigateToCreateCase();
});

When('they accesses an existing case', async function () {
  poManager = new POManager(this.page);
  this.dashboardPage = poManager.getDashboardPage();
  await this.dashboardPage.navigateToCase();
});

When('they click on Document tab', async function () {
  this.casePage = poManager.getCasePage();
  await this.casePage.ClickOnDocumentTab();
});