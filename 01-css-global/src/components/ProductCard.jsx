import React, { useState } from "react";
import Button from "./Button";

export default function ProductCard({ product, onAdd }) {
  const [adding, setAdding] = useState(false);

  function handleAdd() {
    if (adding) return;
    setAdding(true);
    // Simula carga (loading) por 700ms para mostrar skeleton/no botão
    setTimeout(() => {
      onAdd(product);
      setAdding(false);
    }, 700);
  }

  return (
    <article className="card" aria-labelledby={`title-${product.id}`}>
      <div className="img-wrap" aria-hidden="true">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12}}>
          <h3 id={`title-${product.id}`} className="title">{product.title}</h3>
          <div aria-hidden="true">
            <span className={`tag ${product.tag.toLowerCase()}`}>{product.tag}</span>
          </div>
        </div>

        <div className="meta" style={{marginTop:8}}>
          <div className="price">R$ {product.price.toFixed(2).replace(".",",")}</div>
          <div className="rating" aria-label={`Avaliação ${product.rating} de 5`}>
            {"★".repeat(Math.round(product.rating))} <span style={{color:"var(--muted)", marginLeft:6}}>{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <Button variant="solid" onClick={handleAdd} loading={adding} ariaLabel={`Adicionar ${product.title} ao carrinho`}>Adicionar</Button>
        <Button variant="outline" onClick={() => alert("Ver detalhes (exemplo)")} ariaLabel={`Ver detalhes de ${product.title}`}>Ver detalhes</Button>
      </div>
    </article>
  );
}
