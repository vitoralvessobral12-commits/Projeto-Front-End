import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import styles from "./Home.module.css";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <span className={styles.kicker}>Nova coleção</span>
        <h1 className={styles.title}>Streetwear importado, sem excesso.</h1>
        <p>Peças oversized, cortes limpos e tecidos pesados para o dia a dia na cidade.</p>
        <Link to="/produtos" className={styles.button}>
          Ver produtos
        </Link>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Em alta</h2>
        <div className={styles.grid}>
          {featured.map((product) => (
            <ProductCard key={product.id} {...product} image={product.images[0]} />
          ))}
        </div>
      </section>
    </>
  );
}
