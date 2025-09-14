import { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import products from "./data/products.js";

import { light, dark } from "./styles/theme.js";

// Estilos globais (reset + aplica cores do tema)
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;
  }
`;

// Wrapper principal
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 64px; /* espaço pro Navbar fixo */
`;

// Grid de produtos
const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin-top: 32px;
`;

// Heading
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 16px;
`;

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} cartCount={cartCount} />
      <Wrapper>
        <Heading>Produtos</Heading>
        <ProductsGrid role="list" aria-label="Lista de produtos">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </ProductsGrid>
      </Wrapper>
    </ThemeProvider>
  );
}
