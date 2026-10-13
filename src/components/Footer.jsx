import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo variant="light" />
      <p>© {new Date().getFullYear()} Vitor Imports. Streetwear importado.</p>
    </footer>
  );
}
