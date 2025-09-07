/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <<< habilita suporte a temas alternando a classe "dark" no <html>
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // pega todos os componentes e páginas
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.2s linear infinite",
      },
      backgroundImage: {
        "skeleton-gradient":
          "linear-gradient(90deg, rgba(0,0,0,0.06) 8%, rgba(0,0,0,0.02) 18%, rgba(0,0,0,0.06) 33%)",
      },
    },
  },
  plugins: [],
};
