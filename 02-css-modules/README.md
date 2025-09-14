02-css-modules

Versão usando CSS Modules (cada componente importa seu arquivo *.module.css; variáveis/"tokens" CSS definidas em src/styles/tokens.module.css).

Como rodar:

npm install

npm run dev

Includes:

Navbar

ProductCard

Button

Skeleton

Breakpoints:

1 col (<=480px)

2 col (481–768px)

3 col (769–1024px)

4 col (>=1025px)

Dark mode:

Implementado com variáveis CSS e classe .dark aplicada ao root/html.

A seleção de tema persiste em localStorage (o script aplica ou remove a classe .dark).

Observações:

Cada componente tem seu escopo de estilos (ex.: Button.module.css, ProductCard.module.css).

Tokens de design (cores, spacing, sombras, transições) estão centralizados em src/styles/tokens.module.css para facilitar a manutenção.