import { expect, test } from "@playwright/test";

test("Sorting the dropdwon options",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dropdwon= await page.locator("#animals.option");
    const Text:String[] = await dropdwon.allTextContents();
    console.log(Text)

})