import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // 'light' | 'dark' | 'system'

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  const root = document.documentElement; // <html>
  const effective = theme === "system" ? getSystemTheme() : theme;

  // garante que apenas uma das duas esteja aplicada
  root.classList.remove("light", "dark");
  root.classList.add(effective); // 'dark' ativa o modo escuro do Tailwind e os tokens .dark

  // opcional: ajustar meta theme-color baseado nos tokens
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(root).getPropertyValue("--bg-color").trim();
    meta.setAttribute("content", bg || (effective === "dark" ? "#0b0b0f" : "#ffffff"));
  }

  return effective;
}

export default function useTheme(initial = "system") {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return initial;
    return localStorage.getItem(STORAGE_KEY) || initial;
  });

  // aplica ao montar e quando theme mudar
  useEffect(() => {
    if (typeof window === "undefined") return;
    const effective = applyTheme(theme);
    // salva escolha explícita (não salva 'system' como cor efetiva)
    localStorage.setItem(STORAGE_KEY, theme);
    // sincroniza se o usuário já mudou manualmente (ex: outra aba)
    return () => {};
  }, [theme]);

  // escuta mudanças do SO quando em 'system'
  useEffect(() => {
    if (theme !== "system" || typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    // compatibilidade com browsers antigos
    try { mql.addEventListener("change", handler); } catch { mql.addListener(handler); }
    return () => {
      try { mql.removeEventListener("change", handler); } catch { mql.removeListener(handler); }
    };
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setSystem = useCallback(() => setTheme("system"), []);

  return { theme, setTheme, toggleTheme, setSystem };
}
