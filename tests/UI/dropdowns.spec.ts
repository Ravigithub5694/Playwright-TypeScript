import {expect, Locator, test} from '@playwright/test'

test("Static dropdowns",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const staticDropdown= page.locator("#country")
     await staticDropdown.selectOption({value:"uk"})
    // await staticDropdown.selectOption({label:"United States"})
    //  await staticDropdown.selectOption({index:3})
   // await staticDropdown.selectOption("India")
   //await page.keyboard.press("Control+-")
    //await page.pause()
   //await page.evaluate("document.body.style.zoom='0.8'")
   //await page.evaluate("document.body.style.transform='scale(0.8)'")
//    await page.keyboard.down('Control')
//    await page.mouse.wheel(0,-100)
//    await page.keyboard.up('Control')
await page.evaluate(() => {
  document.body.style.zoom = '1.25'; // Zooms out to 75%
});
  
    await page.waitForTimeout(3000)
})
test.only("multi select dropdowns",async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  //to select multiple options
  //await page.locator('#colors').selectOption(['Red','Blue','Green'])//- using visible text
  //await page.locator("#colors").selectOption(['red','yellow','white']) //-using value attribute
  //await page.locator("#colors").selectOption([{label:'Red'},{label:'White'},{label:'Green'}])//using label
  await page.locator("#colors").selectOption([{index:0},{index:1},{index:3}])//using index
   const options:Locator = page.locator("#colors>option");
   const optionsText:String[]= await (await options.allTextContents()).map(s=>s.trim())
   console.log(optionsText)
   expect(optionsText).toContain("Green")
   

})