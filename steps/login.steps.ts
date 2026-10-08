import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('que o usuário está na página de cadastro de login', 
    async function (this: CustomWorld): Promise<void> {
});

When('o usuário preenche os campos de cadastro',
    async function (this: CustomWorld): Promise<void> {
    await this.loginPage.cadastrarUsuario();
});

Then('o usuário deve ser cadastrado com sucesso',
    async function (this: CustomWorld): Promise<void> {
    await this.loginPage.validarCadastro();
});