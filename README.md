# Ketlin Portfolio v2
Site one-page em Vue 3 + Vuetify, inspirado no PDF de apresentação da Ketlin Alencar. Traz seções hero, sobre, posicionamento, portfólio, CTA final e animações sutis ao rolar.

## Stack
- Vue 3 + Vite
- Vuetify 3
- MDI (Material Design Icons) via fonte local + fallback CDN
- CSS puro (arquivo `src/styles/global.css`) para o layout e animações

## Rodando o projeto
```bash
npm install        # instala dependências
npm run dev        # sobe em modo desenvolvimento
npm run build      # gera build de produção
npm run preview    # serve a build gerada
```

## Estrutura principal
- `src/App.vue`: todas as seções da página (hero, sobre, posicione, encante, você vs você, serviços, CTA).
- `src/styles/global.css`: estilos globais, grids, tipografia e animações (reveal/reveal-text/reveal-image).
- `src/plugins/vuetify.js`: tema e ícones do Vuetify.
- `public/assets/`: imagens usadas no layout (hero, sobre, etc.).
- `public/portfolio/` + `src/data/portfolio.js`: para inserir trabalhos reais (descomentando a seção de portfólio em `App.vue`).

## Personalização rápida
- Contatos: em `src/App.vue` altere `email`, `whatsapp` e `whatsappLabel`.
- Cores: em `src/plugins/vuetify.js` (tema `ketlinLight`).
- Ícones: usam classes `mdi` ou a prop `icon` do `v-icon`. Se faltarem, o fallback CDN está no `index.html`.
- Animações: classes `.reveal`, `.reveal-text`, `.reveal-image` (timings em `global.css`).

## Favicon
O favicon usa um emoji (✨) inline via data URI em `index.html`. Troque o emoji no SVG ou aponte para um arquivo próprio caso prefira.

## Notas
- `npm install` pode precisar limpar `node_modules` se houver resquícios de builds antigos; depois rode `npm run dev`.
- A seção de portfólio está comentada em `App.vue` (para usar, descomente e alimente `src/data/portfolio.js`). 
