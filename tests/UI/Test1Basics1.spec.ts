import {test,expect} from '@playwright/test'

test("This is basic revision",async ({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://www.google.com")
    console.log(await page.title())
   // expect(await page.title()).toBe("Google")
   expect(page).toHaveTitle("Google");


})