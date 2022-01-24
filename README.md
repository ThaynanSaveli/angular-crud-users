# Angular Candidates CRUD

## 💻 Projeto
Este projeto foi desenvolvido como desafio prático de um processo seletivo.

## ✨ Tecnologias
- [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.
- [Material UI - Angular](https://material.angular.io/)
- [Typescript](https://www.typescriptlang.org/)

## 🚀 Como executar

- Clone o repositório
- Execute o comando `npm install` para instalar as dependências
- Execute o comando `ng serve --host 0.0.0.0 --port 7070` para iniciar a aplicação.
- A aplicação será executada no endereço http://localhost:7070
- Fazer Login com o usuário: teste@gmail.com e senha: 123 para autenticar e recuperar o token do usuário.

## ⌨️ Casos de teste
- Caso o usuário citado acima tenha sido removido, acesse a rota http://localhost:7070/add-candidate e crie um usuário.
- Após o usuário ser criado, você será redirecionado para a tela de listagem de candidatos. Clique em sair para fazer o login ou acesse http://localhost:7070/login 
- Faça o login e teste todas as funções do sistema (Listar, Criar, Remover e Editar um candidato).
