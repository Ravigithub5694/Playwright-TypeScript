import { expect, test, Locator } from "@playwright/test";


test("Static Web table handling @Blaze", async ({ page }) => {
    await page.goto('https://blazedemo.com/')
    //select the departurecity
    const departurecity: Locator = page.locator("[name='fromPort']")
    //select the city
    await departurecity.selectOption("Mexico City")
    const toCity: Locator = page.locator("[name='toPort']")
    await toCity.selectOption('New York')
    await page.getByRole("button", { name: 'Find Flights' }).click();// click on Find flights button
    await page.waitForTimeout(2000)
    //Now get the prrice of all flights and sort them and find the lowest price and chose the flight
    //first get the price list
    const allPrices:String[]= await page.locator('.table tbody tr td:last-of-type').allTextContents()
       const price:number[]=  allPrices.map(s=>parseInt( s.split('$')[1]))
       const sortedPrice=  price.sort();
       console.log(sortedPrice)
       //await page.pause()
     const rows: Locator[] = await page.locator('.table tbody tr').all();
    for (let row of rows) {
        const actualPrice= await row.locator('td').filter({hasText:'$'}).innerText()
        const lowestPrice = parseInt(actualPrice.split('$')[1].split('.')[0])
        if(lowestPrice=== sortedPrice[0]){
            console.log("Lowest price ="+lowestPrice)
            //await row.getByRole("button",{name:"Chosse This Flight"}).click()
            await row.locator('input.btn-small').click()
            break;
        }
    }
    await page.waitForTimeout(2000)
    //verify flight filling form is opened or not
    await  expect( page.getByRole("heading",{name:'Your flight from TLV to SFO has been reserved.'})).toBeVisible()
    //Now fill the form
    await page.getByPlaceholder('First Last').fill("Ravi") //name
    await page.locator("#address").fill("Kondapur") //Address
    await page.getByPlaceholder("Anytown").fill("Hyderabad") //City
    await page.getByPlaceholder('State').fill("Telangana")//state
    await page.locator("#zipCode").fill("500000")// pincode
    await page.locator("#cardType").selectOption('American Express')// Card type
    await page.locator("#creditCardNumber").fill("123456789")
    await page.getByPlaceholder("Month").fill("12")
    await page.getByPlaceholder("Year").fill("2026")
    await page.locator("#nameOnCard").fill("Ravi Kumar")
    await page.getByRole("button",{name:"Purchase Flight"}).click()
    await page.waitForLoadState()
    await expect(page.getByRole("heading",{name:'Thank you for your purchase today!'})).toBeVisible()
    await console.log("Succesfully Booked the flight")



})