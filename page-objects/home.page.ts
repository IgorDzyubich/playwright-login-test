import { Page, Locator } from '@playwright/test';

export default class HomePage {
  readonly page: Page;
  readonly homePageMainBlock: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageMainBlock = page.locator('div[role="main"]');
  }
}
