export class LandingPage {
  constructor(page) {
    this.page = page;
    this.playWebBtn = "text=Chơi Nhanh Bản Web";
  }

  async open() {
    await this.page.goto("https://play.79club8.club/");
  }

  async clickPlayWeb() {
    await this.page.waitForTimeout(5000);
    await this.page.click(this.playWebBtn);
  }
}
