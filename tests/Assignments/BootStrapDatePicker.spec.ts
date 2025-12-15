import { test, Locator } from '@playwright/test'


test("Bootstrap date picker @BootStrapDeatpicker", async ({ page }) => {
    await page.goto('https://www.booking.com/')
    //Clicking the calendar
    await page.waitForTimeout(10000)
    await page.getByTestId('searchbox-dates-container').click();
   
    //-- Checkin date---
    const checkInDate = '10';
    const checkInMonth = "July";
    const checkInYear = "2026"
    while(true){
    const nextButton: Locator = page.locator("button[aria-label='Next month']")
    const monthYear = await page.locator("h3[aria-live='polite']").first().innerText();
    const currentMonth = monthYear.split(" ")[0];
    const currentYear = monthYear.split(" ")[1];
    if (currentMonth === checkInMonth && currentYear === checkInYear) {
        break;
    }
     else {
        await nextButton.click();
    }
    }
    //Selecting the date
   const allDates= await page.locator('table').first().locator('td').all();
   for (let dat of allDates){
        const dateText = await dat.innerText();
        if(dateText === checkInDate){
            await dat.click();
            break;
        }
   }

})