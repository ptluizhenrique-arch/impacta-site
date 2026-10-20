# Site Impacta Comunicação Digital

Landing page em Next.js (App Router), baseada no portfólio institucional 2026.

## Antes de publicar
Edite `lib/site.ts`:
- `SITE_URL`: o domínio final (ex.: `https://impactacomunicacao.com.br`)
- `CONTATO`: e-mail, WhatsApp (só números, com 55 + 051 993949307) e Instagram

```

## Estrutura
- `app/page.tsx`: todas as seções da página
- `app/globals.css`: identidade visual (cores no topo do arquivo)
- `app/opengraph-image.tsx`: imagem que aparece ao compartilhar o link
- `components/`: partes interativas (menu, seta do hero, seletor de desafio, metodologia, briefing)
- `public/equipe/`: fotos da equipe
