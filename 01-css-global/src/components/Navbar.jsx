import React from "react";

export default function Navbar({ cartCount = 0, onToggleTheme }) {
  return (
    <header className="navbar" role="banner">
      <div className="logo" aria-hidden="false">Lojão da cidade</div>

      <div className="nav-actions" role="navigation" aria-label="Ações">
        <button
          onClick={onToggleTheme}
          aria-label="Alternar tema claro e escuro"
          aria-pressed={document.documentElement.classList.contains("dark")}
          title="Alternar tema"
        >
          Tema
        </button>

        <div className="cart" aria-live="polite" aria-atomic="true">
          <button aria-label="Abrir carrinho" title="Carrinho">
            🛒
          </button>
          {cartCount > 0 && <div className="cart-badge" aria-label={`${cartCount} itens no carrinho`}>{cartCount}</div>}
        </div>
      </div>
    </header>
  );
}
