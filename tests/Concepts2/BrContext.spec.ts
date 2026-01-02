import {test, chromium, firefox, webkit, expect} from '@playwright/test';


// this is for Broweser context pages concept
//Browsers - Chromium, Firefox, Webkit
//Context  - We can have multiple browser contexts for multiple users/apps for the same browser
            // provide a way to operate multiple independent browser sessions
//Page     - each context can have multiple pages/tabs Tab /Window/PopUP
test("Browser Context pages handling @BrContext", async () => {
    const browser = await chromium.launch()
    //const browser = await firefox.launch()
    //const browser = await webkit.launch()
    const context =await browser.newContext()
    const page1 = await context.newPage();   
    const page2 = await context.newPage()
    await page1.goto("https://testautomationpractice.blogspot.com/")  
    console.log("Number of ppagesin the context are = "+ context.pages().length)
    await expect(page1).toHaveTitle("Automation Testing Practice")
    await page2.goto("https://playwright.dev/")
    await expect(page2).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)
    
})