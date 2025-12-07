import { expect,test } from "@playwright/test";

test("Dynamic/autosuggestive dropdown",async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('Search for Products, Brands and More').fill('smart')
    //get all suggested option--> ctl+shift+p on DOM --> emulate focused page
    await page.locator('ul>li').last().waitFor()
     const options= page.locator('ul>li')
    //count of suggested options

     console.log("count is ="+await options.count())
     for(let i=0;i<await options.count();i++){
        await page.waitForTimeout(1000)
        //const text=await options.nth(i).innerText();
        const text=await options.nth(i).textContent()
        console.log(i+"th suggesion is "+text)
     }
     //click on the smartphone option
     for(let i=0;i<await options.count();i++){
        await page.waitForTimeout(1000)
        const text=await options.nth(i).textContent()
        if(text === 'smartphone'){
            await options.nth(i).click()
            break
        }
        console.log(i+"th suggesion is "+text)
     }

})