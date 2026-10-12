import ProductCard from "../components/ProductCard";
import styles from "./ProductList.module.css";

// Dados provisórios: serão substituídos pela API em feature/consumo-api
const products = [
  { id: 1, name: "Tênis Exemplo 1", price: "199,90", image: "https://placehold.co/300x200?text=Produto+1" },
  { id: 2, name: "Tênis Exemplo 2", price: "249,90", image: "https://placehold.co/300x200?text=Produto+2" },
  { id: 3, name: "Tênis Exemplo 3", price: "299,90", image: "https://placehold.co/300x200?text=Produto+3" },
];

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
        </aside>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
