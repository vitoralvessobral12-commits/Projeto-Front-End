import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import styles from "./ProductList.module.css";

const categories = [...new Set(products.map((product) => product.category))];

export default function ProductList() {
  return (
    <section>
      <div className={styles.toolbar}>
        <h1>Produtos</h1>
        {/* "Ordenar por" só precisa existir visualmente */}
        <label>
          Ordenar por{" "}
          <select defaultValue="relevantes">
            <option value="relevantes">Mais relevantes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </label>
      </div>

      <div className={styles.content}>
        {/* "Filtrar por" só precisa existir visualmente */}
        <aside className={styles.filters}>
          <h2>Filtrar por</h2>
          <h3>Categoria</h3>
          {categories.map((category) => (
            <label key={category} className={styles.option}>
              <input type="checkbox" /> {category}
            </label>
          ))}
        </aside>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} image={product.images[0]} />
          ))}
        </div>
      </div>
    </section>
  );
}
