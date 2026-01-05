import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";

test("Verify Login Functionality", async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  await login.goto("https://play.79club8.club/");
  await login.login("testuser", "testpass");

  await expect(await home.isHomeLoaded()).toBeTruthy();
});
