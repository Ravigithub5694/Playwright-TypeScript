import {test,expect} from '@playwright/test';
// This is Auto waiting concepts
test("Auto waiting concepts @Autowait", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    
    //Hard assertion - Playwright auto waits for the element to be visible
    //Non retrying assertions- if the element is not visible, it will fail immediately
    expect(page).toHaveTitle("Demo Web Shop")
    expect(page).toHaveURL(/demowebshop.tricentis.com/)
    //Auto retrying assertions- Playwright will retry until the element is visible or timeout occurs
    await expect(page.getByText("Welcome to our store")).toBeVisible()
    
})