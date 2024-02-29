# Teste Técnico - Desenvolvedor Backend

### Como Rodar o Projeto

**Em Docker**

1. Adicionar variáveis ao arquivo de ambiente `.env`.

2. No Windows:

   ```
   docker-compose up --build
   ```

   No Linux e Mac:

   ```
   sudo docker-compose up --build
   ```

3. Pronto para receber requisições nas rotas:
   ```javascript
   // Exemplo de rota: http://localhost:3000/clients
   ```

**Como Testar no Docker**

1. Já tendo rodado no Docker pelo menos uma vez com sucesso:

   No Windows:

   ```
   docker-compose run nestjs npm run test
   ```

   No Linux e Mac:

   ```
   sudo docker-compose run nestjs npm run test
   ```

**Sem Docker**

1. Adicionar variáveis ao arquivo de ambiente `.env` da base de dados e porta do projeto.

2. Rodar:

   ```
   npm install
   ```

3. Rodar:

   ```
   npx prisma migrate dev
   ```

4. Rodar:
   ```
   npm run start
   ```

**Como Testar Sem Docker**

1. Rodar:
   ```
   npm run test
   ```

### Rotas da API

#### Clientes

- **Criar Cliente**

  - Método: POST
  - URL: `http://localhost:3000/clients`
  - Corpo da Requisição:
    ```json
    {
      "name": "Maria Costa"
    }
    ```

- **Atualizar Cliente**

  - Método: PUT
  - URL: `http://localhost:3000/clients/838be892-8ef5-4290-9225`
  - Corpo da Requisição:
    ```json
    {
      "name": "Tulumba Cori"
    }
    ```

- **Buscar Cliente**

  - Método: GET
  - URL: `http://localhost:3000/clients/838be892-8ef5-4`

- **Listar Todos os Clientes**

  - Método: GET
  - URL: `http://localhost:3000/clients`

- **Deletar Cliente**
  - Método: DELETE
  - URL: `http://localhost:3000/clients/6a403dd1-4cc6-45b0-a79b-4c9e9355e238`

#### Produtos

- **Criar Produto**

  - Método: POST
  - URL: `http://localhost:3000/products`
  - Corpo da Requisição:
    ```json
    {
      "name": "Laptop",
      "price": 332
    }
    ```

- **Atualizar Produto**

  - Método: PUT
  - URL: `http://localhost:3000/products/acb1c3d8-3059-4423-bb37-991e1779aaf4`
  - Corpo da Requisição:
    ```json
    {
      "name": "Laptop Asus",
      "price": 1000
    }
    ```

- **Buscar Produto**

  - Método: GET
  - URL: `http://localhost:3000/products/acb1c3d8-3059-4423-bb37-991e1779aaf4`

- **Listar Todos os Produtos**

  - Método: GET
  - URL: `http://localhost:3000/products`

- **Deletar Produto**
  - Método: DELETE
  - URL: `http://localhost:3000/products/ba651988-6230-42a2-b14d-3acd84a09f80`

#### Vendas

- **Efetuar Venda**

  - Método: POST
  - URL: `http://localhost:3000/sales`
  - Corpo da Requisição:
    ```json
    {
      "client_id": "4b151567-cb8f-45ee-ae9f-0d24f434731e",
      "total": 332,
      "products": [
        {
          "id": "acb1c3d8-3059-4423-bb37-991e1779aaf4",
          "name": "Laptop Asus",
          "price": 1000
        },
        {
          "id": "672b9220-536a-4bd7-9d30262f",
          "name": "Laptop",
          "price": 332
        }
      ]
    }
    ```

- **Buscar Venda**

  - Método: GET
  - URL: `http://localhost:3000/sales/696bd077-0b3b-4c49-ad19-5a98833c339d`

- **Listar Todas as Vendas**

  - Método: GET
  - URL: `http://localhost:3000/sales`

- **Deletar Venda**
  - Método: DELETE
  - URL: `http://localhost:3000/sales/696bd077-0b3b-4c49-ad19-5a98833c339d`

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
