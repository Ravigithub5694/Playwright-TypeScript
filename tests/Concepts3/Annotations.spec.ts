import {test} from '@playwright/test';
// This is for Annotations concept

test('test1',async ()=>{
    console.log("This is test 1")
})

test('test2',async ()=>{
    console.log("This is test 2")
})  
test.skip('test3',async ()=>{
    console.log("This is test 3")
})  
//skip based on condition
 
test('test4',async ({browserName})=>{
    test.skip(browserName === 'chromium', 'Skipping on Chromium browser');
    console.log("This is test 4")
})
//fail the test
test.fail('test5',async ()=>{
    console.log("This is failed test 5")
})
//fixme
test.fixme('test6',async ()=>{
    console.log("This is test 6")
})

//Slow test
test('test7',async ()=>{
    test.slow()
    console.log("This is test 7")
})  