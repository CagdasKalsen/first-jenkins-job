import { test, expect } from "@playwright/test";


test("@env-test USING PLAYWRIGHT.ENV IN SETTING.JSON", async({
    page,
}) => {
    let encodedCredential = Buffer.from(
        `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`,
    ).toString("base64");
    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${encodedCredential}`,
    });

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);
});