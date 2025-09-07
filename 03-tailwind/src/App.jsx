// src/App.jsx
import { useState } from "react";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import products from "./lib/products";

export default function App() {
  const { toggleTheme } = useTheme("light");
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((prev) => prev + 1);
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      <Navbar toggleTheme={toggleTheme} cartCount={cartCount} />
      <main className="max-w-[1200px] mx-auto p-4 pt-20">
        <h1 className="text-[28px] my-2 mb-[18px] font-bold text-[var(--text)]">
          Produtos
        </h1>
        <section
          className="grid gap-4 grid-cols-1 
                     min-[481px]:grid-cols-2 
                     min-[769px]:grid-cols-3 
                     min-[1025px]:grid-cols-4"
          role="list"
          aria-label="Lista de produtos"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </section>
      </main>
    </div>
  );
}
