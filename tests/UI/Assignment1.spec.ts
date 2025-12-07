import { expect,test } from "@playwright/test";

test("Sorting realtime ",async({page})=>{
     await page.goto('https://www.bstackdemo.com/')
     //locate the Orderby dropdown and verify its displayed or not
     //Select the "lowest to highest" option from dropdwon
     const ordersBy=page.locator(".sort>select")
     await expect(ordersBy).toBeVisible();
     await ordersBy.click();
   //  await ordersBy.selectOption('lowestprice');
   //await page.locator('.sort>select>option:nth-child(2)').click();
   //await page.getByRole('option',{name:'Lowest to highest'}).click()
   
   await ordersBy.selectOption({label:'Lowest to highest'})
    // retrieve list of products price & names and print name and price
    await page.waitForTimeout(2000)
     const products= page.locator("div.shelf-item")
     await products.last().waitFor();
     const productNames= await products.locator('p.shelf-item__title').allTextContents();
     console.log("Product name list is "+productNames)
     const productPrices= await products.locator('div.shelf-item__price>.val').allTextContents();
     console.log("Product price list is "+productPrices)
    for(let i=0;i<await products.count();i++){
       const productName= await products.nth(i).locator('p.shelf-item__title').textContent();
        const productPrice = await products.nth(i).locator('div.shelf-item__price>.val').textContent();
        console.log("Product name is: "+productName+" and price is : "+productPrice)
    }
    //Print lowest price product with price
    console.log("Lowest product name is"+productNames[0]+ " with lowest price of "+productPrices[0])
    //print the highest  product with price
    console.log("Highest product name is "+productNames[productNames.length-1]+ 
        " with highest price of "+productPrices[productPrices.length-1])

})