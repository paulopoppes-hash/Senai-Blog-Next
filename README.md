# Senai-Blog-Next

Blog — Next.js (App Router)

## Descrição

Aplicação web de blog desenvolvida com **Next.js 14**, **React 18** e **App Router**, conforme proposto na **Aula 03 - Atividade 04** da disciplina Frameworks Front-end.

O projeto demonstra os principais conceitos de Next.js estudados na aula: roteamento baseado em estrutura de arquivos (`app/page.tsx`, `app/sobre/page.tsx`), renderização no servidor (SSR), Server Components e App Router.

## Tecnologias utilizadas

- **Next.js 14** — framework full-stack baseado em React
- **React 18** — biblioteca para interfaces de usuário
- **App Router** — sistema de roteamento baseado em diretórios do Next.js
- **TypeScript** — tipagem estática
- **HTML5 / CSS3** — estrutura e estilização

## Estrutura do projeto

```
blog-next/
├── next.config.js
├── package.json
├── tsconfig.json
├── next-env.d.ts
├── app/
│   ├── layout.tsx        — layout raiz com navegação e footer
│   ├── page.tsx          — página inicial (/)
│   ├── globals.css       — estilos globais
│   └── sobre/
│       └── page.tsx      — página sobre (/sobre)
```

## Como o protótipo funciona

O prototipo e um blog simples com duas paginas:

1. **Página Inicial (`/`)**: exibe uma lista de posts do blog com títulos e descricoes.
2. **Página Sobre (`/sobre`)**: apresenta informacoes sobre o blog e o Next.js.

A navegacao entre as paginas e feita por links HTML convencionais que aproveitam a navegacao do lado do cliente do Next.js. A estrutura de rotas e definida unicamente pela organizacao de arquivos dentro da pasta `app/` (App Router), sem necessidade de configuracao manual de rotas.

## Conceitos aplicados (Aula 03 - Atividade 04)

- [x] Next.js com App Router
- [x] Rotas baseadas em estrutura de arquivos (`app/page.tsx`, `app/sobre/page.tsx`)
- [x] Renderizacao no servidor (SSR / Server Components)
- [x] Layout raiz (`layout.tsx`) compartilhado entre paginas
- [x] TypeScript para tipagem

## Como executar

1. Instale as dependencias:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:3000`

Para build de producao:
```bash
npm run build
npm run start
```

## Repositorio principal

[senai-framework-frontend](https://github.com/paulopoppes-hash/senai-framework-frontend)
