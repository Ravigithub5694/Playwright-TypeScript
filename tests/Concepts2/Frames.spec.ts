import {test, Locator,expect} from '@playwright/test'

test("Frames handling @Frames", async({page})=>{ 
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //Get the total number of frames in the page
    const frames=page.frames()
    console.log("Total number of frames in the page: ",frames.length)  
    await page.waitForTimeout(2000)  
     
    //print the name of each frame
    // frames.forEach((frame)=>{
    //     console.log("Frame name is: ",frame.name())
    // })                      
    //get

})