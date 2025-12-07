import {test, chromium} from '@playwright/test'


test("Shadow root elemt",async({page})=>{

    // const browser=await chromium.launch();
    //   const context = await browser.newContext()
    // const page=await context.newPage()
    //  await page.goto('chrome://help/')
    await page.goto('https://support.google.com/chrome/?hl=en')
    // await page.goto('https://www.google.com/chrome://settings/help');
    // await page.locator('h2#title').isVisible();
    console.log(await page.locator('h2#title').textContent())
})