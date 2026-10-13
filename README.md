# Vitor Imports

E-commerce de **streetwear importado**, desenvolvido como projeto Front-end do curso de
Desenvolvimento Web da Digital College. A estrutura de páginas segue o
[design da Drip Store no Figma](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30)
e a [documentação oficial](https://github.com/digitalcollegebr/projeto-digital-store), com
identidade visual própria: logo wordmark, paleta monocromática e ilustrações autorais das peças.

🔗 **Deploy:** _em breve_ `https://<link-da-vercel>`

---

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como rodar](#como-rodar)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como o projeto funciona](#como-o-projeto-funciona)
- [Identidade visual](#identidade-visual)
- [Versionamento (Git e GitHub)](#versionamento-git-e-github)
- [Deploy na Vercel](#deploy-na-vercel)
- [Próximos passos](#próximos-passos)
- [Integrantes](#integrantes)

---

## Funcionalidades

| Rota | Página | O que faz |
| --- | --- | --- |
| `/` | Home | Banner da coleção e 3 produtos em destaque |
| `/produtos` | Lista de Produtos | Todos os produtos, com **ordenação** e **filtro por categoria** funcionando |
| `/produto/:id` | Detalhe do Produto | Galeria com 3 cores da peça, preço e botão de compra |

- Ordenar por: mais relevantes, menor preço, maior preço e nome (A-Z).
- Filtrar por uma ou várias categorias ao mesmo tempo, com contador de resultados e botão "Limpar filtros".
- Galeria: clicar na miniatura troca a imagem principal.
- Produto inexistente (ex.: `/produto/99`) mostra a mensagem "Produto não encontrado".

## Tecnologias

| Tecnologia | Para que serve no projeto |
| --- | --- |
| [React 19](https://react.dev) | Biblioteca para construir a interface em componentes |
| [Vite](https://vite.dev) | Servidor de desenvolvimento rápido e build de produção |
| [React Router 7](https://reactrouter.com) | Navegação entre páginas sem recarregar o site |
| CSS Modules | CSS com escopo por componente (sem conflito de nomes de classe) |
| ESLint | Verificação de boas práticas no código |
| [Vercel](https://vercel.com) | Hospedagem e deploy automático |

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) 20 ou superior e [Git](https://git-scm.com).

```bash
git clone https://github.com/vitoralvessobral12-commits/Projeto-Front-End.git
cd Projeto-Front-End
npm install
npm run dev
```

Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento (atualiza a tela ao salvar) |
| `npm run build` | Gera a versão de produção otimizada na pasta `dist/` |
| `npm run preview` | Roda localmente o build de produção, para testar antes do deploy |
| `npm run lint` | Verifica o código com o ESLint |

## Estrutura de pastas

```
├── public/
│   └── favicon.svg            # ícone da aba do navegador
├── src/
│   ├── assets/
│   │   ├── fonts/unkempt/     # fonte de destaque + licença
│   │   └── products/          # ilustrações SVG (6 peças x 3 cores)
│   ├── components/            # peças reutilizáveis da interface
│   │   ├── Layout.jsx         # moldura: Header + página atual + Footer
│   │   ├── Header.jsx         # logo e menu
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx           # logo wordmark "VITOR IMPORTS"
│   │   ├── ProductCard.jsx    # card de produto (lista e home)
│   │   └── Gallery.jsx        # galeria de imagens do detalhe
│   ├── data/
│   │   └── products.js        # catálogo de produtos e funções auxiliares
│   ├── pages/                 # uma pasta/arquivo por rota
│   │   ├── Home.jsx
│   │   ├── ProductList.jsx
│   │   └── ProductDetail.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx      # mapa de rotas do site
│   ├── App.jsx                # liga o roteador (BrowserRouter)
│   ├── main.jsx               # ponto de entrada: renderiza o App no #root
│   └── index.css              # cores, fontes e reset globais
├── index.html                 # HTML base carregado pelo Vite
├── vercel.json                # configuração de rotas para o deploy
└── vite.config.js
```

Cada componente/página tem um arquivo `.module.css` com o mesmo nome, com seus estilos.

## Como o projeto funciona

### 1. Da abertura do site até a tela

```
index.html  →  main.jsx  →  App.jsx  →  AppRoutes.jsx  →  Layout  →  página da rota
```

1. O navegador carrega o `index.html`, que tem apenas uma `<div id="root">`.
2. O `main.jsx` renderiza o componente `App` dentro dessa div.
3. O `App.jsx` envolve tudo no `BrowserRouter`, que passa a "ouvir" a URL.
4. O `AppRoutes.jsx` compara a URL com as rotas e escolhe a página.
5. Todas as rotas ficam dentro do `Layout`, que desenha o Header e o Footer. No meio, o
   `<Outlet />` mostra a página da rota atual. Assim, o cabeçalho e o rodapé são escritos uma vez só.

```jsx
<Route element={<Layout />}>
  <Route path="/" element={<Home />} />
  <Route path="/produtos" element={<ProductList />} />
  <Route path="/produto/:id" element={<ProductDetail />} />
</Route>
```

### 2. Dados dos produtos

Os produtos ficam em `src/data/products.js`, em um array de objetos:

```js
{ id: 1, name: "Moletom Oversized Essential", category: "Moletons", price: 349.9, images: [...] }
```

O mesmo arquivo exporta duas funções:

- `getProductById(id)`: encontra um produto pelo `id` (usada no detalhe).
- `formatPrice(valor)`: formata o número como moeda (`349.9` → `R$ 349,90`).

Como todas as páginas leem deste único arquivo, trocar os dados por uma API no futuro exige
mudança em um só lugar.

### 3. Componentes reutilizáveis (props)

O `ProductCard` recebe os dados por **props** e não sabe de onde eles vêm. Por isso a Home e a
Lista usam o mesmo card:

```jsx
<ProductCard key={product.id} {...product} image={product.images[0]} />
```

O card inteiro é um `<Link to={`/produto/${id}`}>`, então clicar nele abre o detalhe sem recarregar a página.

### 4. Ordenação e filtro (estado com `useState`)

Na `ProductList.jsx`, duas informações mudam conforme o usuário interage, e por isso ficam no **estado**:

```js
const [sortBy, setSortBy] = useState("relevantes");          // opção do "Ordenar por"
const [selectedCategories, setSelectedCategories] = useState([]); // categorias marcadas
```

A cada renderização, a lista exibida é calculada a partir do estado:

1. **Filtra:** se nenhuma categoria está marcada, mostra tudo; senão, só as marcadas.
2. **Ordena:** usa a função de comparação da opção escolhida (`sorters[sortBy]`).
   É feita uma cópia (`[...filtered]`) antes do `sort`, para não alterar o array original.

O `<select>` e os checkboxes são **componentes controlados**: o valor exibido vem do estado
(`value` / `checked`) e muda pelo `onChange`.

### 5. Detalhe do produto (parâmetro de rota)

Na rota `/produto/:id`, o `:id` é um parâmetro. A página lê esse valor com `useParams()` e
busca o produto:

```js
const { id } = useParams();
const product = getProductById(id);
```

Se o produto não existir, a página mostra "Produto não encontrado" em vez de quebrar.

### 6. Galeria

O `Gallery` guarda no estado qual imagem está ativa (`current`). Clicar em uma miniatura chama
`setCurrent(index)`, e o React atualiza a imagem principal. A miniatura ativa ganha uma borda.

### 7. Estilos com CSS Modules

Cada componente importa seu próprio CSS:

```jsx
import styles from "./ProductCard.module.css";
<h3 className={styles.name}>...</h3>
```

O Vite transforma `.name` em um nome único (ex.: `_name_x7a2`), então duas classes `.name` em
arquivos diferentes nunca entram em conflito. Cores e fontes ficam como **variáveis CSS** no
`index.css` (ex.: `var(--primary)`, `var(--font-display)`), e mudar uma variável atualiza o site inteiro.

## Identidade visual

| Elemento | Definição |
| --- | --- |
| Logo | Wordmark "VITOR" com faixa "IMPORTS" (componente `Logo`, fonte Archivo Black) |
| Cores | Monocromático: preto `#0d0d0d`, off-white `#f4f4f2`, cinzas de apoio |
| Fonte de destaque | **Unkempt** (títulos, nomes de produto, preços), `--font-display` |
| Fonte de texto | **Times New Roman** (frases, menus, botões), `--font-body` |
| Imagens | Ilustrações vetoriais autorais de peças streetwear, em preto, oliva e areia |

A fonte Unkempt é distribuída sob a licença Apache 2.0 (arquivo em `src/assets/fonts/unkempt/LICENSE.txt`).

## Versionamento (Git e GitHub)

O projeto usa **Git Flow simplificado** e **Conventional Commits**. As regras completas, com
exemplos de resolução de conflitos e de como desfazer erros, estão no
[CONTRIBUTING.md](CONTRIBUTING.md).

```
main      ●───────────────────────●──────  (versão estável, recebe só PR da develop)
           \                     /
develop     ●──────●────────────●────────  (integração)
                    \          /
feature/...          ●──●──●──●            (uma branch por entrega)
```

Resumo do dia a dia:

```bash
git checkout develop && git pull           # 1. parte da develop atualizada
git checkout -b feature/nome               # 2. cria a branch da tarefa
git add . && git commit -m "feat(escopo): descrição"   # 3. commits pequenos
git push -u origin feature/nome            # 4. envia para o GitHub
# 5. abre Pull Request feature/nome → develop no GitHub
# 6. após o merge: PR develop → main e tag de versão (ex.: v0.1.0)
```

## Deploy na Vercel

O projeto é 100% front-end, então a Vercel só precisa rodar `npm run build` e publicar a pasta `dist/`.

### Configuração inicial (feita uma vez)

1. Acesse [vercel.com](https://vercel.com) e entre com a conta do **GitHub**.
2. Clique em **Add New… → Project** e importe o repositório `Projeto-Front-End`.
3. A Vercel detecta o Vite automaticamente. Confira:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**. Em cerca de 1 minuto o site estará no ar em `https://<nome>.vercel.app`.
5. Em **Settings → Git**, confirme que a **Production Branch** é `main`.

### Como o deploy conversa com as branches

| Ação no GitHub | O que a Vercel faz |
| --- | --- |
| Push/merge na `main` | **Deploy de produção** (o link oficial é atualizado) |
| Push em `develop` ou `feature/*` | **Preview deploy**: um link temporário só daquela branch |
| Pull Request aberto | A Vercel comenta no PR com o link de preview, para testar antes do merge |

Ou seja: a `main` estável é o que o público vê, e cada feature pode ser testada online antes de ser aprovada.

### Por que existe o `vercel.json`

O React Router cuida das rotas **no navegador**. Ao abrir `/produto/1` direto (ou apertar F5),
a Vercel procuraria um arquivo `produto/1`, que não existe, e mostraria erro 404. A regra abaixo
entrega o `index.html` para qualquer rota, e o React Router mostra a página certa:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Próximos passos

- [ ] `feature/consumo-api`: buscar produtos de uma API de treino (ex.: DummyJSON)
- [ ] Versão responsiva para celular
- [ ] Busca de produtos no Header
- [ ] Carrinho de compras

## Integrantes

- _Nome completo do integrante 1_
- _Nome completo do integrante 2_
- _Nome completo do integrante 3_
