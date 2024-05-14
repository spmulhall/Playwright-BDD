import {Given, When, Then} from '@cucumber/cucumber'
import {chromium, Browser, Page} from 'Playwright'

let browser: Browser
let page: Page
Given ('todays date is {string}', async (date: string) => {
    browser = await chromium.launch()
    page = await browser.newPage()
    await page.goto('https://www.bbc.co.uk/sport/football/scores-fixtures')
    })
When ('I request to see the teams playing today', async () =>{
    })
Then ('the system should display the list of teams playing today', async () => {
    })
Then ('there should be at least one team playing today', async () => {
    })