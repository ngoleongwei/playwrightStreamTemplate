# StreamMed Playwright

Before you start creating your automation tests in playwright you need to setup your test environment.

Install node from https://nodejs.org/en/download/

Install Visual Studio code from https://code.visualstudio.com/

## To start a new project
mkdir playwrightPlayground

Then innstall
npm init playwright@latest

npm install @cucumber/cucumber

## After download the codes
npm install



## Implementing Page object models:
https://playwright.dev/docs/pom

## To view the trace
https://trace.playwright.dev/

## Reporting
Allure Report
npm i -D allure-playwright

npx playwright test --grep @Web --reporter=line, allure-playwright

To generate allure report, run command below:
allure generate ./allure-results --clean

To open allure report, run command below:
allure open ./allure-report

This will result a html page locally hosted.