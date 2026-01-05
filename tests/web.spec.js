import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/LandingPage.js";
import { RegisterPage } from "../pages/RegisterPage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { LobbyPage } from "../pages/LobbyPage.js";
import { GamePage } from "../pages/GamePage.js";

async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
await wait(2000);

test("WEB: Registration → Login → Enter Lobby → Open Game → Check History", async ({
  page,
}) => {
  const landing = new LandingPage(page);
  const register = new RegisterPage(page);
  const login = new LoginPage(page);
  const lobby = new LobbyPage(page);
  const game = new GamePage(page);

  await landing.open();
  await landing.clickPlayWeb();

  // REGISTER NEW USER
  const user = "zara01";
  const password = "z12345";
  await register.register(user, password);

  // LOGIN
  await login.login(user, password);

  // ENTER GAME LOBBY
  await expect(page).toHaveURL(/lobby/i);
  await lobby.enterFirstGame();

  // GAME ACTION
  await game.openHistory();
  await expect(page.locator("text=History")).toBeVisible();
});
