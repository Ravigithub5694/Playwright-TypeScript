import {test} from '@playwright/test';
//This is for tagging concept

//  To run both Sanity & regression 
// // -g "(?=.*sanity)(?=.*@regression)""
//To run sanity or regression
// -g "(@sanity|| @regression)"
//To run only sanity but not regression
// -g "@sanity" --grep-invert "@regression
// To run tests other than sanity
// --grep-invert "@sanity"

test('@smoke @sanity title tetsing',async ()=>{
    console.log("This is smoke test - title testing")
})

test(' url testing',{tag:'@regression'},async ()=>{
    console.log("This is regression test - url testing")
})  
test(' Another test 4',{tag:['@regression','@sanity']},async ()=>{
    console.log("This is test 3 sanity & regression")
})  
