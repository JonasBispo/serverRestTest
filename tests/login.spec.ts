import { test, expect } from '../fixtures/test';

test('cadastro de usuário', async ({ loginPage }) => {
    await loginPage.cadastrarUsuario();
    await expect(await loginPage.validarCadastro()).toBe('Cadastro realizado com sucesso');
});

test('cadastro de usuário duplicado', async ({ loginPage }) => {
    await loginPage.cadastrarUsuario();
    await expect(await loginPage.validarCadastro()).toBe('Cadastro realizado com sucesso');
    await loginPage.cadastrarUsuarioDuplicado();
    const msgError = await loginPage.validarCadastroDuplicado();
    await expect(msgError).toBe('Este email já está sendo usado');
});