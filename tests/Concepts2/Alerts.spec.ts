import {test, Locator,expect} from '@playwright/test'

test("Alert dialog @alerts", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)
     page.on('dialog',(alert)=>{
        console.log("Dialog type is: ", alert.type())
        expect(alert.type()).toContain('alert')
        console.log("dialog text is :",alert.message())
        alert.accept()})
    await page.getByRole("button",{name:'Simple Alert'}).click();
})
test("Confirm type of dialog dialog @alerts", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)
     page.on('dialog',(alert)=>{
        console.log("Dialog type is: ", alert.type())
        expect(alert.type()).toContain('confirm')
        console.log("dialog text is :",alert.message())
        //alert.accept()  close the dialog by accepting
        alert.dismiss()  // close the dialog by canceling
    })
    await page.getByRole("button",{name:'Confirmation Alert'}).click();
    await page.locator('p#demo').innerText().then((text)=>{
        console.log("Text after canceling the confirm dialog: ",text)
        expect(text).toContain('You pressed Cancel')
    })
})
    
test.only("Prompt type of dialog dialog @alerts", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000) 
    //now  enter some value in the prompt dialog
    
    page.on('dialog',(prompt)=>{
        console.log("Dialog type is: ", prompt.type())
        expect(prompt.type()).toContain('prompt')
        console.log("dialog text is :",prompt.message())
        console.log(prompt.defaultValue())// displays the default value in the prompt dialog
        expect(prompt.defaultValue()).toContain('Harry Potter')

        prompt.accept("John")  // close the dialog by accepting with value
    })
    await page.getByRole("button",{name:'Prompt Alert'}).click();
    await page.locator('p#demo').innerText().then((text)=>{
        console.log("Text after canceling the confirm dialog: ",text)
        expect(text).toContain('Hello John! How are you today?')
    })
})