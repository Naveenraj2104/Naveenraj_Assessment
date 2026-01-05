describe("APP: Login → Lobby → Game → Action", () => {
  it("Mobile App Flow", async () => {
    const usernameField = await $("~Phone Number");
    const passwordField = await $("~Password");
    const loginBtn = await $("~Login");
    await usernameField.setValue("zara01");
    await passwordField.setValue("z12345");
    await loginBtn.click();
    const gameCard = await $("(//android.view.View)[3]");
    await gameCard.click();
    const historyBtn = await $("~History");
    await historyBtn.click();
    expect(await historyBtn.isDisplayed()).toBe(true);
  });
});
