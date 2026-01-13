import { test } from "@playwright/test";
// This is for parallel testing concept
test.describe.configure({ mode: 'parallel' });
test('test1',async ()=>{
    console.log("This is test 1")
})

test('test2',async ()=>{
    console.log("This is test 2")
})  
test('test3',async ()=>{
    console.log("This is test 3")
})  
 
test('test4',async ({browserName})=>{
   
    console.log("This is test 4")
})

test('test5',async ()=>{
    console.log("This is failed test 5")
})