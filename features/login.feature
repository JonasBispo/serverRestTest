Feature: realizar login

Scenario: cadastro de usuário
    Given que o usuário está na página de cadastro de login
    When o usuário preenche os campos de cadastro
    Then o usuário deve ser cadastrado com sucesso