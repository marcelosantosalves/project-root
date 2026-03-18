👥 User Management API
Uma API REST robusta e minimalista para cadastro e listagem de usuários, desenvolvida com Node.js e Express. O sistema garante a integridade dos dados através de validações rigorosas de e-mail e segurança de senha.
------------------------------
🚀 Funcionalidades

* Cadastro Seguro: Validação de formato de e-mail e políticas de senha.
* Listagem Dinâmica: Recuperação em tempo real de todos os usuários registrados.
* Feedback Apropriado: Implementação de códigos de status HTTP padronizados.
* Hot Reload: Ambiente de desenvolvimento otimizado com Nodemon.

🛠️ Tecnologias

* Node.js - Runtime JavaScript.
* Express - Framework web rápido e minimalista.
* Nodemon - Monitoramento de arquivos para desenvolvimento.

📦 Instalação e UsoPré-requisitos

* Node.js (v14+)
* npm ou yarn

Passo a Passo

   1. Clone o repositório:
   
   git clone https://github.com
   cd Desafio-2-26-01-2026
   
   2. Instale as dependências:
   
   npm install
   
   3. Inicie o servidor:
   
   # Desenvolvimento
   npm run dev
   # Produção
   npm start
   
   A aplicação estará disponível em http://localhost:3000
   
   
------------------------------
📡 Endpoints da APIUsuários

| Método | Endpoint | Descrição |
|---|---|---|
| GET | / | Página inicial (Boas-vindas) |
| GET | /server | Retorna lista de todos os usuários |
| POST | /server | Cria um novo usuário |

Exemplo de Payload (POST):

{
  "email": "dev@exemplo.com",
  "senha": "strong_password123"
}

Regras de Negócio:

* E-mail: Deve obrigatoriamente conter @.
* Senha: Mínimo de 6 caracteres.

------------------------------
🧪 TestesREST Client (VS Code)

   1. Certifique-se de ter a extensão REST Client instalada.
   2. Abra o arquivo test.http e clique em Send Request.

PowerShell

$body = @{ email = "teste@exemplo.com"; senha = "senha123" } | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri "http://localhost:3000/server" -Body $body -ContentType "application/json"

------------------------------
📁 Estrutura do Projeto

.
├── src/
│   ├── server.js      # Ponto de entrada e rotas
│   └── ...            # Outros arquivos de lógica
├── test.http          # Arquivo de testes rápidos
├── package.json       # Dependências e scripts
└── README.md          # Documentação



