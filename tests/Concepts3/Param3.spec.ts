import { test, expect } from "@playwright/test"
import fs from 'fs';
//reading data from Json file
const jsonPath = "testData/data.json"
const loginData: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));



// This is for parameterization concept using data driven testing approach
test.describe("Login tests with multiple data sets", () => {
    for (const {username, password, status} of loginData) {
        test(`Login test for ${username} and ${password}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator("#Email").fill(username);
            await page.locator("#Password").fill(password);
            await page.locator("input[value='Log in']").click();
            if (status.toLocaleLowerCase() === "valid") {
                //Assert logout link is visible 
                const logout = page.locator("a[href='/logout']")
                await expect(logout).toBeVisible({ timeout: 5000 });
            } else {
                const errorMessaage = page.locator(".validation-summary-errors")
                await expect(errorMessaage).toBeVisible();
            }
        })
    }
})




