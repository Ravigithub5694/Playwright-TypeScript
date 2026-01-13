import { test, expect } from "@playwright/test"

const loginData: string[][] = [
    ["laura.taylor1234@example.com", "test123", "valid"],
    ["invaliduser@example.com", "test321", "invalid"],
    ["validuser1@example.com", "testxyz", "invalid"],
    ["", "", "invalid"]
];
// This is for parameterization concept using data driven testing approach
for (const [username, password, status] of loginData) {
    test.describe("Login tests with multiple data sets", () => {
        test(`Login test for ${username} and ${password}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator("#Email").fill(username);
            await page.locator("#Password").fill(password);
            await page.locator("input[value='Log in']").click();
            if (status.toLocaleLowerCase() === "valid") {
                //Assert logout link is visible 
                const logout = page.locator("a[href='/logout']")
                await expect(logout).toBeVisible({ timeout: 5000 });
            }else {
                const errorMessaage = page.locator(".validation-summary-errors")
                await expect(errorMessaage).toBeVisible();
            }
        })

    })
}

