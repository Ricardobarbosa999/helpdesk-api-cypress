# 🧪 Projeto de Testes Automatizados com Cypress - API de Usuários

Este projeto contém uma suíte de testes automatizados usando **Cypress** para validar os endpoints de uma API de gerenciamento de usuários (`/users`). Os testes cobrem cenários **positivos** e **negativos** para os métodos **GET, POST, PUT e DELETE**.


## 📂 Instalação

1. Clone este repositório:

```bash
git clone 
```

2. Entre na pasta do projeto:

```bash
cd 
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

## Boas Práticas

- Sempre limpar os dados de teste antes de rodar a suíte (evita conflito de e-mail/nome).
- Validar status codes e estrutura do JSON retornado.
- Separar cenários **positivos** e **negativos** para melhor organização.
- Manter mensagens de erro sincronizadas com a API (para evitar falsos negativos).

---


## Surgestões 

Campos em branco não tratados
Situação: Alguns campos obrigatórios em branco não geram erro.
Como o teste lida:
Testes específicos tentam criar ou atualizar registros com campos vazios. 
Capturamos as respostas da API para análise manual ou futura implementação de validação.

---