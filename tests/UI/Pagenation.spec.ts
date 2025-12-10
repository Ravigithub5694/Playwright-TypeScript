import { expect, test, Locator } from "@playwright/test";


test("Pagenation reading the data from all the pages in table @Pagination", async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html')

    // page is there or not in table declare one variable
    let hasMorePages = true;
    // Page number & rows inside the page are dynamic




    while (hasMorePages) { //if next button is enabled then go and print the rows if not there is no page exist
        //read each row and print
        const rows: Locator[] = await page.locator('table#example tbody tr').all()// get rows of table

        for (let row of rows) {
            const rowText = await row.innerText();
            console.log(rowText)
        }
        await page.waitForTimeout(2000)
        //get the next button and check if its disbaled by getting atribute
        const nextButton = page.locator("button[aria-label='Next']")
        const isDisabled = await nextButton.getAttribute('class')
        if (isDisabled?.includes('disabled')) {
            hasMorePages = false;

        } else {
            await nextButton.click()
        }


    }

})

test("Filter the row count and verify if row count is correct", async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html')

    const filerDropdown: Locator = page.locator('#dt-length-0')
    await filerDropdown.selectOption({ label: '25' })
    const rows: Locator[] = await page.locator('#example tbody tr').all()
    expect(rows.length).toBe(25)
    const rowss: Locator = await page.locator('#example tbody tr')
    expect(rowss).toHaveCount(25)


})
test.only("Search for specific data in all pages", async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html')
    const searchBox: Locator = await page.locator('#dt-search-0')
    await searchBox.fill("Paul Byrd")
    const rows: Locator[] = await page.locator('#example tbody tr').all()
    if (rows.length > 0) {
        let matchFound = false;
        for (const row of rows) {
            const text = await row.innerText()
            if (text.includes('Paul Byrd')) {
                console.log("Match found")
                matchFound = true;
                break;
            }
        }
        expect(matchFound).toBeTruthy()


    } else {
        console.log("No rows found with search value")
    }

})
