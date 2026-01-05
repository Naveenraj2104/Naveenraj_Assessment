export class GamePage {
  constructor(page) {
    this.page = page;
    this.statBtn = "text=History";
  }

  async openHistory() {
    await this.page.click(this.statBtn);
  }
}
