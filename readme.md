# Teste Técnico - Desenvolvedor Backend

Este teste tem como objetivo avaliar suas habilidades em desenvolvimento backend, utilizando o NestJS, Prisma (ou algum ORM/gerenciador de banco de dados de sua escolha) e Docker (opcional).

## Instruções:

1. Clone este repositório para o seu ambiente de desenvolvimento local.
2. Complete as tarefas listadas abaixo.
3. Crie um novo repositório público no GitHub e envie o link do seu repositório completo para avaliação.

## Tarefas:

### 1. Configuração inicial

- Configure um projeto NestJS.
- Escolha e integre um gerenciador de banco de dados de sua escolha (Prisma, TypeORM, Sequelize, etc.).
- (Opcional) Configure o projeto para ser executado em contêineres Docker.

### 2. Modelagem de Dados

- Modele os dados necessários para uma aplicação de gestão.
- Considere entidades como:
    - Clientes(nome), 
    - Vendas(cliente, produtos, data, total)
    - Produtos(nome, preço)

### 3. Desenvolvimento do Backend

- Implemente os endpoints de uma API RESTful para um sistema de gestão, incluindo pelo menos as seguintes operações:
    - CRUD(Create, Read, Update, Delete) de clientes
    - CRUD(Create, Read, Update, Delete) de produtos
    - Efectuar uma venda
- Utilize o padrão de desenvolvimento DDD (Domain-Driven Design) para organizar sua aplicação (opcional).

### 4. Testes Unitários (opcional)

- Escreva testes unitários para as operações CRUD implementadas.
- Utilize ferramentas como Jest para escrever e executar os testes.

### 5. Dockerização (opcional)

- (Opcional) Configure seu projeto para ser executado em contêineres Docker.
- Crie um Dockerfile para empacotar sua aplicação backend.

## Critérios de Avaliação:

- **Configuração Inicial:** Adequação das tecnologias escolhidas e configuração correta do projeto.
- **Modelagem de Dados:** Correta modelagem das entidades e relacionamentos necessários para a aplicação.
- **Desenvolvimento:** Implementação correta das operações para as entidades.
- **Testes Unitários (opcional):** Cobertura adequada dos testes unitários para garantir a robustez da aplicação.
- **Dockerização (opcional):** Configuração correta do projeto para ser executado em contêineres Docker, se aplicável.
