import { test } from '@playwright/test';
// This for grouping concept
test.describe("Group1", async () => {
    test("Test 1", () => {
        console.log("This is  Group 1 Test 1")
    })
    test("Test 2", () => {
        console.log("This is Group 1 Test 2")
    })
})
test.describe("Group2", async () => {
    test("Test 3", () => {
        console.log("This is Test 3")
    })
    test("Test 4", () => {
        console.log("This is Test 4")
    })
})