import { test, expect, Locator, Page } from '@playwright/test'

async function selctDate(year: string, month: string, date: string, page: Page) {
    //Aproach2  use date picker

    const datePicker: Locator = page.locator("#datepicker")
    await datePicker.scrollIntoViewIfNeeded()
    await datePicker.click();
    const datePicker1: Locator = page.locator('div#ui-datepicker-div')

    const nextButton = datePicker1.locator("a[data-handler='next']")
    const prevButton = datePicker1.locator("a[data-handler='prev']")
    while (true) {
     
        let acMonth = await datePicker1.locator('.ui-datepicker-month').innerText()
        let acYear = await datePicker1.locator('.ui-datepicker-year').innerText()

        const currentDate: Date = new Date();
        const currentYear = currentDate.getFullYear()
        //For Future datees
        const givenyear = parseInt(year)
        if (givenyear > currentYear && month!= acMonth) {
            console.log("Date give is Future date")
            await nextButton.click();
        } else if (givenyear < currentYear && month!= acMonth) {  //For past dates
            console.log("Date give is Past date")
            await prevButton.click();
        }
        if (acMonth === month && acYear === year) {
            break;

        }

    }
    let allDates: Locator[] = await page.locator('.ui-datepicker-calendar td').all();
    for (const day of allDates) {

        if (await day.innerText() === date) {

            await day.click();
            break;
        }
    }

    await page.waitForTimeout(2000)
}

test("JQuerydate Picker handling @JQueryDatePicker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    // if fill works go with ot
    const datePicker: Locator = page.locator("#datepicker")
    //await page.locator("#datepicker").fill("12/11/2025") // formatmm/dd/yyyy
    // await datePicker.scrollIntoViewIfNeeded()
    //await datePicker.fill("12/11/2025")
    const year = '2026';
    const month = 'June';
    const date = '19';
    await selctDate(year,month,date,page)
    await expect(datePicker).toHaveValue('06/19/2026');

})
