import {Given, When, Then} from '@cucumber/cucumber'
import {chromium, Browser, Page} from 'Playwright'

let browser: Browser
let page: Page

Given ('User navigates to the application', async () => {
    browser = await chromium.launch({ headless: false })
    //context = await browser.newContext();
    page = await browser.newPage()
    await page.goto('https://talent500.co/auth/signin')
});

When ('I enter the username as {string}', async (username) => {
    await page.getByText('Email').fill('steve.mulhall@dhm-testing.com')
    //await this.page.locator(“[data-id=email-field-login]”).type(username);
    });

When('I enter the password as {string}', async (password) => {
    await page.getByText('Email').fill('password')
    });

When('I click on login button', async () => {
    await page.getByText ('Login').click()
    });

//Then('User should logged in successfully', async () => {

//const text = await this.page.locator(‘[id=”progress-bar”]’).textContent();

//expect(text).toContain(“PROFILE”);

//Then(“Logout from the application”, async () => {

//await this.page.locator(‘[alt=”DropDown Button”]’).click();

//await this.page.locator(‘[data-id=”nav-dropdown-logout”]’).click();

//});