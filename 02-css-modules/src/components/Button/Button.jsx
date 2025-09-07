import styles from './Button.module.css';

export default function Button({ label, onClick, variant }) {
  const buttonClass = `${styles.btn} ${styles[`btn--${variant}`]}`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}
