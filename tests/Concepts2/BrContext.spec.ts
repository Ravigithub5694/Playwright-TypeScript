import {test, chromium, firefox, webkit} from '@playwright/test';


// this is for Broweser context pages concept
//Browsers - Chromium, Firefox, Webkit
//Context  - We can have multiple browser contexts for multiple users/apps for the same browser
            // provide a way to operate multiple independent browser sessions
//Page     - each context can have multiple pages/tabs Tab /Window/PopUP
test("Browser Context pages handling @BrContext", async () => {
    //const browser = await chromium.launch()
    //const browser = await firefox.launch()
    const browser = await webkit.launch()
    const context =await browser.newContext()
    const page = await context.newPage();   
    await page.goto("https://testautomationpractice.blogspot.com/")  
})