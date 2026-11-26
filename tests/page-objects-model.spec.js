import { test } from "@playwright/test";

test("Geting the title of the page", async({ page }) => {
    await page.goto("https://www.google.com/");
    let title = await page.title();
    console.log(title);
});

test("Getting the URL of the page", async({ page }) => {
    await page.goto("https://www.google.com/");
    let url = page.url();
    await page.waitForTimeout(3000);
    console.log(url);
});

test("Set the size of view", async({ page }) => {
    await page.goto("https://www.google.com/");
    await page.setViewportSize({
        width: 1850,
        height: 1080,
    });
    await page.waitForTimeout(3000);
});