import {test,Page, expect} from '@playwright/test';
// This is for Hooks concept
// Open the app , login , find the number of products and logout
//Again login and add product ro cart and logout and close the application
//Open the application
let page:Page
test.beforeAll("Open the application",async ({browser})=>{
    page = await browser.newPage()
    await page.goto("https://www.demoblaze.com/")
})

test.afterAll("Close the application", async()=>{
    await page.close()
})

test.beforeEach("Login to Application", async()=>{
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.getByRole("button", {name:"Log in"}).click();
    await page.waitForTimeout(2000)
 })
 test.afterEach("Logout from Application", async()=>{
    await page.locator("#logout2").click()
 })
 test.describe("E-commerce Application - Hooks Concept",()=>{
    test("Find the number of products",async ()=>{
    const products = await page.locator("#tbodyid h4.card-title")
    console.log("Number of products available in the home page: " + await products.count())
    await expect(products).toHaveCount(9)
 })
 test("Add product to cart", async()=>{
    await page.getByText("Samsung galaxy s6").first().click() 
    await page.waitForTimeout(2000)
    //handle the popup
    page.on('dialog', async dialog => {
        console.log("Message displayed in the popup is: " + dialog.message());
        await dialog.accept();
    });
    await page.locator(".btn.btn-success.btn-lg").click();
    await page.waitForTimeout(2000)
})
 })
 