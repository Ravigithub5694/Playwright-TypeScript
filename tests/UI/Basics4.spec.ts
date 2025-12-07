import { test, expect } from '@playwright/test'

test("locator validations", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill("Ravi kumar");

    console.log(await page.getByPlaceholder("Enter Name").inputValue()) // it returns inuputted value
    //console.log(await page.getByPlaceholder("Enter Name").textContent()) //it doesn't return teh inputted value
    await page.getByRole("radio", { name: "Male", exact: true }).click();
    expect(page.getByRole("radio", { name: "Male", exact: true })).toBeChecked()
    expect(await page.getByRole("radio", { name: "Male", exact: true }).isChecked()).toBe(true)
    //checkboxes
    const days = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday", "Saturday"]
//selectt last 3 check boxes only
// for(const day of days.slice(-3)){
//     await page.getByRole("checkbox", { name: day }).check();
//        await expect(page.getByRole("checkbox", { name: day })).toBeChecked()
// }
//check if first elements not checked
for(const day of days.slice(2)){
    //await expect(page.getByRole("checkbox", { name: day })).not.toBeChecked()
    await page.getByRole('checkbox',{name:day}).check();
    await page.pause();
}

    // for (const day of days) {
    //     await page.getByRole("checkbox", { name: day }).check();
    //     await expect(page.getByRole("checkbox", { name: day })).toBeChecked()
    // }
    //another method using map
    //  const checkboxes=   days.map(index=>  page.getByRole("checkbox",{name:index}))
    //  expect(checkboxes.length).toBe(5)
    //  for(const checkbox of checkboxes){
    //     await checkbox.check();
    //  }
    


})
