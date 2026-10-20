# Site Impacta Comunicação Digital

Landing page em Next.js (App Router), baseada no portfólio institucional 2026.

## Antes de publicar
Edite `lib/site.ts`:
- `SITE_URL`: o domínio final (ex.: `https://impactacomunicacao.com.br`)
- `CONTATO`: e-mail, WhatsApp (só números, com 55 + DDD) e Instagram

## Rodar no computador
Precisa do Node.js 20.9 ou mais novo.
```bash
npm install
npm run dev      # abre em http://localhost:3000
npm run build    # testa o build de produção
```

## Estrutura
- `app/page.tsx`: todas as seções da página
- `app/globals.css`: identidade visual (cores no topo do arquivo)
- `app/opengraph-image.tsx`: imagem que aparece ao compartilhar o link
- `components/`: partes interativas (menu, seta do hero, seletor de desafio, metodologia, briefing)
- `public/equipe/`: fotos da equipe
