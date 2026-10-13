import { Link, useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import { formatPrice, getProductById } from "../data/products";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <section>
        <h1>Produto não encontrado</h1>
        <Link to="/produtos">Voltar para produtos</Link>
      </section>
    );
  }

  return (
    <section className={styles.detail}>
      <Gallery images={product.images} />

      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h1>{product.name}</h1>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p>Disponível nas cores preto, oliva e areia.</p>
        <button type="button" className={styles.buy}>
          Comprar
        </button>
      </div>
    </section>
  );
}
