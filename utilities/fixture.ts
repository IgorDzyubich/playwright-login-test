import { test as base, expect } from "@playwright/test";
import HomePage from "../page-objects/home.page";
import LoginPage from "../page-objects/login.page"

type pageObject = {
  homePage: HomePage;
  loginPage: LoginPage;
};

const test = base.extend<pageObject>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.launchApp(process.env.URL as string);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { test, expect };
