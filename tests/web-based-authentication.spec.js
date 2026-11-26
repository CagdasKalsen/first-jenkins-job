import { test, expect } from "@playwright/test";

test("Web based authentication by encoding the credentials base64 format.", async({
    page,
}) => {
    let encodedCredential = Buffer.from("admin:admin").toString("base64");
    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${encodedCredential}`,
    });

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);
});