import {test, Locator,expect} from '@playwright/test'

test("Frames handling @NestedFrames", async({page})=>{ 
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame3= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
     //await frame3?.locator("[name='mytext3']").fill("Hello from Frame 3")
     //withput the ? mark we can use the below if condition
     if(frame3){
        await frame3.locator("[name='mytext3']").fill("Hello from Frame 3") 
       const childFrames= frame3.childFrames();
       console.log("child farmes inside the frame 3 are="+childFrames.length)// we ahve 1 child frame
       const radio=childFrames[0].getByLabel("I am a human")
       await radio.check();
       await expect(radio).toBeChecked()
       

     } else{
        console.log("Frame is not available")   
     }

    
    })