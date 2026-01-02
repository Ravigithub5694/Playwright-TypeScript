import {test, expect,chromium, firefox, webkit} from '@playwright/test';
// This is for handling multiple Tabs  concept
test("Tabs handling @TabsHandling", async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const parantPage = await context.newPage()
    await parantPage.goto("https://testautomationpractice.blogspot.com/")
    //we need to wait for the new page gets opened
     const [childPage] =await Promise.all ([
        context.waitForEvent('page'),
        parantPage.getByRole("button",{name:'New Tab'}).click()
     ])    
    //Aproach 1: Using context.pages()
    const pages= context.pages()
    console.log("Number of pages/tabs opened are = "+ pages.length)
    
    console.log("title of the child page is = "+ await pages[0].title())
    console.log("title of the parant page is = "+ await pages[1].title())
    
     //Aproach 2: Using the reference of the child page
    console.log("Title of the child page is = "+ await childPage.title())
    console.log("title of the parant page is = "+ await parantPage.title())
    //Aproach 3
    for(const page of pages){
        console.log("Title of the page is = "+ await page.title())
    }

})
