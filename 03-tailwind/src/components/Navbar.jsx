// src/components/Navbar.jsx
import { useEffect, useState } from "react";

export default function Navbar({ toggleTheme, cartCount = 0 }) {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // fallback inline background (aplica mesmo que Tailwind não gere as classes)
  const inlineBg = isDark
    ? "rgba(16,16,18,0.70)" // translúcido escuro
    : "rgba(255,255,255,0.85)"; // translúcido claro

  return (
    <header
      // fixed + full width
      className="fixed top-0 left-0 w-full h-16 z-50"
      // fallback inline garante visual translúcido mesmo se classes Tailwind falharem
      style={{ backgroundColor: inlineBg, backdropFilter: "blur(6px)" }}
    >
      {/* background via classes Tailwind também (preferido) */}
      <div
        className="
          absolute inset-0 -z-10
          bg-white/80 dark:bg-slate-900/80
          backdrop-blur-md
          shadow-sm
        "
        aria-hidden="true"
      />

      {/* conteúdo alinhado com o main (max-w igual ao do main: 1200px) */}
      <div className="relative max-w-[1750px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Título à esquerda */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Lojão da cidade
        </h1>

        {/* Ações à direita: primeiro Tema, depois Carrinho (small gap) */}
        <div className="flex items-center justify-between h-[50px] w-[80px]">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="
              px-3 py-1.5 rounded-md text-sm font-medium
              bg-white/90 dark:bg-slate-800/90
              text-gray-800 dark:text-gray-100
              border border-gray-200 dark:border-slate-700
              shadow-sm hover:opacity-95 transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]
            "
          >
            Tema
          </button>
          <button
            type="button"
            aria-label="Ver carrinho"
            className="relative p-2 text-gray-700 dark:text-gray-200"
          >
            🛒
            <span className="absolute -top-1 -right-1 text-xs bg-blue-600 text-white rounded-full px-1">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
