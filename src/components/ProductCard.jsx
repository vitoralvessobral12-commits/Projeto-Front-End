import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ id, image, name, category, price }) {
  return (
    <Link to={`/produto/${id}`} className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <span className={styles.category}>{category}</span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{formatPrice(price)}</p>
    </Link>
  );
}
