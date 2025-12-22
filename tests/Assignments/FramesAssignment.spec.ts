import { test, Locator, expect } from '@playwright/test'

test("Frames handling @FramesAssignment", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //Zoomout the page
    await page.evaluate(() => {
        document.body.style.zoom = '0.65';
    })
    //input text into Frame 1
    const frame1 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" })
    if (frame1) {
        await frame1.locator('[name="mytext1"]').fill("Hello from Frame 1")
    }
    else {
        console.log("Frame 1 is not available")
    }
    //input text into Frame 2
    await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2.html" })?.locator("[name='mytext2']").fill("Hello from Frame 2")

    // input into Frame 4
    const frame4 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_4.html" })
    if (frame4) {
        await frame4.locator('[name="mytext4"]').fill("Hello from Frame 4")
    } else {
        console.log("Frame 4 is not available")
    }

    await page.waitForTimeout(2000);
    //await page.pause()
    // input into frame 5 and click on link and verify the text
    const frame5 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_5.html" })
    if (frame5) {
        await frame5.locator('[name="mytext5"]').fill("Hello from Frame 5")
        await frame5.getByRole("link",{name:"https://a9t9.com"}).click();
        await page.waitForTimeout(3000);
        //await frame5.locator("a#logo").isVisible()
         await expect(frame5.locator("a#logo")).toBeVisible()
    } else {
        console.log("Frame 5 is not available")
    }
    //click on link

    
})
