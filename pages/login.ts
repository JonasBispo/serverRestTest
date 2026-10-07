import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    
    private usuario: Locator;
    private email: Locator;
    private senha: Locator;
    private checkbox: Locator;
    private cadastrar: Locator;
    private cadSucess: Locator;
    private cadError: Locator;
    public username: string;
    public emailAddress: string;

    constructor (private page: Page) {
        this.usuario = this.page.getByPlaceholder('Digite seu nome');
        this.email = this.page.getByPlaceholder('Digite seu email')
        this.senha = this.page.getByPlaceholder('Digite sua senha');
        this.checkbox = this.page.getByTestId('checkbox');
        this.cadastrar = this.page.getByRole('button', { name: 'cadastrar' });
        this.cadSucess = this.page.getByRole('link', { name: 'Cadastro realizado com sucesso' });
        this.cadError = this.page.getByText('Este email já está sendo usado');
        this.username = `user${Math.floor(Math.random() * 10000)}`;
        this.emailAddress = `${this.username}@example.com`;
    }

    async cadastrarUsuario(): Promise<void> {
        await this.page.goto('/cadastrarusuarios');
        await this.usuario.fill(this.username);
        await this.email.fill(this.emailAddress);
        await this.senha.fill('123456');
        await this.checkbox.click();
        await this.cadastrar.click();
    }

    async validarCadastro(): Promise<string> {
        await expect(this.cadSucess).toBeVisible();
        const msgSucesso = await this.cadSucess.innerText();
        await expect(this.page).toHaveURL(/home/);
        return msgSucesso;
    }

    async cadastrarUsuarioDuplicado(): Promise<void> {
        await this.page.goto('/cadastrarusuarios');
        await this.usuario.fill(this.username);
        await this.email.fill(this.emailAddress);
        await this.senha.fill('123456');
        await this.checkbox.click();
        await this.cadastrar.click();
    }

    async validarCadastroDuplicado(): Promise<string> {
        await expect(this.cadError).toBeVisible();
        const msgError = await this.cadError.innerText();
        await expect(this.page).toHaveURL(/cadastrarusuarios/);
        return msgError;
    }
}