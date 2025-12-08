import { expect, test,Locator } from "@playwright/test";


test("Comparing methid @comparing", async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    const products:Locator=page.locator('.product-title')// all product names
    // innert text and textcontent
   //    console.log( await products.nth(1).innerText());
//    console.log(await products.nth(1).textContent())
   //use loop to get the text of each element
//    for (let i=0; i< await products.count();i++){
//     //console.log(await products.nth(i).innerText())// extracts plain text - ELiminates whitespaces and line breaks
//     //console.log(await products.nth(i).textContent())// extracts hidden elemnts, extra spaces, line breaks
//     const productName=await products.nth(i).textContent()
//     console.log(productName?.trim())
//    }

// 2. Different b/w allInnerText v/s allTextContents

//  const productNames:String[] =await products.allInnerTexts();
//  console.log(productNames)
// const productNames:String[] =await products.allTextContents();
//  console.log(productNames.map(s=>s.trim()))
//  console.log('After trimmed')
//  console.log(productNames)
// 3. all() method
const prLocators:Locator[]= await products.all()
console.log(prLocators)
for (const prlocator of prLocators){
    console.log(await prlocator.innerText())
}
//for in loop
for( let i in prLocators){
    console.log(await prLocators[i].innerText())
}
})