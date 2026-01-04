import {test, expect} from "@playwright/test"
// This is for hard vs soft assertions
test("Hard vs Soft assertions @HardvsSoft", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    //Hard assertion - if this fails, the test will stop executing further steps
    // await expect(page).toHaveTitle("Demo Web Shop3")   
    // await expect(page).toHaveURL(/demowebshop.tricentis.com/)
    // const logo= page.locator("[alt='Tricentis Demo Web Shop']")
    // await expect(logo).toBeVisible()
    // await expect(logo).toBeVisible()  .catch((error) => {
    //     console.error("Soft assertion failed: ", error.message)
    // })

    //Soft assertion - even if this fails, the test will continue executing further steps
    //Soft assertion example using try-catch
    await expect.soft(page).toHaveTitle("Demo Web Shop3")   
    await expect.soft(page).toHaveURL(/demowebshop.tricentis.com/)
    const logo1= page.locator("[alt='Tricentis Demo Web Shop']")
    await expect.soft(logo1).toBeVisible()
    
    console.log("This line will be executed even if the soft assertion fails")
})