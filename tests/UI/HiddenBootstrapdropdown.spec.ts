import { expect, test } from "@playwright/test";

test("Hidden bootstrap dropdown @HiddenBootstrap", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole("button", { name: 'Login' }).click();
    await page.getByText('PIM').click()

    //click on job title dropdown
    await page.locator('form i').nth(2).click()

    await page.waitForTimeout(2000)
    //get all options
    const options = page.locator('div[role="listbox"] span')
    console.log("no of option is =" + await options.count())
    //print all the options
    for (let i = 0; i < await options.count(); i++) {
        const text = await options.nth(i).textContent();
        console.log(i + 'th option is =' + text)
    }

    //click/select an option

    for (let i = 0; i < await options.count(); i++) {
        const text = await options.nth(i).textContent();
        if (text === 'QA Lead') {
            await options.nth(i).click();
            console.log(i + 'th option is selected which is =' + text)
            break;
            
        }

        
    }

})