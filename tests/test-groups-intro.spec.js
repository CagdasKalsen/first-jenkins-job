import { test } from "@playwright/test";
test.describe("US-01 Test", () => {
    test.beforeAll(async() => {
        console.log("Before All is runnning once");
    });

    test.afterAll(async() => {
        console.log("After All is runnning once");
    });

    test.beforeEach(async() => {
        console.log("Before Each test case");
    });

    test.afterEach(async() => {
        console.log("After  Each test case");
    });

    test("Test Case 1", async({ page }) => {});

    test("Test Case 2", async({ page }) => {});

    test("Test Case 3", async({ page }) => {});
});