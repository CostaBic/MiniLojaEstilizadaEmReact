export default function Navbar({ toggleTheme, cartCount }) {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 h-16 flex items-center justify-center
        px-4 z-50
        bg-[linear-gradient(180deg,var(--nav-bg-top),var(--nav-bg-bottom))]
        backdrop-blur-[6px] shadow-[var(--shadow-1)]
      "
    >
      <div className="flex items-center justify-between w-full max-w-[1650px]">
        {/* Logo */}
        <h1
          className="font-bold tracking-[-0.01em] text-[var(--text)]"
        >
          Lojão da cidade
        </h1>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="
              border-none px-3 py-1.5 rounded-md
              bg-[var(--button-bg)] text-[var(--button-text)]
              cursor-pointer font-medium
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]
              transition-colors duration-200
            "
          >
            Tema
          </button>

          <div className="relative text-[var(--text)] flex items-center">
            🛒<span className="ml-1">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
