import {test,Locator} from '@playwright/test';
// this is for Tracing concept
test("Screenshot concept @Tracing", async ({page,context}) => {

    await context.tracing.start({screenshots:true,snapshots:true})//start the tracing

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
        await context.tracing.stop({path:'trace.zip'}) //stop tracing and save it to the specified path
    

})