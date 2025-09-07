import React, { useEffect, useState } from "react";
import products from "./data/products";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Skeleton from "./components/Skeleton";

export default function App(){
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(()=> {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    // simula fetch
    setTimeout(()=> setLoading(false), 900);
  },[]);

  function toggleTheme(){
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  function handleAdd(p){
    setCartCount(c => c + 1);
    setItems(prev => [...prev, p]);
    // aria-live já notifica o badge
  }

  return (
    <>
      <Navbar cartCount={cartCount} onToggleTheme={toggleTheme} />
      <main className="app" id="main">
        <h1 style={{marginBottom:16}}>Produtos</h1>
        <section className="products-grid" role="list" aria-label="Lista de produtos">
          {loading
            ? Array.from({length:6}).map((_,i) => (
                <div className="card" key={i}><Skeleton /></div>
              ))
            : products.map(p => (
                <ProductCard key={p.id} product={p} onAdd={handleAdd} />
              ))
          }
        </section>
      </main>
    </>
  );
}
