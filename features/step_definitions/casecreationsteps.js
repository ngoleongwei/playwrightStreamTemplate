import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { test, expect } from '@playwright/test';
import { POManager } from '../../pageobjects/POManager.js';
let poManager;
// let caseCreationPage = poManager.getCaseCreationPage();

Then('they should see {string}', async function (string) {
  poManager = new POManager(this.page);
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.VerifyCaseCreationPageIsDisplayed(string);
});

Then('they should see this "Case Creation" screen', async function () {
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.VerifyCaseCreationPageScreen();
  expect(await this.caseCreationPagecaseCreationPage.VerifyCaseCreationPageScreen()).toMatchSnapshot('CaseCreation.png');
});

Then('they should see "Case Number Input" Field', async function () {
  poManager = new POManager(this.page);
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.VerifyCaseNumberInputField();
});

Then('they shall see the Conciliation Date and time option field', async function () {
  poManager = new POManager(this.page);
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.VerifyConciliationDateTimeOptionField();
});

When('they click on Preferred Language dropdown', async function () {
  poManager = new POManager(this.page);
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.ClickOnPreferredLanguageDropdown();
});

Then('they should see a list of language', async function () {
  poManager = new POManager(this.page);
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.VerifyListOfLanguage();
});

Then('they shall see the Date of Summons', async function () {
  poManager = new POManager(this.page);
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.VerifyDateOfSummon();
});

Then('they shall see the Pending and Concluded toggle button', async function () {
  poManager = new POManager(this.page);
  this.caseCreationPage = poManager.getCaseCreationPage();
  await this.caseCreationPage.VerifyPendingAndConcludedToggleButton()
});

When('case Status is toggled to Concluded', async function () {
  
  // await this.caseCreationPage.VerifyConcludedToggleButton();
  await this.page.locator('.switch').check();
});

Then('they shall see the following fields optional', async function () {
  expect(this.page.locator('.validation-message')).toBeEmpty();
});

When('they fill in all the information to create new case', async function () {

});

Then('they click confim to create new case', async function () {
  this.page.locator('')
})

Then('they shall see a pop out for confirmation', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('they shall see a new case created on their dashboard', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('they click submit without any input', function () {
  poManager = new POManager(this.page);
  this.page.getByRole('button').getByText('Submit').click();
});

Then('they shall see a validation-message on required field', function () {
  poManager = new POManager(this.page);
  expect(this.page.locator('.validation-message')).toBeVisible();
});

Then('they fill in {string} Input Field with {int}\\/{int}\\/{int}', function (string, int, int2, int3) {
  // Then('they fill in {string} Input Field with {int}\\/{int}\\/{float}', function (string, int, int2, float) {
  // Then('they fill in {string} Input Field with {int}\\/{float}\\/{int}', function (string, int, float, int2) {
  // Then('they fill in {string} Input Field with {int}\\/{float}\\/{float}', function (string, int, float, float2) {
  // Then('they fill in {string} Input Field with {float}\\/{int}\\/{int}', function (string, float, int, int2) {
  // Then('they fill in {string} Input Field with {float}\\/{int}\\/{float}', function (string, float, int, float2) {
  // Then('they fill in {string} Input Field with {float}\\/{float}\\/{int}', function (string, float, float2, int) {
  // Then('they fill in {string} Input Field with {float}\\/{float}\\/{float}', function (string, float, float2, float3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });