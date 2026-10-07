import { Given, When, Then } from '@cucumber/cucumber';

Given('que o usuário está na página de cadastro de login', async function () {
    await this.loginPage.page.goto('/cadastrarusuarios');
});