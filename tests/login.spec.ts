import { test, expect } from "../utilities/fixture";

test.describe('Login Page Tests',{
  tag: ['@login', '@smoke'],
}, () => {
  test.describe('Check that the user can login with valid credentials', () => {
    test('Check that password field has type "password"',
      { tag: ['@login', '@smoke'] },
      async ({loginPage}) => {
        const passwordFieldType = await loginPage.inputPassword.getAttribute('type');
    
        expect(passwordFieldType).toBe('password');
      },
    );

    test('Check successful login with valid credentials',
      { tag: ['@login', '@smoke'] },
      async ({loginPage, homePage}) => {
        await loginPage.login(process.env.USEREMAIL as string, process.env.PASSWORD as string);
    
        await expect(homePage.homePageMainBlock).toBeVisible();
      },
    );
  });

  test('The user can not log in with invalid password', 
    { tag: ['@login', '@smoke'] },
    async ({loginPage}) => {
      await loginPage.login(process.env.USEREMAIL as string,'invalidPassword');
    
      await expect(loginPage.errorMessage).toBeVisible();
    }
  );
});
