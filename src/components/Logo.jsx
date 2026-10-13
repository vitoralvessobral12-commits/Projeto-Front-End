import styles from "./Logo.module.css";

// variant "dark" = logo preta (fundo claro) | "light" = logo branca (fundo escuro)
export default function Logo({ variant = "dark" }) {
  return (
    <span className={`${styles.logo} ${styles[variant]}`} aria-label="Vitor Imports">
      <span className={styles.name}>VITOR</span>
      <span className={styles.tag}>IMPORTS</span>
    </span>
  );
}
