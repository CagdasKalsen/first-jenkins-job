import { test, expect } from "@playwright/test";

test.describe("Assertions practice", () => {
    test.beforeEach(async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
    });

    test("Verify that there are exactly 81 link elements withinn the <ul> tag ", async({ page }) => {
        let allLinks = page.locator('a')

    });


});