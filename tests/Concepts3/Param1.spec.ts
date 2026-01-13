import {test,expect} from "@playwright/test";
// This is for parameterization concept 
//Approcha 1 : Using for loop 
const searchItems =["laptop","computer","book"];

for( const item of searchItems) {
    test(`Searching for ${item} in Demo webshop`,async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("#small-searchterms").fill("Laptop");
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator("h2 a").nth(0)).toContainText("Laptop",{ignoreCase:true });
})
}
//Approch 2 using for each function

test.describe("Searching Items", async()=>{
    searchItems.forEach( item => {
    test(`Searching for ${item} in Demo webshop - 2nd approach`,async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("#small-searchterms").fill("Laptop");
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator("h2 a").nth(0)).toContainText("Laptop",{ignoreCase:true });  
})
})
})