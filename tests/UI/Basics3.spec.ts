import {test,expect} from '@playwright/test'

test('X path Locators',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page.locator("//img[@alt='Tricentis Demo Web Shop']")).toBeVisible()
    //console.log(text)
    const count=await page.locator("//a[contains(@href,'computer')]").count();
    expect(count).toBeGreaterThan(0)
    console.log(count)
    const products= await page.locator("//a[contains(@href,'computer')]")
   const productNames= await products.allTextContents();
   for(const name of productNames){
    console.log(name)
   }
   for(let i=0;i<count;i++){
    console.log(i+'ith product name is '+await products.nth(i).textContent())
   }

})
test.only("Dynamic elemnts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    for(let i=0;i<5;i++){

      // await page.getByRole('button',{name:/START|STOP/}).click()// using playwright locator
      //await page.locator("button[name='start'],button[name='stop']").click();// using CCSS locators
    //   await page.locator("//button[contains(@name,'st')]").click(); //using xpath 

//   await page.locator("//button[starts-with(@name,'st')]").click()//using xpath 

      await page.locator("//button[text()='START' or text()='STOP']").click() //using xpath 
    }
})