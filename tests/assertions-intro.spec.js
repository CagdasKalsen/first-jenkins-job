import { test, expect } from "@playwright/test";

test.describe("Assertions practice", () => {
    test.beforeEach(async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
    });

    test("Verify checkboxes are checked ", async({ page }) => {
        await page.getByText("Checkboxes").click();
        let firstCheckBox = page.locator('input[type="checkbox"]').nth(0);
        let secondCheckBox = page.locator('input[type="checkbox"]').nth(1);

        await firstCheckBox.check();
        await secondCheckBox.check();

        await expect(firstCheckBox).toBeChecked();
        await expect(secondCheckBox).toBeChecked();
    });

    test("Verify checkboxes are unchecked ", async({ page }) => {
        await page.getByText("Checkboxes").click();
        let firstCheckBox = page.locator('input[type="checkbox"]').nth(0);
        let secondCheckBox = page.locator('input[type="checkbox"]').nth(1);

        await firstCheckBox.uncheck();
        await secondCheckBox.uncheck();

        await expect(firstCheckBox).not.toBeChecked();
        await expect(secondCheckBox).not.toBeChecked();
    });

    // test("Verify text of element ", async({ page }) => {});
});