# TS Basic Types

Descrição
--------
Módulo de estudos sobre os tipos básicos do TypeScript. Este repositório contém exemplos, explicações e pequenos exercícios focados nos conceitos fundamentais de tipagem em TypeScript.

Sumário
-------
- [Sobre](#sobre)
- [Conteúdo do repositório](#conte%C3%BAdo-do-reposit%C3%B3rio)
- [Requisitos](#requisitos)
- [Instalação e uso](#instala%C3%A7%C3%A3o-e-uso)
- [Exemplos rápidos](#exemplos-r%C3%A1pidos)
- [Prática: 60 exercícios](#pr%C3%A1tica-60-exerc%C3%ADcios)
- [Roadmap](#roadmap)
- [Contribuições](#contribui%C3%A7%C3%B5es)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

Sobre
-----
Este projeto reúne anotações e exemplos para aprender e revisar os tipos básicos do TypeScript: tipos primitivos, arrays, tuples, enums, any/unknown, union/intersection, type aliases, interfaces, funções tipadas, generics básicos e tipos utilitários.

Conteúdo do repositório
-----------------------
- src/ — exemplos em TypeScript (ex.: primitives.ts, arrays.ts, functions.ts, generics.ts)
- exercises/ — exercícios (a serem preenchidos)
- tests/ — (opcional) testes unitários para validar exercícios
- README.md — este arquivo

Requisitos
---------
- Node.js (v14+ recomendado)
- npm ou yarn
- TypeScript (v4+)

Instalação e uso
----------------
1. Clone o repositório:
   git clone https://github.com/pedrohrdev/ts-basic-types.git
2. Instale dependências:
   npm install
   # ou
   yarn install
3. Compilar/rodar exemplos (exemplos de scripts; ajuste conforme seu package.json):
   npm run build      # compila TypeScript para JavaScript
   npm run dev        # roda exemplos em modo dev (p. ex. ts-node)
   npm run test       # executa testes (se existir)

Exemplo de scripts (package.json)
```json
{
  "scripts": {
    "build": "tsc",
    "dev": "ts-node src/index.ts",
    "test": "vitest"
  }
}
```

Exemplos rápidos
---------------
Exemplo de tipo primitivo e função tipada:
```ts
// src/primitives.ts
type ID = number | string;

function greet(name: string): string {
  return `Olá, ${name}`;
}
```

Prática: 60 exercícios
---------------------
Plano de prática: vou resolver 60 exercícios cobrindo tudo que está neste repositório — desde tipos primitivos até generics e tipos utilitários. O objetivo é:
- Fixar conceitos com pequenos desafios práticos;
- Criar testes para cada exercício quando possível;
- Documentar a solução de cada exercício em `exercises/solved` com explicações.

Sugestão de divisão (exemplo):
- 10 exercícios sobre tipos primitivos e inferência
- 10 sobre arrays, tuples e enums
- 10 sobre funções e assinaturas
- 10 sobre union, intersection e type guards
- 10 sobre interfaces e type aliases
- 10 sobre generics e utilitários

Roadmap
-------
- [x] Estruturar exemplos básicos em `src/`
- [ ] Criar a lista dos 60 exercícios em `exercises/README.md`
- [ ] Implementar soluções e testes para os exercícios
- [ ] Criar material explicativo/resumo para cada tópico

Contribuições
-------------
Contribuições são bem-vindas! Abra uma issue ou envie um pull request com melhorias, correções ou novos exercícios. Para contribuições:
1. Fork este repositório
2. Crie uma branch com sua feature: `git checkout -b feat/minha-melhoria`
3. Faça commit das alterações e envie um PR

Licença
-------
Coloque aqui a licença do seu projeto (ex.: MIT). Se quiser, eu adiciono um arquivo LICENSE com a licença escolhida.

Contato
-------
Pedro Henrique — https://github.com/pedrohrdev
