# 🧪 Projeto de Testes Automatizados com Cypress - API de Usuários


## 📂 Instalação

1. Clone este repositório:

```bash
git clone https://github.com/Ricardobarbosa999/helpdesk-api-cypress.git
```

2. Entre na pasta do projeto:

```bash
cd helpdesk-api-cypress
```

3. Instale as dependências:

```bash
npm install
```

---

## ⚙️ Configuração

No arquivo `cypress.config.js` ou em `cypress.env.json` configure a URL base da API:

```json
{
  "baseUrl": "http://localhost:3000"
}
```

---

## ▶️ Executando os testes

### Modo interativo (abre o Test Runner do Cypress)

```bash
npx cypress open
```

### Modo headless (linha de comando)

```bash
npx cypress run
```

---


## Surgestões 

**Campos em Branco Não Tratados**

**Situação:** Alguns campos obrigatórios, quando enviados em branco, não retornam mensagem de erro ou validação adequada pela API.  

**Abordagem nos Testes:** Foram criados cenários específicos para tentar criar ou atualizar registros com campos vazios.  
As respostas retornadas pela API são registradas e analisadas, servindo como base para uma futura implementação de validações adequadas.

**Exemplo:**  
Na API de *users*, ao solicitar um UPDATE com campos em branco, a resposta retornada é *"campos alterados com sucesso"*.  
Nesse caso, o comportamento esperado seria retornar um **HTTP 400 (Bad Request)**, indicando que os dados enviados são inválidos.

**Autenticação e Autorização**  
  Implementar JWT para controlar acesso aos endpoints, evitando consultas não autorizadas.

**Teste de Performance**

Por se tratar de uma API de tickets, é altamente recomendável a execução de testes de carga e desempenho.  
Isso garantirá que, mesmo sob um alto volume de requisições simultâneas, o sistema mantenha estabilidade,  
resposta rápida e integridade dos dados, evitando falhas ou degradação no serviço.

---


