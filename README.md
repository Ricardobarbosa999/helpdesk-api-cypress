#  Testes Automatizados com Cypress - Helpdesk API  

Este repositório contém testes automatizados para validar a **API de Usuários e Tickets** de um sistema de Helpdesk.  
Os testes foram desenvolvidos com **Cypress** e cobrem cenários de **validação, autenticação e autorização**.  

 **API de Serviço utilizada nos testes:** [Helpdesk API](https://github.com/Ricardobarbosa999/helpdesk-api)  

---

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/Ricardobarbosa999/helpdesk-api-cypress.git
```

2. Acesse a pasta do projeto:

```bash
cd helpdesk-api-cypress
```

3. Instale as dependências:

```bash
npm install
```

---

## Configuração

No arquivo `cypress.config.js` ou `cypress.env.json`, configure a URL base da API:  

```json
{
  "baseUrl": "http://localhost:3000"
}
```

> ⚠️ Antes de executar os testes, certifique-se de que a [Helpdesk API](https://github.com/Ricardobarbosa999/helpdesk-api) esteja rodando.  

---

##  Executando os Testes

### Modo interativo (abre o Test Runner do Cypress):

```bash
npx cypress open
```

### Modo headless (linha de comando):

```bash
npx cypress run
```

---

## 📁 Estrutura do Projeto

```
helpdesk-api-cypress
│── cypress
│   ├── e2e        # Cenários de testes (specs)
│   ├── fixtures   # Massa de dados (JSONs para testes)
│   ├── support    # Comandos e configurações globais
│── cypress.config.js  # Configurações do Cypress
│── package.json       # Dependências e scripts do projeto
```

---

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) – Framework de testes E2E e API  
- [Node.js](https://nodejs.org/) – Ambiente de execução  
- [npm](https://www.npmjs.com/) – Gerenciador de pacotes  

---

📌 **Autor:** Ricardo Barbosa  
🔗 GitHub: [Ricardobarbosa999](https://github.com/Ricardobarbosa999)  
