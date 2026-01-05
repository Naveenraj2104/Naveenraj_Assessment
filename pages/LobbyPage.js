export class LobbyPage {
  constructor(page) {
    this.page = page;
    this.gameCard = '(//div[contains(@class,"game-item")])[1]'; // first game
  }

  async enterFirstGame() {
    await this.page.click(this.gameCard);
  }
}
