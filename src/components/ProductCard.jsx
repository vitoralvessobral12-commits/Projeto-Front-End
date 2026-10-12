import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ id, image, name, price }) {
  return (
    <Link to={`/produto/${id}`} className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>R$ {price}</p>
    </Link>
  );
}
