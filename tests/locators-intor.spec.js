import { test } from "@playwright/test";

test("Locators test", async({ page }) => {
    await page.goto("https://www.google.com");
    let searchBox = page.locator("//textarea[@id='ti6dpd']");
    await searchBox.fill("Apple");
    await searchBox.press("Enter");
    await page.waitForTimeout(5000);
});