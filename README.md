# API de Empreendimentos de Santa Catarina
## ️ Link Github: https://github.com/Raphanrn/desafio-sctec
## ️ Link vídeo pitch: 

## 📖 Descrição
Esta API RESTful gerencia informações sobre empreendimentos em SC, permitindo cadastro, consulta, edição e remoção. Desenvolvida para o desafio SCTEC - Trilha IA para DEVs.

## ️ Decisões Técnicas e Arquitetura

Em conformidade com as diretrizes do desafio, foram realizadas as seguintes escolhas tecnológicas e arquiteturais para garantir uma solução robusta, escalável e de fácil manutenção:

### 1. Linguagem de Programação
*   **Escolha:** [Node.js](https://nodejs.org/) (JavaScript Runtime)
*   **Justificativa:** Selecionado devido à sua alta performance em operações de I/O (entrada/saída), essencial para APIs que lidam com múltiplas requisições simultâneas. O uso de JavaScript permite unificação da linguagem entre front-end e back-end, além de contar com um ecossistema vasto de pacotes (npm).

### 2. Framework Web
*   **Escolha:** [Express.js](https://expressjs.com/)
*   **Justificativa:** Framework minimalista e não opinativo, padrão da indústria para Node.js. Permite a criação rápida de rotas RESTful, facilita a implementação de middlewares (como validação de JSON) e oferece flexibilidade total para estruturar a aplicação conforme a necessidade do projeto.

### 3. Arquitetura de Software
*   **Padrão Adotado:** **MVC (Model-View-Controller)** adaptado para API (sem a camada de View visual).
*   **Estrutura de Camadas:**
    *   **Routes (`src/routes/`):** Responsável apenas por definir os endpoints (URLs e verbos HTTP) e direcionar as requisições para os controllers adequados.
    *   **Controllers (`src/controllers/`):** Contém a lógica de negócio, recebe as requisições, valida os dados de entrada e coordena a resposta. Atua como intermediário entre a rota e o modelo.
    *   **Models (`src/models/`):** Gerencia o acesso e a estrutura dos dados. Centraliza as regras de manipulação da informação, independentemente de onde ela está armazenada.
*   **Benefícios:** Essa separação de responsabilidades (Separation of Concerns) torna o código mais legível, testável e fácil de dar manutenção. Facilita, por exemplo, a troca do mecanismo de armazenamento futuro sem impactar as rotas ou a lógica de negócio.

### 4. Mecanismo de Persistência de Dados
*   **Escolha:** **Armazenamento em Memória (In-Memory Storage)** utilizando Arrays nativos do JavaScript.
*   **Justificativa:** Para este protótipo, optou-se por manter os dados na memória volátil do servidor. Isso elimina a complexidade de configuração de bancos de dados externos (como MySQL ou MongoDB), permitindo que qualquer desenvolvedor execute o projeto imediatamente apenas com `npm install`, sem necessidade de instalar servidores de banco de dados adicionais.
*   **Observação:** A camada de Modelo foi abstraída de forma que, futuramente, a substituição por um banco de dados real (SQL ou NoSQL) exigiria alterações apenas no arquivo `database.js`, mantendo o restante da aplicação inalterado.
*   
### 5. Testes (Acompanhe o vídeo de execução dos testes)
Link Vídeo Pitch: https://drive.google.com/file/d/1KKhh9eldlz8Uey3d8v3Mm4e9nh1KG5XS/view?usp=sharing

Inicie o servidor na pasta raiz: npm run dev
Abra o postman e realize os testes de CRUD (POST, GET, PUT, DELETE) abaixo:

Teste 1: Listagem Inicial (READ - All)
Método: GET
URL: http://localhost:3000/api/empreendimentos
Resultado Esperado: Status 200 OK. Um JSON com uma lista contendo 2 empreendimentos ("Tech Solutions SC" e "Mercado do Vale").

Teste 2: Cadastro de Novo Empreendimento (CREATE)
Objetivo: Cadastrar um novo registro válido.
Método: POST
URL: http://localhost:3000/api/empreendimentos
Dados Válidos (Para CREATE e UPDATE) POST e PUT

{
  "nomeEmpreendimento": "Inovação Tech SC",
  "nomeResponsavel": "Carlos Alberto",
  "municipio": "Joinville",
  "segmento": "Tecnologia",
  "contato": "carlos@inovacaotech.com.br",
  "status": "ativo"
}

Teste 3: Validação de Erros (CREATE com falha)
Método: POST
URL: http://localhost:3000/api/empreendimentos
Dados Inválidos (Para testar Validação)
{
  "nomeEmpreendimento": "Oi", 
  "nomeResponsavel": "X",
  "municipio": "",
  "segmento": "Invalido",
  "contato": "email-sem-arroba",
  "status": "pendente"
}

Teste 4: Listar um Único Registro (READ - One)
Método: GET
URL: http://localhost:3000/api/empreendimentos/ id xxxxxxxx

Teste 5: Edição de Registro (UPDATE)
Método: PUT
URL: http://localhost:3000/api/empreendimentos/ id xxxxxxxx
{
  "municipio": "Florianópolis",
  "status": "inativo"
}

Teste 6: Remoção de Registro (DELETE)
Método: DELETE
URL: http://localhost:3000/api/empreendimentos/ id xxxxxxxx

Teste 7: Confirmação da Exclusão
Método: GET
URL: http://localhost:3000/api/empreendimentos
