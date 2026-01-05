export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = 'input[placeholder="Phone Number"]';
    this.password = 'input[placeholder="Password"]';
    this.loginBtn = 'button:has-text("Login")';
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
}
