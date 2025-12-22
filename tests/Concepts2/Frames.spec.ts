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
    //Approach 1 by using page.frame()
    // const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    // if(frame1){
    //    // await frame1.locator("input[name='mytext1']").fill("This is Frame 1") //method 1
    //    await frame1.fill("input[name='mytext1']","This is Frame 1") //method 2
    // } else {
    //     console.log("Frame is not available")
    // }
    //Approach 2 by using frame locator
    const frame3 = await page.frameLocator("[src='frame_1.html']").locator("input[name='mytext1']").fill("John")
    

})