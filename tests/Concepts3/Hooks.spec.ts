import { test } from '@playwright/test';
import { beforeEach } from 'node:test';
// This for Hooks concept
test.beforeEach("Before each hook", async () => {
    console.log("This is before each hook")
})
test.afterEach("After each hook", async () => {
    console.log("This is after each hook")
})
test.beforeAll("Before all hook", async () => {
    console.log("This is before all hook")
})  
test.afterAll("After all hook", async () => {
    console.log("This is after all hook")
})
    test("Test 1", () => {
        
        console.log("This is  Group 1 Test 1")
    })
    test("Test 2", () => {
        console.log("This is Group 1 Test 2")
    })

    test("Test 3", () => {
        console.log("This is Test 3")
    })
    test("Test 4", () => {
        console.log("This is Test 4")
    })
