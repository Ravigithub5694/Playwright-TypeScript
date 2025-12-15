import {test, Locator,expect} from '@playwright/test'

test("Alert dialog @alerts", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)
     page.on('dialog',(alert)=>{
        console.log("Dialog type is: ", alert.type())
        expect(alert.type()).toContain('alert')
        console.log("dialog text is :",alert.message())
        alert.accept()})
    await page.getByRole("button",{name:'Simple Alert'}).click();
})