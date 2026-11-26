import { test } from "@playwright/test";
test.describe("US-01 Test", () => {
    test.beforeEach(async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    });

    test("Regular alert", async({ page }) => {
        page.on("dialog", async(alert) => {
            await alert.accept();
        });

        let alertButton = page.locator("//button[@onclick='jsAlert()']");
        await alertButton.click();
        await page.waitForTimeout(3000);
    });

    test("Confirmation alert", async({ page }) => {
        page.on("dialog", async(alert) => {
            await alert.dismiss();
        });

        let alertButton = page.locator("//button[@onclick='jsConfirm()']");
        await alertButton.click();
        await page.waitForTimeout(3000);
    });

    test("Prompt alert", async({ page }) => {
        page.on("dialog", async(alert) => {
            await alert.accept("CYDEO");
        });

        let alertButton = page.locator("//button[@onclick='jsPrompt()']");
        await alertButton.click();
        await page.waitForTimeout(3000);
    });
});