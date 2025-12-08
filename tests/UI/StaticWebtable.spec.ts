import { expect, test,Locator } from "@playwright/test";


test("Static Web table handling @statictable", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
     const table:Locator= page.locator('table[name="BookTable"] tbody')
     expect(table.isVisible()).toBeTruthy()
     // count the rows in the static table

    //const rows:Locator= page.locator('table[name="BookTable"] tbody tr')
    const rows: Locator = table.locator('tr')
     await expect(rows).toHaveCount(7)
     console.log("Table rows count = "+await rows.count())
     // 2. get the number of columns
     const columns:Locator= rows.locator('th')
     console.log("column header count is ="+await columns.count())
     expect(await columns.count()).toBe(4)
    // 3.Read all data from specifc row ex:2
    //const rowcontent=await rows.nth(2).locator('td').allTextContents()
    const rowcontent:string[]=await rows.nth(2).locator('td').allInnerTexts()
    console.log("2nd row content is "+ rowcontent)

    // 4. Extract data from all rows
     const allRows:Locator[] = await rows.all()
     for (const row of allRows.slice(1)){// skips the 1st row which is header
       const cols= await row.locator('td').allInnerTexts();
       console.log(cols)
       console.log(cols.join('\t'))
     }
     
    //5. Print the Book names where Author is Mukesh
    console.log("Books with Mukesh Aithor")
    const muskeshBooks:String[] =[];
   for (const row of allRows.slice(1)){// skips the 1st row which is header
       const cells= await row.locator('td').allInnerTexts();
       const Author =  cells[1]
       const book = cells[0]
       if(Author === 'Mukesh'){
        console.log(`${Author} \t ${book}`)
        muskeshBooks.push(book)
       }
     }
     expect(muskeshBooks).toHaveLength(2)

     //6. Calculate the price of the all the books
      console.log("Books with Mukesh Aithor")
   let TotalPrice =0;
   for (const row of allRows.slice(1)){// skips the 1st row which is header
       const cells= await row.locator('td').allInnerTexts();
       const price =  Number(cells[3])
       //const price = parseInt(cells[3])
       console.log(price)
       TotalPrice = TotalPrice+ price;
       
     }
     console.log("Total price of books is = "+TotalPrice)
     expect(TotalPrice).toBe(7100)

} )