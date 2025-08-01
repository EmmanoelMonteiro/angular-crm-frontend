# 🚀 Angular CRM Frontend

Este é o frontend da aplicação de gerenciamento de clientes (CRM), desenvolvido com o framework Angular. Ele foi criado para consumir e interagir com a API RESTful `crm_api_clientes`, permitindo que o usuário realize operações CRUD (Criar, Ler, Atualizar, Excluir) de forma simples e intuitiva.

A aplicação segue a estrutura de componentes autônomos (Standalone Components) do Angular, ideal para projetos modernos e didáticos.

## 🎯 Funcionalidades

* **Listar Clientes:** Exibe uma tabela com todos os clientes cadastrados na base de dados.
* **Adicionar Cliente:** Permite o cadastro de um novo cliente através de um formulário.
* **Editar Cliente:** Permite a edição dos dados de um cliente existente.
* **Excluir Cliente:** Exclui permanentemente um cliente da base de dados.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **Angular:** Framework para construção de interfaces de usuário.
* **TypeScript:** Superconjunto do JavaScript, usado para tipagem estática.
* **Bootstrap 5:** Framework CSS para um layout simples e responsivo.
* **Angular CLI:** Ferramenta de linha de comando para inicializar e gerenciar projetos Angular.
* **RxJS:** Biblioteca para programação reativa, utilizada na comunicação assíncrona com a API

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* **Node.js e npm:** Versão 16.x ou superior.
* **Angular CLI:** Instale-o globalmente com `npm install -g @angular/cli.`

## ⚙️ Backend Necessário

Este frontend depende diretamente de um backend em execução. A aplicação foi projetada para se comunicar com a API `crm_api_clientes`.

Para que o frontend funcione corretamente, o backend deve estar em execução na porta padrão `8080`.

🔗 Repositório do Backend: https://github.com/EmmanoelMonteiro/crm_api_clientes.git

Siga as instruções no `README.md` do repositório do backend para configurá-lo e iniciá-lo primeiro.

## 🚀 Como Iniciar a Aplicação

Siga estes passos para configurar e executar o projeto em sua máquina local.

**1. Clone o Repositório**
```bash
git clone https://github.com/EmmanoelMonteiro/angular-crm-frontend.git
cd angular-crm-frontend
```
Observação: Substitua a URL acima pela URL do seu repositório, caso tenha feito um fork.

**2. Instale as Dependências**

Dentro do diretório do projeto, execute o comando para instalar todas as dependências do Node.js:
```bash
npm install
```

**3. Inicie o Servidor de Desenvolvimento**

Execute o comando para iniciar o servidor de desenvolvimento do Angular. O parâmetro `--open` abrirá automaticamente a aplicação em seu navegador padrão.

```bash
ng serve --open
```
O frontend estará disponível em http://localhost:4200.

## 📂 Estrutura do Projeto

A estrutura de pastas principal do projeto Angular é a seguinte:

```
angular-crm-frontend/
└── src/
    └── app/
        ├── components/
        │   ├── client-form/      (Componente para adicionar/editar clientes)
        │   └── client-list/       (Componente para listar clientes)
        ├── models/
        │   └── client.model.ts    (Modelo de dados do cliente)
        ├── services/
        │   └── client.service.ts  (Serviço de comunicação com a API)
        ├── app.component.ts       (Componente principal da aplicação)
        ├── app.config.ts          (Configurações do projeto standalone)
        └── app.routes.ts          (Definição das rotas da aplicação)
```

📚 Links Úteis

* [Documentação Oficial do Angular](https://angular.io/docs)
* [Documentação Oficial do Bootstrap 5](https://getbootstrap.com/docs/)
* [Backend: crm_api_clientes](https://www.google.com/search?q=https://github.com/EmmanoelMonteiro/crm_api_clientes.git)