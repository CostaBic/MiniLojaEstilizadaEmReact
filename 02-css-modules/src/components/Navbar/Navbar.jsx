import styles from "./Navbar.module.css";

export default function Navbar({ toggleTheme, cartCount }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarInner}>
        <h1 className={styles.logo}>Lojão da cidade</h1>
        <div className={styles.actions}>
          <button className={styles.themeButton} onClick={toggleTheme}>
            Tema
          </button>
          <div className={styles.cart}>
            🛒<span>{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
