# Vitor Imports

E-commerce de **streetwear importado**, desenvolvido como projeto Front-end do curso de
Desenvolvimento Web da Digital College. A estrutura de páginas segue o
[design da Drip Store no Figma](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30)
e a [documentação oficial](https://github.com/digitalcollegebr/projeto-digital-store), com
identidade visual própria: logo wordmark, paleta monocromática e ilustrações autorais das peças.

A aplicação é 100% front-end. Os produtos ficam em `src/data/products.js` e as ilustrações
(SVG, em 3 cores: preto, oliva e areia) em `src/assets/products/`. O consumo de uma API de
treino ([DummyJSON](https://dummyjson.com)) está planejado para a branch `feature/consumo-api`.

## Deploy

🔗 _Em breve:_ `https://<link-do-deploy>`

## Páginas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/produtos` | Lista de Produtos |
| `/produto/:id` | Detalhe do Produto |

## Tecnologias

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [React Router](https://reactrouter.com)
- CSS Modules
- ESLint

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 20 ou superior.

```bash
git clone https://github.com/vitoralvessobral12-commits/Projeto-Front-End.git
cd Projeto-Front-End
npm install
npm run dev
```

Acesse `http://localhost:5173`.

| Script | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Verifica o código com ESLint |

## Estrutura de pastas

```
src/
├── assets/
│   └── products/    # ilustrações SVG das peças (3 cores cada)
├── components/      # Header, Footer, Logo, ProductCard, Gallery, Layout
├── data/            # catálogo provisório de produtos
├── pages/           # Home, ProductList, ProductDetail
├── routes/          # configuração do react-router-dom
├── App.jsx
├── index.css        # variáveis de cor e reset global
└── main.jsx
```

## Versionamento

O projeto usa Git Flow simplificado (`main`, `develop` e `feature/*`) e Conventional Commits.
Veja as regras completas em [CONTRIBUTING.md](CONTRIBUTING.md).

## Integrantes

- _Nome completo do integrante 1_
- _Nome completo do integrante 2_
- _Nome completo do integrante 3_
