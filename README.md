# React Finance Manager

Aplicação de **controle financeiro pessoal** (entradas e saídas) feita com **React + TypeScript** durante o curso de React da **B7Web**.

O app permite navegar por meses, visualizar um resumo de **receitas** e **despesas**, listar os lançamentos do mês selecionado e **adicionar novos itens**.

## Funcionalidades

- Navegação por mês (mês atual por padrão)
- Resumo do mês:
  - **Receitas (Income)**
  - **Despesas (Expense)**
  - cálculo automático a partir dos itens filtrados do mês
- Listagem de lançamentos do mês (tabela)
- Cadastro de novo lançamento (data, categoria, título e valor)

## Melhorias aplicadas no meu projeto

- **Projeto 100% em TypeScript**
  - Tipos e interfaces separados (`src/types` e `src/interfaces`)
  - Melhor previsibilidade e manutenção do código
- **Estrutura de pastas mais organizada**
  - Componentes agrupados por contexto em `src/components/body/*` (info, inserção e tabela)
- **Helpers reutilizáveis**
  - Funções de data e formatação isoladas em `src/helpers/` (ex.: filtrar por mês, formatar data, formatar mês)
- **IDs únicos para lançamentos**
  - Os itens usam `uuid` (`v4()`) para gerar identificadores únicos

## Como o projeto funciona (visão geral)

### 1) Dados e categorias (mock)
- Categorias ficam em `src/data/categories.data.ts` com:
  - `title` (nome)
  - `color` (cor usada na UI)
  - `expense` (define se é despesa ou receita)
- Itens iniciais ficam em `src/data/items.data.ts` (mock), cada item com:
  - `id`, `date`, `category`, `title`, `value`

### 2) Filtro por mês + cálculos
No `App`:
- `list` guarda todos os lançamentos
- `currentMonth` guarda o mês atual (`getCurrentMonth()`)
- `filteredList` é recalculada sempre que `list` ou `currentMonth` mudam, usando `filterListByMonth`
- `income` e `expense` são recalculados com base em `filteredList` e na flag `expense` da categoria

### 3) Componentes principais
- `src/components/header/`  
  Cabeçalho do sistema
- `src/components/body/`  
  Área principal do app, com:
  - `info-area/` (navegação por mês + resumo)
  - `insert-area/` (formulário para adicionar lançamento)
  - `table-area/` (tabela de itens do mês + item da tabela)

## Tecnologias

- React
- TypeScript
- styled-components
- uuid

## Como rodar

```bash
npm install
npm start
```

Acesse: `http://localhost:3000`
