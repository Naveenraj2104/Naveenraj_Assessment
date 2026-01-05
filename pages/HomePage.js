import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.banner = ".banner-section";
  }

  async isHomeLoaded() {
    return await this.page.isVisible(this.banner);
  }
}
