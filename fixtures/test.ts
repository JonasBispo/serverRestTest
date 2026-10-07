import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/login';

type Myfixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<Myfixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

export { expect } from '@playwright/test';