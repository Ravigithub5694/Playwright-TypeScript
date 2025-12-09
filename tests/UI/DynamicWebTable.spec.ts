import { expect, test, Locator } from "@playwright/test";


test("Dynamic Web table handling @Dynamictable", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Dynamic table rows colums changes dynamically
    //get the cpu process of chrome
    await expect(page.locator('table#taskTable')).toBeVisible();
    const tBody: Locator = page.locator('table#taskTable tbody')
    const rows: Locator[] = await tBody.locator('tr').all();
    console.log("Row count is=" + await rows.length);
    let processName = '';
    let cpuLoad = '';
    for (const row of rows) {
        processName = await row.locator('td').first().innerText();
        if (processName === "Chrome") {
            await page.waitForTimeout(2000)
            cpuLoad= await row.locator('td').filter({hasText:'%'}).innerText();
            //cpuLoad= await row.locator('td',{hasText:'%'}).innerText();//Playwright
            //cpuLoad = await row.locator('td:has-text("%")').innerText();
            console.log("Processname is = " + processName + ' and cpuload is = ' + cpuLoad)
            break;
        }
    }
    const originalValue= await page.locator('.chrome-cpu').innerText();
     if(cpuLoad===originalValue){
        console.log("original cpuload is = "+originalValue)
     }

})
