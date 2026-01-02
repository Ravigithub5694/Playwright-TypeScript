import { test } from '@playwright/test';
// This is for handling Popup concept
test("Popup handling @Popup", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto("https://testautomationpractice.blogspot.com/")
    //Multiple popups handling
    const popUp = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole("button", { name: 'Popup Windows' }).click()
    ])
    console.log("Title of the popup page is = " + await popUp[0].title())
    console.log("Title of the main page is = " + await page.title())
    const allPopup = await context.pages()
    console.log("Number of pages opened are = " + allPopup.length)
    for (const pop of allPopup) {
        const title= await pop.title()
        console.log("Title of the page is = " + title)
        if(title.includes("Selenium")){
            await pop.getByText("Register now!").click()
        } else if(title.includes("Playwright")){
            await pop.getByRole("link", {name:"Get started"}).click()
        }
    }
    await page.waitForTimeout(3000)
})