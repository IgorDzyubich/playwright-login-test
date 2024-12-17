import { Page, Locator } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly path: string;
  readonly inputUserName: Locator;
  readonly inputPassword: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.path = '/admin';
    this.inputUserName = page.locator('#email');
    this.inputPassword = page.locator('#pass');
    this.signInButton = page.locator('[name="login"]');
    this.errorMessage = page.getByText('The password you entered is incorrect.');
  }

  async launchApp(url: any) {
    await this.page.goto(url);
  }

  async login(userName: string, password: string): Promise<void> {
    await this.inputUserName.fill(userName);
    await this.inputPassword.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
