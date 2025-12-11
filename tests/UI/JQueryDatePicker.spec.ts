import {test, expect, Locator} from '@playwright/test'

test("JQuerydate Picker handling @JQueryDatePicker", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // if fill works go with ot
    const datePicker:Locator = page.locator("#datepicker")
    //await page.locator("#datepicker").fill("12/11/2025") // formatmm/dd/yyyy
    await datePicker.scrollIntoViewIfNeeded()
    await datePicker.fill("12/11/2025")

    await page.waitForTimeout(2000)
})