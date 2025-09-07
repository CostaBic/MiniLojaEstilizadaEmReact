
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import products from './data/products.js';

import tokens from './styles/tokens.module.css';
import styles from './styles/App.module.css';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark'; } catch { return false; }
  });
  const [cartCount, setCartCount] = useState(0); 

  useEffect(() => {
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch {}
  }, [isDark]);

  function toggleTheme() {
    setIsDark(prev => !prev);
  }

  function handleAddToCart() {
    setCartCount(prev => prev + 1); 
  }

  const themeClass = isDark ? tokens.dark : tokens.light;

  return (
    <div className={themeClass}>
      <div className={styles.wrapper}>
        <Navbar toggleTheme={toggleTheme} cartCount={cartCount} />
        <main className={styles.app}>
          <h1 className={styles.heading}>Produtos</h1>
          <section className={styles.productsGrid} role="list" aria-label="Lista de produtos">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
