# 04-styled-components
Versão usando **styled-components** (estilos encapsulados em componentes e variáveis CSS injetadas via ThemeProvider).

## Como rodar:
1. npm install
2. npm run dev

## Includes:
- Navbar  
- ProductCard  
- Button  
- Skeleton  

## Breakpoints:
- 1 col (<=480px)  
- 2 col (481–768px)  
- 3 col (769–1024px)  
- 4 col (>=1025px)  

## Dark mode:
- Implementado via ThemeProvider (`theme.js`)  
- As cores e tokens (como `primary`, `text`, `buttonTextOnPrimary`) são mapeados para variáveis CSS  
- A seleção de tema persiste em `localStorage`
