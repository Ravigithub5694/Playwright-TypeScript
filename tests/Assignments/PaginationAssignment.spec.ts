import { expect, test,Locator } from "@playwright/test";


test("Static Web table handling @statictable", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //click or check on Select for each row of allpages
    const table:Locator=page.locator('#productTable')
     const allPages= await page.locator("#pagination li").all()
     console.log("Number of pages= "+ allPages.length)
    for(const page1 of allPages){
        await page1.click();
       const rows:Locator[]= await table.locator("tbody tr").all();
       for(const row of rows){
         await row.locator('td>input').check()
       }
       await page.waitForTimeout(1000)
       

    }
    

    

})
