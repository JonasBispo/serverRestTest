import { setWorldConstructor, Before, After, World, setDefaultTimeout } from '@cucumber/cucumber';
import { LoginPage } from '../pages/login';
import { Browser, BrowserContext, chromium, selectors, Page} from '@playwright/test';

setDefaultTimeout(30 * 1000); // 30 seconds

export class CustomWorld extends World {
    page!: Page;
    browser!: Browser;
    context!: BrowserContext;
    loginPage!: LoginPage;
}

Before(async function (this: CustomWorld): Promise<void> {
    this.browser = await chromium.launch({ headless: false, channel: 'chrome' });
    this.context = await this.browser.newContext({ baseURL: 'https://front.serverest.dev' });
    this.page = await this.context.newPage() as Page;
    this.loginPage = new LoginPage(this.page);
});

After(async function (this: CustomWorld): Promise<void> {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});

setWorldConstructor(CustomWorld);