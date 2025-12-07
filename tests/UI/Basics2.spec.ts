import {test,Locator, expect} from '@playwright/test'

test("Locator basics",async({page})=>{

        await page.goto("https://demo.nopcommerce.com/")
        //Alt text is used to locate element by image text
        const Logo: Locator = page.getByAltText("nopCommerce demo store")
        await expect(Logo).toBeVisible();
        //getbyText()
        await expect(page.getByText('Featured products')).toBeVisible();
        await expect(page.getByText(/Featured pr/i)).toBeVisible()
        //getbyrole
        //await page.getByRole("link",{name:"Register"}).click();
        //await expect(page.getByRole("heading",{name:/register/i})).toBeVisible()
        console.log("heder is visbisbale)")
        await page.getByPlaceholder("Search store").fill("ravi")
        


})
