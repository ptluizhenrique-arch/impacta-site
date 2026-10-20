# Instrucoes do repositorio

## Stack e estrutura
- Site institucional em Next.js 16, App Router, React 19 e TypeScript com `strict: true`.
- `app/page.tsx` compoe a pagina; `app/layout.tsx` define fontes, metadados e estilos globais.
- Componentes reutilizaveis estao atualmente na raiz do repositorio (`Header.tsx`, `Brief.tsx`, `Steps.tsx` e outros); `@/*` mapeia para a raiz, conforme `tsconfig.json`.
- `app/globals.css` concentra tokens visuais, estilos responsivos e animacoes.
- `lib/site.ts` contem conteudo, links, dados de contato e configuracao publica do site.

## Convencoes de implementacao
- Preserve a identidade visual existente: marinho, lima, violeta e off-white, tipografia Inter e layout responsivo.
- Mantenha o conteudo e a interface em portugues do Brasil.
- Use Server Components por padrao. Adicione `"use client"` apenas quando houver estado, eventos de navegador ou APIs do cliente.
- Mantenha TypeScript estrito, acessibilidade semantica e suporte a `prefers-reduced-motion`.
- Respeite os caminhos reais dos modulos ao importar. O alias `@/*` resolve a partir da raiz do projeto.
- Evite alterar conteudo, contatos ou metadados do site fora do escopo solicitado.

## Comandos
- Requer Node.js 20.9 ou superior.
- `npm run dev`: servidor local.
- `npm run build`: validacao de producao.
- `npm start`: inicia a versao compilada.
- `package.json` nao define scripts de teste ou lint; nao presuma que existam.
