### NPS Application (API)
<br/>

<p align="center">

  <img alt="Backend" src="https://img.shields.io/badge/Back--End-TypeScript-blue" />

  <img alt="Architecture" src="https://img.shields.io/badge/Architecture-DDD%20%26%20Clean%20architecture-brightgreen" />

  <img alt="SQL" src="https://img.shields.io/badge/SQL-PosgreSQL-blue" />

  <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />

</p>

## Description

> API para aplicação NPS, com o objetivo de criar transações de avaliações do cliente/colaborador/loja, desenvolvida usando como base uma arquitetura bem definida e desacoplada, utilizando Jest para testes integrados, Clean Architecture para fazer a distribuição de responsabilidades em camadas, seguindo os princípios do SOLID e aplicando Design Patterns.
<br />

### Instalação dos pacotes :wrench:

> yarn install

### Rodar a aplicação :fast_forward:

> docker-compose up

## Verificar documentação da API (OpenAPI):

> http://localhost:3000/api-docs
<br />

> ![alt text](./documentation/open-api/swagger-nps.gif)

<br /><br/>

> ### Diagrama de modelagem do banco de dados :page_facing_up:
>
> ![alt text](./documentation/img/diagram.png)

<br />

> ## Arquitetura da API:
> ![alt text](./documentation/img/clean-architecture.jpg)

<br />

> ### Verifique o slug url da entidade para atualização, remoção/desativação:

> ![alt text](./documentation/insomnia/img/slug-urls-environment.jpg)

<br />

> ### Exemplo da URL de transação:

> ![alt text](./documentation/insomnia/img/transaction-example-slugs-url.jpg)

<br />

> ## testes

- ###### Para executar todos os testes: yarn test:ci

> ![alt text](./documentation/jest/gif/test-coverage.gif)

<br />

- ###### Para executar somente um teste: yarn test:verbose caminho_do_arquivo

> ![alt text](./documentation/jest/img/unit-test.png)


> ## Princípios :books:

- Single Responsibility
- Open Closed
- Liskov Substitution
- Dependency Inversion
- Don't Repeat Yourself
- You Aren't Gonna Need It
- Keep It Simple
- Small Commits

> ## Design Patterns :triangular_ruler:

- Factory
- Adapter
- Decorator
- Command
- Dependency Injection
- Singleton
- Proxy
- Middlewares

> ## Metodologias e Designs :pencil2:

- Clean Architecture
- Use Cases

> ## Bibliotecas e Ferramentas :wrench:

- Yarn
- Typescript
- Swagger
- Git
- Jest
- TypeORM
- UUID
- Postgres
- Husky
- Lint Staged
- Eslint
- DotEnv
- Joi
- Faker
- Rand-Token

> ## Features do Typescript :computer:

- POO Avançado
- Interface
- Modularização de Paths
- Configurações

> ## Features de Testes :mag_right:

- Testes de Integração
- Cobertura de Testes
- Fakes
