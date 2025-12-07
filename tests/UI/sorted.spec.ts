import { expect, test, Locator } from "@playwright/test";

test("Sorting the dropdwon options",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dropdwon= await page.locator("#animals>option");
    //const dropdwon:Locator = await page.locator("#colors>option");
    const Text:String[] = (await dropdwon.allTextContents()).map(s=>s.trim());
    console.log("Original list is "+Text)
    // const originalList= Text;
    // const sortedList= originalList.sort()
    const originalList = [...Text];
    const sortedList = [...Text].sort()
    console.log("Sorted list is "+sortedList)
    expect(originalList).toEqual(sortedList)

})
test("veirfy of dropdown contains duplicates",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dropdwon= await page.locator("#animals>option");
    //const dropdwon:Locator = await page.locator("#colors>option");
    const optionsText:String[] = (await dropdwon.allTextContents()).map(s=>s.trim());
    console.log("Original list is "+optionsText)
    const uniqueList = new Set<String>;
    const duplicateList = new Array<String>;
    for(const option of optionsText){
        if(!uniqueList.has(option)){
            uniqueList.add(option);
        } else {
            duplicateList.push(option)
        }
    }
    console.log("Uniquelist is= "+uniqueList)
    console.log("Duplocate list  is= "+duplicateList)
    expect(duplicateList.length).toBeGreaterThan(0);

})