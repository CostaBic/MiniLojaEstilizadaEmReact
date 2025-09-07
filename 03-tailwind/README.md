# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Preciso de ajuda para implementar uma tarefa.
Quero um passo a passo como máximo de detalhes possível. vamos bem de vagar etapa por etapa.
Cuidado para não esquecer nenhum detalhe da tarefa.

Tarefa: Implemente a mesma tela em 4 versões ou telas diferentes para cada uma das versões:

1. CSS Global · 2) CSS Modules · 3) Tailwind CSS · 4) styled-components.

Exemplo de Tela a construir:

- Navbar (fixa): logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.

- Grid de produtos (cards) responsivo: ≤480px: 1 col · 481–768px: 2 cols · 769–1024px: 3 cols · ≥1025px: 4 cols.

- Card de produto: imagem 1:1 com espaço reservado, título 2 linhas com ellipsis, preço, rating (★), tag (“Novo”/“Promo”), botão “Adicionar” com variantes solid/outline/ghost.

Estados/Interações obrigatórios:

- Hover (elevação/sombra), focus visível, disabled, loading com skeleton (simule atraso).

- Dark mode aplicado a cores/sombras/bordas.

Acessibilidade:

- Navegação por teclado, `aria-*` onde fizer sentido, contraste ≥ 4.5:1.

Animações:

- Transições de 150–250ms (usar transform/opacity).

Dados:

- Exibir 6 produtos (id, título, preço, rating, tag, imagem placeholder). Imagens com lazy loading.

Entregáveis:

- Quatro pastas: `01-css-global/`, `02-css-modules/`, `03-tailwind/`, `04-styled-components/`.
- Cada pasta com os componentes (`Navbar`, `ProductCard`, `Button`, `Skeleton`) e um README curto.

Restrições:

- Em cada versão, use apenas a técnica indicada (global, modules, utilitários, CSS-in-JS com `ThemeProvider` e props).

Critérios de aceite:

- Breakpoints exatamente como descritos.
- Dark mode com persistência.
- Focus ring visível.
- Skeleton sem layout shift.
- Variantes do botão consistentes nos dois temas.
- Organização clara de pastas e uso de tokens (cores, espaçamentos, raio, sombras).

Já Conclui 2 versões com você em outro chat em outra conta. Agora vamos implementar a versão em tailwind.
Corrija a estrutura das pastas (imagem em anexo) para que respeite tailwind

Mas vamos fazer pasta por pasta juntos pois não é possível enviar todos os arquivos ao mesmo tempo. Vamos começar criando o componente Button.jsx. quais arquivos das versões você precisa?

Vamos nos basear apenas na versão 02-css-modules para criar a versão utilizando tailwind. Button.jsx: import styles from './Button.module.css'; export default function Button({ label, onClick, variant }) { const buttonClass = ${styles.btn} ${styles[btn--${variant}]}; return ( <button className={buttonClass} onClick={onClick}> {label} </button> ); } Button.module.css: .btn{ padding: 10px 14px; border-radius: 10px; font-weight:600; cursor:pointer; border: none; transition: transform var(--t), box-shadow var(--t), opacity var(--t); display:inline-flex; align-items:center; gap:8px; font:inherit; /* Garante que o botão herde a fonte do corpo */ } /* Variação sólida */ .btn--solid { background: var(--primary); color: white; box-shadow: var(--shadow-1); } .btn--solid:hover { transform: translateY(-2px); box-shadow: var(--shadow-2); } /* Variação com contorno (outline) */ .btn--outline { background: transparent; color: var(--text); border: 1px solid rgba(11,26,43,0.08); } /* Cor do contorno no modo escuro */ .dark .btn--outline { border: 1px solid rgba(255,255,255,0.06); } /* Variação "fantasma" (ghost) */ .btn--ghost { background: transparent; color: var(--primary); } /* Botão desabilitado */ .btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; } tokens.module.css: /* Tema claro (classe exportada: tokens.light) */ .light { --bg: #ffffff; --bg-color: #ffffff; --text: #0b1a2b; --text-color: #0b1a2b; --surface: #f7f7f9; --card-bg: #f9f9f9; --card-border: #ddd; --primary: #5a74e6; --button-bg: #007bff; --button-text: #ffffff; --muted: #6b7785; --shadow-1: 0 1px 2px rgba(2,6,23,0.06); --shadow-2: 0 6px 18px rgba(2,6,23,0.12); --radius-md: 12px; --t: 180ms; --focus: #7a93ff; /* navbar colors aliases if needed */ --nav-bg-top: rgba(255,255,255,0.85); --nav-bg-bottom: rgba(255,255,255,0.7); } /* Tema escuro (classe exportada: tokens.dark) */ .dark { --bg: #0b0b0f; --bg-color: #0b0b0f; --text: #E6EEF8; --text-color: #E6EEF8; --surface: #131316; --card-bg: #131316; --card-border: #333; --primary: #3DA1FF; --button-bg: #2F8CFF; --button-text: #ffffff; --muted: #9aa9c7; --shadow-1: 0 1px 2px rgba(0,0,0,0.5); --shadow-2: 0 10px 30px rgba(0,0,0,0.6); --radius-md: 12px; --t: 180ms; --focus: #FFB703; --nav-bg-top: rgba(16,16,18,0.6); --nav-bg-bottom: rgba(16,16,18,0.5); } Navbar.jsx: import styles from "./Navbar.module.css"; export default function Navbar({ toggleTheme, cartCount }) { return ( <header className={styles.navbar}> <div className={styles.navbarInner}> <h1 className={styles.logo}>Lojão da cidade</h1> <div className={styles.actions}> <button className={styles.themeButton} onClick={toggleTheme}> Tema </button> <div className={styles.cart}> 🛒<span>{cartCount}</span> </div> </div> </div> </header> ); } Navbar.module.css: .navbar { position: fixed; top: 0; left: 0; right: 0; height: 64px; display: flex; align-items: center; justify-content: center; padding: 0 var(--space-4); background: linear-gradient(180deg, var(--nav-bg-top), var(--nav-bg-bottom)); backdrop-filter: blur(6px); box-shadow: var(--shadow-1); z-index: 50; } .navbarInner { display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 1650px; } .logo { font-weight: 700; letter-spacing: -0.01em; color: var(--text); /* usa cor do tema */ } .actions { display: flex; gap: var(--space-3); align-items: center; } .themeButton { border: none; padding: 6px 12px; border-radius: 6px; background: var(--button-bg); color: var(--button-text); cursor: pointer; font-weight: 500; } .cart { position: relative; color: var(--text); } ProductCard.jsx: import styles from './ProductCard.module.css'; import Button from '../Button/Button.jsx'; export default function ProductCard({ product, onAddToCart }) { const { title, price, image, tag, rating } = product; return ( <div className={styles.card}> <div className={styles.imgWrap}> <img src={image} alt={title} className={styles.img} /> </div> <div className={styles.meta}> {tag && ( <span className={${styles.tag} ${styles[tag.toLowerCase()]}}> {tag} </span> )} </div> <h3 className={styles.title}>{title}</h3> <div className={styles.priceRatingContainer}> <span className={styles.price}>R${price.toFixed(2)}</span> <span className={styles.rating}>⭐ {rating}</span> </div> <div className={styles.cardFooter}> <Button label="Adicionar" onClick={onAddToCart} variant="btn" /> <Button label="Ver detalhes" onClick={() => console.log("Ver detalhes:", title)} variant="outline" /> </div> </div> ); } ProductCard.module.css: .card { background-color: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 1rem; transition: transform 0.2s ease, background 0.3s ease; } .card:hover { transform: translateY(-4px); } .imgWrap { text-align: center; margin-bottom: 1rem; } .img { max-width: 100%; height: 180px; object-fit: contain; } .meta { display: flex; justify-content: space-between; margin-bottom: 0.5rem; } .tag { font-size: 0.7rem; font-weight: bold; padding: 0.2rem 0.6rem; border-radius: 6px; } .promo { background: #ff4d4d; color: #fff; } .new { background: #4caf50; color: #fff; } .title { font-size: 0.9rem; margin: 0.5rem 0; min-height: 40px; } .priceRatingContainer { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; } .price { font-weight: bold; } .rating { font-size: 0.8rem; color: rgb(133, 133, 133); } .cardFooter { display: flex; justify-content: space-between; gap: 0.5rem; }