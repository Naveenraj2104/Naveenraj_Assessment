import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage.js";

test("Validate Homepage UI Elements", async ({ page }) => {
  const home = new HomePage(page);
  await home.goto("https://play.79club8.club/");
  await expect(await home.isHomeLoaded()).toBeTruthy();
  await expect(page.locator(".banner-section")).toBeVisible();
  await expect(page).toHaveTitle(/Club|Game|Casino/i);
});
