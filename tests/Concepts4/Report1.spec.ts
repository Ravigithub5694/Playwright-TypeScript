import {test} from '@playwright/test';
// This for Reporter conepts
test.beforeEach('Launching Logo',async ({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
});
test('Checking title',async ({page})=>{
    await test.expect(page).toHaveTitle(/Demo Web Shop/);
});
test('Searching books',async ({page})=>{
    await page.locator('#small-searchterms').fill('books');
    await page.locator('input[value="Search"]').click();
    const count = await page.locator('.product-item').count();
    console.log(`Total books are: ${count}`);
    for(let i=0;i<count;i++){
        console.log( await page.locator('.product-item').nth(i).locator('h2').innerText());
    }
});
