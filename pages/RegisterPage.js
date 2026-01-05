export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.username = 'input[placeholder="Phone Number"]';
    this.password = 'input[placeholder="Password"]';
    this.confirmPassword = 'input[placeholder="Confirm Password"]';
    this.registerBtn = 'button:has-text("Register")';
  }

  async register(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.fill(this.confirmPassword, pass);
    await this.page.click(this.registerBtn);
  }
}
