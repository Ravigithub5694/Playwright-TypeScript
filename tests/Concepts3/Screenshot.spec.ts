import {test} from '@playwright/test';
// this is for Screenshot concept
test("Screenshot concept @Screenshot", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    // to custimize the screenshot path and name
    const timestamp = Date.now()
    await page.screenshot({path:"Screenshots/HomePage"+timestamp+".png", fullPage:true})

    //to take screenshot of specific element
    const logo= page.locator("[alt='Tricentis Demo Web Shop']")
    await logo.screenshot({path:"Screenshots/Logo"+timestamp+".png"})

    const featured= page.locator(".product-grid.home-page-product-grid")
    await featured.screenshot({path:"Screenshots/FeaturedProducts"+timestamp+".png"})


})