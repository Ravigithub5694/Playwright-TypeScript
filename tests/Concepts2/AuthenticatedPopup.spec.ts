import { test, expect } from '@playwright/test';
// This is for handling authenticated Popup concept
test("Authenticated Popup handling @AuthPopup", async ({ browser }) => {
   // const context = await browser.newContext(); Approch 1
   //Aproach 2  using browser context
   const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
    const page = await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
   // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    //Multiple popups handling
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(3000)
    await expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible()


})