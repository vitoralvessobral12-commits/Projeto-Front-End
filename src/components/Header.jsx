import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" aria-label="Página inicial">
          <Logo />
        </NavLink>
        <nav>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
